"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PortfolioAsset } from "@/models/Asset";

export default function AssetManager() {
  const [assets, setAssets] = useState<PortfolioAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<Partial<PortfolioAsset>>({});
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [previewAsset, setPreviewAsset] = useState<PortfolioAsset | null>(null);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/assets");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch assets");
      }

      setAssets(data.assets || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch assets");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (asset: PortfolioAsset) => {
    setEditingId(asset._id?.toString() || null);
    setEditFormData(asset);
  };

  const handleSaveEdit = async () => {
    if (!editingId) return;

    try {
      setError("");
      const response = await fetch(`/api/assets/update/${editingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editFormData.name,
          description: editFormData.description,
          tags: editFormData.tags,
          category: editFormData.category,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update asset");
      }

      setSuccessMessage("Asset updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
      setEditingId(null);
      fetchAssets();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update asset");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this asset?")) {
      return;
    }

    try {
      setDeletingId(id);
      setError("");
      const response = await fetch(`/api/assets/update/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete asset");
      }

      setSuccessMessage("Asset deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
      fetchAssets();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete asset");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <section className="space-y-6 rounded-3xl border border-border bg-bg-card p-6">
        <div className="text-center text-muted">Loading assets...</div>
      </section>
    );
  }

  return (
    <section className="space-y-6 rounded-3xl border border-border bg-bg-card p-6">
      {successMessage && (
        <div className="rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3 text-sm text-green-400">
          {successMessage}
        </div>
      )}

      {error && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {assets.length === 0 ? (
        <div className="text-center py-8 text-muted">
          No assets found. Upload one to get started!
        </div>
      ) : (
        <div className="space-y-4 max-h-screen overflow-y-auto">
          {assets.map((asset) => (
            <div
              key={asset._id?.toString()}
              className="rounded-lg border border-border/50 bg-bg-secondary p-4"
            >
              {editingId === asset._id?.toString() ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={editFormData.name || ""}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          name: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Description
                    </label>
                    <textarea
                      value={editFormData.description || ""}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          description: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-accent"
                      rows={2}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Category
                    </label>
                    <select
                      value={editFormData.category || ""}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          category: e.target.value as any,
                        })
                      }
                      className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-accent"
                    >
                      <option value="Photography">Photography</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Ad-Shoots">Ad-Shoots</option>
                      <option value="Videography">Videography</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Tags (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={editFormData.tags?.join(", ") || ""}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          tags: e.target.value
                            .split(",")
                            .map((tag) => tag.trim())
                            .filter(Boolean),
                        })
                      }
                      className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-accent"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveEdit}
                      className="flex-1 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex-1 rounded-lg border border-border bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-border/10 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 flex gap-3">
                  {/* Thumbnail Preview */}
                  <div className="rounded-lg overflow-hidden bg-bg-secondary border border-border/30 h-32">
                    {asset.type === "image" ? (
                      <img
                        src={asset.cloudinary_url}
                        alt={asset.name}
                        className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setPreviewAsset(asset)}
                      />
                    ) : (
                      <video
                        src={asset.cloudinary_url}
                        className="w-full h-full object-cover bg-black cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setPreviewAsset(asset)}
                      />
                    )}
                  </div>

                  <div className="flex flex-col lg:flex-row justify-between w-full">
                    <div>
                      <div>
                        <h3 className="font-medium text-white">{asset.name}</h3>
                        <p className="text-xs text-muted capitalize">
                          {asset.category} • {asset.type}
                        </p>
                      </div>

                      <div className="text-xs text-muted/60 mt-2 border-t border-border/30">
                        Added -{" "}
                        {asset.created_at
                          ? new Date(asset.created_at).toLocaleDateString()
                          : "Unknown"}
                      </div>
                    </div>

                    {/* action buttons */}
                    <div className="flex items-start gap-2">
                      <button
                        onClick={() => setPreviewAsset(asset)}
                        className="rounded-lg bg-blue-500/20 border border-blue-500/30 px-3 py-1 text-xs font-medium text-blue-400 hover:bg-blue-500/30 transition-colors"
                      >
                        Preview
                      </button>
                      <button
                        onClick={() => handleEdit(asset)}
                        className="rounded-lg bg-accent/20 border border-accent/30 px-3 py-1 text-xs font-medium text-accent hover:bg-accent/30 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          handleDelete(asset._id?.toString() || "")
                        }
                        disabled={deletingId === asset._id?.toString()}
                        className="rounded-lg bg-red-500/20 border border-red-500/30 px-3 py-1 text-xs font-medium text-red-400 hover:bg-red-500/30 transition-colors disabled:opacity-50"
                      >
                        {deletingId === asset._id?.toString()
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Preview Modal */}
      {previewAsset && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setPreviewAsset(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] rounded-lg border border-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setPreviewAsset(null)}
              className="absolute top-6 right-6 z-10 rounded-lg bg-black/60 hover:bg-black/80 px-3 py-2 text-sm font-medium text-white transition-colors"
            >
              ✕
            </button>

            {/* Content */}
            <div className="bg-black p-4">
              {previewAsset.type === "image" ? (
                <img
                  src={previewAsset.cloudinary_url}
                  alt={previewAsset.name}
                  className="max-w-4xl max-h-[80vh] w-auto h-auto"
                />
              ) : (
                <video
                  src={previewAsset.cloudinary_url}
                  controls
                  autoPlay
                  className="max-w-4xl max-h-[80vh] w-auto h-auto"
                />
              )}
            </div>

            {/* Info Footer */}
            <div className="bg-bg-secondary border-t border-border p-4 space-y-2">
              <h3 className="font-semibold text-white">{previewAsset.name}</h3>
              <p className="text-xs text-muted">
                {previewAsset.category} • {previewAsset.type}
              </p>
              {previewAsset.description && (
                <p className="text-sm text-muted">{previewAsset.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
