import { NextRequest, NextResponse } from "next/server";
import { AssetModel } from "@/models/Asset";

export async function GET(request: NextRequest) {
  try {
    const assets = await AssetModel.findAll();
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
