import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="px-4">
      <Card className="flex justify-between items-center">
        <div className="left">
          <CardHeader>
            <CardTitle className="flex flex-col">
              <span className="text-lg">
                <Skeleton className="w-[200px] h-4" />
              </span>
              <span className="text-sm text-muted-foreground font-normal">
                <Skeleton className="w-[300px] h-3 mt-1" />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <span className="text-base flex items-center gap-2 mt-2 text-green-300">
              <Skeleton className="w-5 h-5 text-red-300" />
              <Skeleton className="w-[100px] h-4" />
            </span>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground  rounded-md p-1 text-sm">
                <Skeleton className="w-[100px] h-4" />
              </span>
              <span className="text-sm justify-end">
                <Skeleton className="w-[60px] h-4" />
              </span>
            </div>
          </CardContent>
        </div>
        <div className="relative md:w-40 md:h-40 w-20 h-20 mr-2">
          <Skeleton className="w-full h-full rounded-md" />
        </div>
      </Card>
    </div>
  );
};

export default CardSkeleton;
