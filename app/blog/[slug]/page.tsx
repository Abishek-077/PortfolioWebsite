import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { profile } from "@/data/profile";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function findPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return {
      title: `Post Not Found | ${profile.name}`,
    };
  }

  return {
    title: `${post.title} | ${profile.name}`,
    description: post.description,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container flex min-h-screen flex-col pt-10">
      <article className="mx-auto max-w-3xl pb-5">
        <Button asChild variant="link" className="!mx-0 !-ml-1 mb-5 !px-0 hover:no-underline">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </Button>

        <div className="flex w-full flex-col gap-3 pb-7">
          <h1 className="text-3xl font-extrabold sm:text-4xl">{post.title}</h1>
          <div className="mt-3 flex flex-col gap-3">
            <p className="text-sm text-muted-foreground">Posted by</p>
            <div className="flex flex-wrap items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>AG</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-xs text-muted-foreground">{post.publishedOn}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={post.image}
            alt="cover"
            width={750}
            height={400}
            className="mb-5 w-full rounded-md"
            sizes="100vw"
          />

          <div className="prose mb-5 dark:prose-invert">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>

        <button className="text-sm">Share coming soon</button>
      </article>
    </main>
  );
}
