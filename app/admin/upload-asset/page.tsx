import CloudinaryUploader from "@/components/CloudinaryUploader";

export default function UploadVideoPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pt-32 pb-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Upload Assets</h1>
        <p className="max-w-2xl text-sm text-muted">
          Select an image or video file and upload it directly to Cloudinary.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <CloudinaryUploader />
      </div>
    </main>
  );
}
