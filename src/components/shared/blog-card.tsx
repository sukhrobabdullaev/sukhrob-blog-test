"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dateTimeCalc } from "@/helpers/date.time";
import { calculateTime } from "@/helpers/time.format";
import { BlogsType, IlatestBlog } from "@/interfaces/blogs.interface";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogCard = ({ post }: { post: BlogsType }) => {
  const router = useRouter();

  return (
    <div className="px-4">
      <Card
        className="flex justify-between items-center cursor-pointer my-card transition-transform duration-300 transform-gpu hover:scale-95 relative"
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
              <span className="bg-[#03fcdf] rounded-md p-1 text-sm">
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
        <div className="absolute top-0 left-0 w-full h-full rounded-md bg-black bg-opacity-60 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <span className="text-white text-lg font-semibold transition-transform duration-300 transform-gpu hover:scale-110">
            Read more
          </span>
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
