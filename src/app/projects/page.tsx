import * as React from "react";
import { ProjectsService } from "@/services/blogs.service";
import ProjectCard from "@/components/shared/project-card";

async function getData() {
  try {
    const res = await ProjectsService.getAllWorkExamples();
    return res.workProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

const Projects = async () => {
  const projects = await getData();
  // console.log(projects);
  return (
    <div className="md:max-w-[1220px] mx-auto grid place-items-center md:pt-24 pt-20">
      <h1 className="text-[24px] mb-3 text-center font-semibold">
        Work Examples
      </h1>
      <div className="flex md:flex-row md:gap-16 gap-6 flex-col ">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
