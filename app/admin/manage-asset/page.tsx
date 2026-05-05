import AssetManager from "@/components/AssetManager";

export default function ManageAssets() {
  return (
    <main className="mx-auto max-w-5xl px-4 pt-32 pb-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Manage Assets</h1>

        <p className="max-w-2xl text-sm text-muted">
          View, edit, and delete your portfolio assets.
        </p>
      </div>

      <div className="mt-8">
        <AssetManager />
      </div>
    </main>
  );
}
