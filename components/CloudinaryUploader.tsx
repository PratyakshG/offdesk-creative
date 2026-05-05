"use client";

import { useState } from "react";

type Category = "Photography" | "Graphic Design" | "Ad-Shoots" | "Videography";

export default function CloudinaryUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resourceType, setResourceType] = useState<"image" | "video" | null>(
    null,
  );
  const [status, setStatus] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");
  const [uploadedUrl, setUploadedUrl] = useState<string>("");

  // Metadata fields
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<Category | "">("");
  const [aspectRatio, setAspectRatio] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.currentTarget.files?.[0] ?? null;
    if (!selected) {
      setFile(null);
      setPreviewUrl(null);
      setResourceType(null);
      setMessage("");
      setUploadedUrl("");
      return;
    }

    setFile(selected);
    const type = selected.type.startsWith("video/") ? "video" : "image";
    setResourceType(type);
    setPreviewUrl(URL.createObjectURL(selected));
    setMessage("");
    setUploadedUrl("");

    // Auto-detect aspect ratio for images
    if (type === "image") {
      const img = new Image();
      img.onload = () => {
        const ratio = `${img.width}/${img.height}`;
        setAspectRatio(ratio);
      };
      img.src = URL.createObjectURL(selected);
    }
  };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file || !name || !category) {
      setMessage("Please fill in all required fields");
      return;
    }

    setStatus("uploading");
    setMessage("Uploading file to Cloudinary...");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("aspectRatio", aspectRatio || "16/9");

    try {
      const response = await fetch("/api/upload-video", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Upload failed");
      }

      setStatus("success");
      setUploadedUrl(data.url || "");
      setMessage("Upload successful!");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Upload failed");
    }
  };

  return (
    <section className="space-y-6 rounded-3xl border border-border bg-bg-card p-6">
      <form
        onSubmit={handleUpload}
        className="space-y-4"
      >
        {/* File Input */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Select file *
          </label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="w-full rounded-xl border border-border bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-accent"
            required
          />
        </div>

        {/* Metadata Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Asset Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Summer Campaign Photo"
              className="w-full rounded-xl border border-border bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-accent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Category *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
              className="w-full rounded-xl border border-border bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-accent"
              required
            >
              <option value="">Select category</option>
              <option value="Photography">Photography</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Ad-Shoots">Ad-Shoots</option>
              <option value="Videography">Videography</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Aspect Ratio
            </label>
            <input
              type="text"
              value={aspectRatio}
              onChange={(e) => setAspectRatio(e.target.value)}
              placeholder="e.g., 16/9, 1/1, 4/3"
              className="w-full rounded-xl border border-border bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-accent"
            />
          </div>
        </div>

        {/* Preview */}
        {previewUrl && resourceType === "image" && (
          <img
            src={previewUrl}
            alt="Preview"
            className="max-h-64 w-full rounded-2xl object-cover"
          />
        )}

        {previewUrl && resourceType === "video" && (
          <video
            src={previewUrl}
            controls
            className="max-h-64 w-full rounded-2xl bg-black"
          />
        )}

        <button
          type="submit"
          disabled={!file || !name || !category || status === "uploading"}
          className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "uploading" ? "Uploading..." : "Upload to Portfolio"}
        </button>
      </form>

      {message && (
        <p
          className={`text-sm ${status === "error" ? "text-red-400" : "text-green-400"}`}
        >
          {message}
        </p>
      )}

      {uploadedUrl && (
        <div className="space-y-3 rounded-3xl border border-border bg-[#111] p-4">
          <p className="text-sm font-medium text-white">Uploaded asset</p>
          {resourceType === "image" ? (
            <img
              src={uploadedUrl}
              alt="Uploaded image"
              className="max-h-56 w-full rounded-2xl object-cover"
            />
          ) : (
            <video
              src={uploadedUrl}
              controls
              className="max-h-56 w-full rounded-2xl bg-black"
            />
          )}
          <a
            href={uploadedUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-accent underline"
          >
            Open uploaded file
          </a>
        </div>
      )}
    </section>
  );
}
