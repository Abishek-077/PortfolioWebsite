import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="md:max-w-lg lg:max-w-md">
        <CardContent className="space-y-2.5 pt-5">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <div className="relative aspect-video">
            <Image src={post.image} alt={post.title} fill className="w-full rounded-md object-cover" />
          </div>
          <p className="text-sm text-muted-foreground">{post.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
          <p>Published on {post.publishedOn}</p>
          <Avatar className="h-7 w-7">
            <AvatarImage src="/favicon.ico" alt="Author avatar" />
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
        </CardFooter>
      </Card>
    </Link>
  );
}
