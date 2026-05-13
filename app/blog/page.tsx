import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import PageTransition from "@/components/PageTransition";

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
    <main className="container mx-auto min-h-screen max-w-3xl pt-32 p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li
            className="hover:underline"
            key={post._id}
          >
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
