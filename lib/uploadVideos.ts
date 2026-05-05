import cloudinary from './cloudinary';
import fs from 'fs';

export async function uploadVideo(filePath: string, publicId: string) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: 'video',
      public_id: publicId,
      folder: 'videos',
    });
    console.log('Uploaded:', result.secure_url);
    return result;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
}

// Example usage (uncomment to use):
// uploadVideo('public/videos/video-1.mp4', 'entrance-design-reel');