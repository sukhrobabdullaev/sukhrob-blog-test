import * as React from "react";
import { ProjectsService } from "@/services/blogs.service";
import ProjectCard from "@/components/shared/project-card";
import PersonalProjectCard from "@/components/shared/persona-card";
import PetProjectCard from "@/components/shared/pet-card";

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
async function getPetProjects() {
  try {
    const res = await ProjectsService.getAllPetProjects();
    return res.petPojects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

const Projects = async () => {
  const projects = await getData();
  const personalProjects = await getPersonalProjects();
  const petPrjects = await getPetProjects();

  return (
    <>
      <div className="md:max-w-[1200px] mx-auto flex flex-wrap items-center justify-center flex-col md:pt-24 pt-20">
        <h1 className="text-[24px] mb-3 text-center font-semibold">
          Work Examples
        </h1>
        <div className="flex md:flex-row flex-wrap md:gap-12 gap-6 flex-col justify-center">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>

      <div className="md:max-w-[1200px] mx-auto flex flex-wrap items-center justify-center flex-col md:pt-10 pt-8">
        <h1 className="text-[24px] mb-3 text-center font-semibold">
          Personal Projects
        </h1>
        <div className="flex md:flex-row  flex-wrap md:gap-12 gap-6 flex-col justify-center">
          {personalProjects.map((project) => (
            <PersonalProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>

      <div className="md:max-w-[1200px] mx-auto flex flex-wrap items-center justify-center flex-col md:pt-10 pt-8">
        <h1 className="text-[24px] mb-3 text-center font-semibold">
          Pet Projects
        </h1>
        <div className="flex md:flex-row flex-wrap md:gap-12 gap-6 flex-col justify-center">
          {petPrjects.map((project) => (
            <PetProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
