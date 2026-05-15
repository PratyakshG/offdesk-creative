import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  try {
    // const resolvedParams = await params;
    const POST_QUERY = `*[_type == "blog" && slug.current == $slug][0]{
    _id,
    content,
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
    }`;

    const blog = await client.fetch<SanityDocument>(
      POST_QUERY,
      await params,
      options,
    );

    if (!blog) {
      return {
        title: "Blog Post Not Found",
        description: "The blog post you're looking for doesn't exist.",
      };
    }

    const imageUrl = blog.image
      ? urlFor(blog.image)!.width(1200).height(630).url()
      : "";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://offdesk.com";
    const blogUrl = `${baseUrl}/blog/${blog.slug.current}`;

    return {
      title: blog.title,
      description: blog.excerpt || "Read our latest blog post",
      keywords: blog.tags?.join(", ") || "blog",
      authors: [{ name: blog.author }],
      openGraph: {
        title: blog.title,
        description: blog.excerpt || "Read our latest blog post",
        url: blogUrl,
        type: "article",
        publishedTime: blog.publishedAt,
        authors: [blog.author],
        tags: blog.tags || [],
        images: imageUrl
          ? [
              {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: blog.title,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.excerpt || "Read our latest blog post",
        images: imageUrl ? [imageUrl] : [],
        creator: blog.author,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post",
    };
  }
}

import { PortableText, type SanityDocument } from "next-sanity";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const POST_QUERY = `
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      content,
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

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );

  console.log(post);

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  const wordCount =
    post.content?.reduce((count: number, block: any) => {
      if (block._type === "block" && block.children) {
        return (
          count +
          block.children.reduce((textCount: number, child: any) => {
            return textCount + (child.text?.split(/\s+/).length || 0);
          }, 0)
        );
      }
      return count;
    }, 0) || 0;

  const readingTime = Math.ceil(wordCount / 200);

  return (
    <main className="container mx-auto min-h-screen max-w-7xl pt-32 p-8 flex flex-col gap-4">
      <Link
        href="/blog"
        className="mb-10 flex items-center justify-center pl-4 pr-6 py-2.5 bg-accent hover:bg-accent/80 w-fit rounded-lg gap-1 transition-all"
      >
        <IoIosArrowBack /> Back
      </Link>

      <div>
        <div className="flex items-center gap-10 mb-12 *:w-full">
          {/* Header */}
          <div>
            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400 flex-wrap">
              {post.category && (
                <span className="px-3 py-1 bg-gray-800 rounded-full capitalize">
                  {post.category}
                </span>
              )}
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              {readingTime > 0 && <span>{readingTime} min read</span>}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-2 leading-none">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-gray-400 mb-8">{post.excerpt}</p>
            )}

            {/* Author */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">By:</span>
              <span className="font-semibold">{post.author ?? "Unknown"}</span>
            </div>
          </div>

          {postImageUrl && (
            <Image
              src={postImageUrl}
              alt={post.title}
              width={550}
              height={310}
              className="aspect-video rounded-xl"
            />
          )}
        </div>

        <div className="prose">
          {Array.isArray(post.content) && (
            <PortableText
              value={post.content}
              components={{
                block: {
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold mt-10 mb-6">
                      {children}
                    </h1>
                  ),

                  h2: ({ children }) => (
                    <h2 className="text-3xl font-semibold pt-8 mb-5 not-first:border-t border-white/30">
                      {children}
                    </h2>
                  ),

                  h3: ({ children }) => (
                    <h3 className="text-2xl font-medium mt-6 mb-4">
                      {children}
                    </h3>
                  ),

                  normal: ({ children }) => (
                    <p className="text-base leading-7 text-neutral-300">
                      {children}
                    </p>
                  ),

                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 pl-4 italic my-6">
                      {children}
                    </blockquote>
                  ),
                },

                types: {
                  image: ({ value }) => (
                    <Image
                      src={urlFor(value)?.width(800).url() || ""}
                      alt={value.alt || "Post image"}
                      width={800}
                      height={500}
                      className="rounded-xl my-6 w-full aspect-16/6"
                    />
                  ),
                },

                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc ml-6 mb-4">{children}</ul>
                  ),

                  number: ({ children }) => (
                    <ol className="list-decimal ml-6 mb-4">{children}</ol>
                  ),
                },

                listItem: {
                  bullet: ({ children }) => (
                    <li className="mb-2">{children}</li>
                  ),

                  number: ({ children }) => (
                    <li className="mb-2">{children}</li>
                  ),
                },

                marks: {
                  strong: ({ children }) => (
                    <strong className="font-semibold">{children}</strong>
                  ),

                  em: ({ children }) => <em className="italic">{children}</em>,

                  link: ({ children, value }) => (
                    <a
                      href={value?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {children}
                    </a>
                  ),
                },
              }}
            />
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="border-t border-gray-800 pt-8 mb-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-full text-sm transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 mb-4">Share this article:</p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug.current}`,
              )}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent/70 hover:bg-accent rounded-lg transition-colors flex items-center justify-center"
            >
              <FaXTwitter />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug.current}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent/70 hover:bg-accent rounded-lg transition-colors flex items-center justify-center"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(
                post.title,
              )}&body=${encodeURIComponent(
                `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug.current}`,
              )}`}
              className="px-4 py-2 bg-accent/70 hover:bg-accent rounded-lg transition-colors"
            >
              <MdEmail size={18} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
