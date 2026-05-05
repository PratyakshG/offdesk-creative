import { NextRequest, NextResponse } from "next/server";
import { AssetModel } from "@/models/Asset";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> },
) {
  try {
    const { category } = await params;

    // Validate category
    const validCategories = [
      "Photography",
      "Graphic Design",
      "Ad-Shoots",
      "Videography",
    ];
    if (!validCategories.includes(category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    // Fetch assets from MongoDB
    const assets = await AssetModel.findByCategory(category);

    return NextResponse.json({
      success: true,
      assets,
      count: assets.length,
    });
  } catch (error) {
    console.error("Fetch assets error:", error);
    return NextResponse.json(
      { error: "Failed to fetch assets" },
      { status: 500 },
    );
  }
}
