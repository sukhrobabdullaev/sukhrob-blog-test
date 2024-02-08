"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dateTimeCalc } from "@/helpers/date.time";
import { calculateTime } from "@/helpers/time.format";
import { BlogsType } from "@/interfaces/blogs.interface";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LatestCard = ({ latestpost }: { latestpost: BlogsType }) => {
  const router = useRouter();

  return (
    <Card
      className="flex flex-col-reverse dark:bg-cyan-900 bg-cyan-100 gap-2 items-center cursor-pointer"
      key={latestpost.id}
      onClick={() => router.push(`/blog/${latestpost.slug}`)}
    >
      <div className="left">
        <CardHeader>
          <CardTitle className="flex flex-col">
            <span className="text-base">{latestpost.title}</span>
            <span className="text-sm text-muted-foreground font-normal">
              {latestpost.excerpt}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <span className="text-sm flex items-center gap-2 mt-2 text-green-300">
            <Calendar className="w-5 h-5 text-red-300" />
            {dateTimeCalc(latestpost.createdAt)}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground bg-blue-200 rounded-md p-1 text-sm">
              #{latestpost.category.slug}
            </span>
            <span className="text-sm justify-end">
              {calculateTime(latestpost?.content?.text)} min read
            </span>
          </div>
        </CardContent>
      </div>
      <div className="relative md:w-40 md:h-40 w-64 h-64 mr-2">
        <Image
          src={latestpost?.coverImage?.url}
          alt={latestpost.title}
          fill
          className="object-cover"
        />
      </div>
    </Card>
  );
};

export default LatestCard;
