import * as React from "react";
import { ProjectsService } from "@/services/blogs.service";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

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
  //   console.log(projects);
  return (
    <div className="md:max-w-[1220px] flex justify-between md:flex-row md:gap-0 gap-4 flex-col-reverse mx-auto md:pt-32 pt-20">
      <h1>Projects</h1>
      {projects.map((project) => (
        <Carousel className="w-full max-w-xs" key={project.title}>
          <CarouselContent>
            {project.image.map((img) => (
              <CarouselItem key={img.url}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      {/* <h1>{img.url}</h1> */}
                      <Image src={img.url} alt=";" width={300} height={300} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ))}
    </div>
  );
};

export default Projects;
