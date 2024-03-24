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
import { ArrowBigRightDashIcon, Link2Icon, ViewIcon } from "lucide-react";
import Link from "next/link";
import { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const PetProjectCard = ({ project }: { project: ProjectsType }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = project?.image.map((image) => image.url);
  // console.log(images);

  const router = useRouter();

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

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
          {images.map((src, index) => (
            <CarouselItem key={index} className="">
              <CardContent className="flex aspect-square items-center justify-center p-2">
                <div
                  className="relative w-80 h-80"
                  onClick={() => openImageViewer(index)}
                >
                  <Image
                    src={src}
                    alt={""}
                    fill
                    key={index}
                    className="object-contain cursor-pointer"
                    sizes="(max-width: 768px) 100vw, (max-width: 1220px) 50vw, 33vw"
                    priority
                    style={{ margin: "2px" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer w-full">
                    <span className="text-white text-sm">
                      <ViewIcon size={20} />
                    </span>
                  </div>
                </div>
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="fixed z-50 ">
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
      <div className="flex justify-between px-6 md:pt-0 pt-2 text-blue-500">
        <Link
          className="flex gap-1 items-center border p-2 rounded-md hover:bg-blue-500 hover:text-slate-900"
          href={project.demo}
        >
          Demo <Link2Icon className="dark:text-white text-black" size={18} />
        </Link>
        {project.github && (
          <Link
            className="flex gap-1 items-center border p-2 rounded-md hover:bg-blue-500 hover:text-slate-900 "
            href={project.github}
          >
            Github{" "}
            <GitHubLogoIcon className="dark:text-white text-black text-lg" />
          </Link>
        )}
      </div>
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

export default PetProjectCard;
