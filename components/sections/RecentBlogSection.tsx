import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/sections/BlogCard";

export function RecentBlogSection() {
  return (
    <section className="container py-12 md:py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl">Recent Blog</h2>
      <div className="flex flex-wrap gap-5">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
