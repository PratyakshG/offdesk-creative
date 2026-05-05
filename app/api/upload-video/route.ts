import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { AssetModel } from "@/models/Asset";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;
    const aspectRatio = formData.get("aspectRatio") as string;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!name || !category) {
      return NextResponse.json(
        { error: "Name and category are required" },
        { status: 400 },
      );
    }

    const resourceType = file.type.startsWith("video/") ? "video" : "image";
    const folder = resourceType === "video" ? "videos" : "images";
    const publicId = `/${category.toLowerCase().replace(/\s+/g, "-")}/${name.toLowerCase().replace(/[^a-zA-Z0-9_-]/g, "_")}-${Date.now()}`;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const cloudinaryResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: resourceType,
            public_id: publicId,
            folder,
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        )
        .end(buffer);
    });

    const result = cloudinaryResult as any;

    // Save to MongoDB
    const asset = await AssetModel.create({
      name,
      category: category as
        | "Photography"
        | "Graphic Design"
        | "Ad-Shoots"
        | "Videography",
      type: resourceType,
      cloudinary_public_id: result.public_id,
      cloudinary_url: result.secure_url,
      aspect_ratio: aspectRatio || "16/9",
    });

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
      asset_id: asset._id,
      message: "Asset uploaded and saved successfully",
    });
  } catch (error) {
    console.error("Upload error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Upload failed";

    // Provide better error messages for common issues
    if (
      errorMessage.includes("ECONNREFUSED") ||
      errorMessage.includes("MongoServerSelectionError")
    ) {
      return NextResponse.json(
        {
          error:
            "Database connection failed. Please ensure MongoDB is accessible and MONGODB_URI is correctly configured.",
        },
        { status: 503 },
      );
    }

    if (errorMessage.includes("authentication failed")) {
      return NextResponse.json(
        {
          error:
            "MongoDB authentication failed. Check your credentials in MONGODB_URI.",
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      { error: errorMessage || "Upload failed" },
      { status: 500 },
    );
  }
}
