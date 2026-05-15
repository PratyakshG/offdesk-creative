import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";

const POSTS_QUERY = `
    *[_type == "blog"] | order(publishedAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      image,
      content,
      author,
      publishedAt,
      category,
      tags
    }
  `;

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log(posts);

  if (!posts) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto min-h-screen pt-32 p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <li
            key={post._id}
            className=" transition-all bg-neutral-800 rounded-2xl overflow-clip h-125 w-full border border-neutral-600"
          >
            <Link
              href={`/blog/${post.slug.current}`}
              className="flex flex-col items-start group h-full w-full"
            >
              <div className="h-full max-h-75 overflow-clip">
                <Image
                  src={urlFor(post.image)?.url() ?? ""}
                  alt="image"
                  width={400}
                  height={400}
                  className="object-cover group-hover:scale-105 transition-all aspect-4/3"
                />
              </div>

              <div className="p-5 h-full w-full flex flex-col items-start justify-between">
                <div>
                  <p className="text-xs mb-3">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
                  <p className="leading-tight line-clamp-3 text-ellipsis">
                    {post.excerpt}
                  </p>
                </div>

                <span className="relative">
                  Read More
                  <span
                    className={`absolute -bottom-0.5 left-0 right-0 h-px bg-white origin-left transition-transform duration-200 scale-x-0 group-hover:scale-x-100 ease-in-out`}
                  />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
