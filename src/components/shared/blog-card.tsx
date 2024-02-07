"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateTime } from "@/helpers/time.format";
import { BlogsType } from "@/interface/blogs.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogCard = ({ post }: { post: BlogsType }) => {
  const router = useRouter();

  const today: Date = new Date(post.createdAt);

  const day: string = today.getDate().toString().padStart(2, "0");
  const month: string = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(today);
  const year: string = today.getFullYear().toString();

  const formattedDate: string = `${day} ${month}, ${year}`;

  return (
    <div className="px-4">
      <Card
        className="flex justify-between cursor-pointer"
        key={post.id}
        onClick={() => router.push(`/blog/${post.slug}`)}
      >
        <div className="left">
          <CardHeader>
            <CardTitle className="flex flex-col">
              <span className="text-lg">{post.title}</span>
              <span className="text-sm text-muted-foreground font-normal">
                {post.excerpt}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-sm">{formattedDate}</span>
          </CardContent>
          <div className="flex gap-2">
            <span className="text-muted-foreground bg-blue-200  rounded-md p-1 text-sm">
              #{post.category.slug}
            </span>
            <span className="text-sm justify-end">
              {calculateTime(post?.content?.text)} min read
            </span>
          </div>
        </div>
        <div className="relative md:w-40 md:h-40">
          <Image
            src={post?.coverImage?.url}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
