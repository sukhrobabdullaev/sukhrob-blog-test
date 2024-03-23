import * as React from "react";
import { ProjectsService } from "@/services/blogs.service";
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
import CustomImage from "@/components/shared/image";

async function getData() {
  try {
    const res = await ProjectsService.getAllProject();
    return res.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

const Projects = async () => {
  const projects = await getData();
  console.log(projects);
  return (
    <div className="md:max-w-[1220px] mx-auto grid place-items-center md:pt-24 pt-20">
      <h1 className="text-[24px] mb-3 text-center font-semibold">Projects</h1>
      <div className="flex md:flex-row md:gap-16 gap-6 flex-col ">
        {projects.map((project) => (
          <div>
            <Card className="w-full max-w-xs">
              <CardHeader className="pt-3 pb-0 px-6">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-6">
                  {project.description}
                </CardDescription>
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
                          />
                        </div>
                      </CardContent>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <CardFooter className="flex gap-2 flex-wrap">
                {project?.technolgies.map((el) => (
                  <span className="text-indigo-400" key={el}>
                    #{el.toLowerCase()}
                  </span>
                ))}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
