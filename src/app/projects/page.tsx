import * as React from "react";
import { ProjectsService } from "@/services/blogs.service";
import ProjectCard from "@/components/shared/project-card";
import PersonalProjectCard from "@/components/shared/persona-card";

async function getData() {
  try {
    const res = await ProjectsService.getAllWorkExamples();
    return res.workProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
async function getPersonalProjects() {
  try {
    const res = await ProjectsService.getAllPersonalProjects();
    return res.personalProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

const Projects = async () => {
  const projects = await getData();
  const personalProjects = await getPersonalProjects();
  console.log(personalProjects);

  return (
    <>
      <div className="md:max-w-[1220px] mx-auto grid place-items-center md:pt-24 pt-20">
        <h1 className="text-[24px] mb-3 text-center font-semibold">
          Personal Projects
        </h1>
        <div className="flex md:flex-row md:gap-16 gap-6 flex-col ">
          {personalProjects.map((project) => (
            <PersonalProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>
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
    </>
  );
};

export default Projects;
