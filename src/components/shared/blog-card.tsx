"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dateTimeCalc } from "@/helpers/date.time";
import { calculateTime } from "@/helpers/time.format";
import { BlogsType } from "@/interfaces/blogs.interface";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogCard = ({ post }: { post: BlogsType }) => {
  const router = useRouter();

  return (
    <div className="px-4">
      <Card
        className="flex justify-between items-center cursor-pointer"
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
          <CardContent className="flex flex-col space-y-4">
            <span className="text-base flex items-center gap-2 mt-2 text-green-300">
              <Calendar className="w-5 h-5 text-red-300" />
              {dateTimeCalc(post.createdAt)}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground bg-blue-200  rounded-md p-1 text-sm">
                #{post.category.slug}
              </span>
              <span className="text-sm justify-end">
                {calculateTime(post?.content?.text)} min read
              </span>
            </div>
          </CardContent>
        </div>
        <div className="relative md:w-40 md:h-40 w-20 h-20 mr-2">
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
