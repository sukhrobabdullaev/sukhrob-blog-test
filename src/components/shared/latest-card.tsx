"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dateTimeCalc } from "@/helpers/date.time";
import { calculateTime } from "@/helpers/time.format";
import { BlogsType } from "@/interfaces/blogs.interface";
import { ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LatestCard = ({ latestpost }: { latestpost: BlogsType }) => {
  const router = useRouter();

  return (
    <Card
      className="flex flex-col-reverse dark:bg-cyan-900 bg-cyan-100 gap-2 items-center cursor-pointer my-card transition-transform duration-300 transform-gpu hover:scale-95 relative"
      key={latestpost.id}
      onClick={() => router.push(`/blogs/${latestpost.slug}`)}
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
        <CardContent className="flex flex-col space-y-1">
          <span className="text-base flex items-center gap-2 text-green-300">
            <Calendar className="w-5 h-5 text-red-300" />
            <span className="text-sm">{dateTimeCalc(latestpost.createdAt)}</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[12px] justify-end">
              {calculateTime(latestpost?.content?.text)} min read
            </span>
          </div>
        </CardContent>
      </div>
      <div className="relative md:w-40 md:h-40 w-48 h-48">
        <Image
          src={latestpost?.coverImage?.url}
          alt={latestpost.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1220px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full rounded-md bg-black bg-opacity-60 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <span className="text-white text-lg font-semibold transition-transform duration-300 transform-gpu hover:scale-110">
          <ArrowUpRight />
        </span>
      </div>
    </Card>
  );
};

export default LatestCard;
