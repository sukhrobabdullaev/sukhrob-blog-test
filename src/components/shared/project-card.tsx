"use client";

import { ProjectsType } from "@/interfaces/blogs.interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowBigRightDashIcon } from "lucide-react";

const ProjectCard = ({ project }: { project: ProjectsType }) => {
  const router = useRouter();

  return (
    <Card className="w-full max-w-xs flex flex-col-reverse md:flex-col">
      <CardHeader className="pt-4 pb-0 px-6 flex flex-col gap-2">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {project.description}
        </CardDescription>
        <CardFooter className="flex gap-2 p-0 md:hidden flex-wrap">
          {project?.technolgies.map((el) => (
            <span className="text-indigo-400" key={el}>
              #{el.toLowerCase()}
            </span>
          ))}
        </CardFooter>
        <button
          className="flex items-center gap-1 text-md text-green-600 md:pb-0 pb-4"
          onClick={() => router.push(`/projects/${project.slug}`)}
        >
          Read more
          <ArrowBigRightDashIcon size={20} />
        </button>
      </CardHeader>
      <Carousel className="w-full" key={project.title}>
        <CarouselContent>
          {project.image.map((img) => (
            <CarouselItem key={img.url}>
              <CardContent className="flex aspect-square items-center justify-center p-2">
                <div className="relative md:h-72 md:w-64 w-64 h-64">
                  <Image
                    src={img.url}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1220px) 50vw, 33vw"
                    priority
                  />
                </div>
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <CardFooter className="md:flex md:gap-2 pb-0 px-6 md:p-6 hidden md:flex-wrap">
        {project?.technolgies.map((el) => (
          <span className="text-indigo-400" key={el}>
            #{el.toLowerCase()}
          </span>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
