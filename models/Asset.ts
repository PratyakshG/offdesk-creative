import { ObjectId } from 'mongodb';
import { getCollection } from '@/lib/mongodb';

export interface PortfolioAsset {
  _id?: ObjectId;
  name: string;
  category: 'Photography' | 'Graphic Design' | 'Ad-Shoots' | 'Videography';
  type: 'image' | 'video';
  cloudinary_public_id: string;
  cloudinary_url: string;
  aspect_ratio: string;
  tags?: string[];
  description?: string;
  created_at: Date;
  updated_at: Date;
}

export class AssetModel {
  private static collectionName = 'portfolio_assets';

  static async create(asset: Omit<PortfolioAsset, '_id' | 'created_at' | 'updated_at'>): Promise<PortfolioAsset> {
    const collection = await getCollection(this.collectionName);
    const now = new Date();
    const assetWithTimestamps = {
      ...asset,
      created_at: now,
      updated_at: now,
    };

    const result = await collection.insertOne(assetWithTimestamps);
    return {
      _id: result.insertedId,
      ...assetWithTimestamps,
    };
  }

  static async findByCategory(category: string): Promise<PortfolioAsset[]> {
    const collection = await getCollection(this.collectionName);
    const assets = await collection
      .find({ category })
      .sort({ created_at: -1 })
      .toArray();

    return assets as PortfolioAsset[];
  }

  static async findAll(): Promise<PortfolioAsset[]> {
    const collection = await getCollection(this.collectionName);
    const assets = await collection
      .find({})
      .sort({ created_at: -1 })
      .toArray();

    return assets as PortfolioAsset[];
  }

  static async findById(id: string): Promise<PortfolioAsset | null> {
    const collection = await getCollection(this.collectionName);
    const asset = await collection.findOne({ _id: new ObjectId(id) });
    return asset as PortfolioAsset | null;
  }

  static async update(id: string, updates: Partial<Omit<PortfolioAsset, '_id' | 'created_at'>>): Promise<boolean> {
    const collection = await getCollection(this.collectionName);
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updates,
          updated_at: new Date(),
        },
      }
    );
    return result.modifiedCount > 0;
  }

  static async delete(id: string): Promise<boolean> {
    const collection = await getCollection(this.collectionName);
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }
}