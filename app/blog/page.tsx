"use client";

import * as React from "react";

import { BlogCard } from "@/components/sections/BlogCard";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { blogCategories, blogPosts } from "@/data/blog";

function CategoriesList({
  selectedCategory,
  onCategoryChange,
}: {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}) {
  return (
    <ul className="space-y-1.5">
      {blogCategories.map((category) => (
        <li key={category} className="text-muted-foreground">
          <Button variant="ghost" onClick={() => onCategoryChange(category)} className={selectedCategory === category ? "bg-accent" : ""}>
            {category}
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const filteredPosts = React.useMemo(() => {
    if (selectedCategory === "All") {
      return blogPosts;
    }

    return blogPosts.filter((post) => post.categories.includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <main className="container flex min-h-screen flex-col pt-10">
      <div className="md:flex">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mb-5 md:hidden">
              Categories
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="mb-4 text-left text-2xl font-extrabold">Categories</SheetTitle>
            </SheetHeader>
            <CategoriesList selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          </SheetContent>
        </Sheet>

        <section className="mr-16 hidden space-y-4 md:block">
          <h1 className="text-2xl font-extrabold">Categories</h1>
          <CategoriesList selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>
      </div>
    </main>
  );
}
