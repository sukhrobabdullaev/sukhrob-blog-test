import Link from "next/link";
import { ProjectsService } from "@/services/blogs.service";
import { ArrowLeftCircleIcon, Calendar } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import NotFound from "./not-found";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.slug;
  const project = await ProjectsService.getWorkProOne(id);
  const personalProjects = await ProjectsService.getPersonalPro(id);
  const petProjects = await ProjectsService.getPetPro(id);

  return {
    title: `Project | ${project
        ? project.title.substring(0, 20)
        : personalProjects
          ? personalProjects.title.substring(0, 20)
          : petProjects
            ? petProjects.title.substring(0, 20)
            : "not found"
      }...`,
  };
}

async function getData(id: string) {
  try {
    const detailedProject = await ProjectsService.getWorkProOne(id);
    return detailedProject;
  } catch (error) {
    console.error("Error fetching detailed blog:", error);
    return null;
  }
}
async function getPersonalProjects(id: string) {
  try {
    const detailedPersonalProject = await ProjectsService.getPersonalPro(id);
    return detailedPersonalProject;
  } catch (error) {
    console.error("Error fetching detailed blog:", error);
    return null;
  }
}

async function getPetProjects(id: string) {
  try {
    const detailedPetProject = await ProjectsService.getPetPro(id);
    return detailedPetProject;
  } catch (error) {
    console.error("Error fetching detailed blog:", error);
    return null;
  }
}

const ProjectDetailedPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const data = await getData(params.slug);
  const personalProjects = await getPersonalProjects(params.slug);
  const petProjects = await getPetProjects(params.slug);

  const mapHtmlToTailwind = (html: string) => {
    // Define mappings for HTML tags to Tailwind CSS classes
    const tagMappings: { [key: string]: string } = {
      h1: "md:text-2xl font-bold mt-10 mb-8",
      h2: "md:text-xl font-bold mt-10 mb-8",
      h3: "md:text-lg font-bold mt-10 mb-8",
      p: "text-base my-8",
      a: "text-blue-400",
      ul: "list-disc my-8 pl-10",
      ol: "list-decimal ml-10 my-4",
      code: "bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-sm text-green-400", // Tailwind for code
      pre: "bg-gray-900 text-gray-100 dark:bg-gray-800 overflow-x-auto rounded-md p-4 text-sm", // Updated style for pre
      img: "rounded-xl",
    };

    // Replace each HTML tag with its corresponding Tailwind CSS classes
    for (const tag in tagMappings) {
      const regex = new RegExp(`<${tag}`, "g");
      html = html.replace(regex, `<${tag} class="${tagMappings[tag]}"`);
    }

    return html;
  };

  return (
    <>
      {data && (
        <div className="md:max-w-[800px] mx-auto md:pt-24 pt-20 px-4 overflow-y-auto top-scroll">
          <div className="pb-2 border-b">
            <div className="flex gap-2 items-center">
              <Link href="/projects" className="inline-block animate-moveLeft">
                <ArrowLeftCircleIcon className="w-5 h-5 text-green-600" />
              </Link>
              <h1 className="md:text-4xl text-2xl font-bold">{data.title}</h1>
            </div>
            <div className="flex space-x-4 flex-wrap">
              {data?.technolgies.map((el) => (
                <span className="text-indigo-400" key={el}>
                  #{el.toLowerCase()}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-2 ">
            <p className="pb-2 border-b">{data.description}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: mapHtmlToTailwind(data?.content?.html),
              }}
              className="pt-2"
            />
          </div>
        </div>
      )}
      {personalProjects && (
        <div className="md:max-w-[800px] mx-auto md:pt-24 pt-20 px-4 overflow-y-auto top-scroll">
          <div className="pb-2 border-b">
            <div className="flex gap-2 items-center">
              <Link href="/projects" className="inline-block animate-moveLeft">
                <ArrowLeftCircleIcon className="w-5 h-5 text-green-600" />
              </Link>
              <h1 className="md:text-4xl text-2xl font-bold">
                {personalProjects.title}
              </h1>
            </div>
            <div className="flex space-x-4 flex-wrap">
              {personalProjects?.technolgies.map((el) => (
                <span className="text-indigo-400" key={el}>
                  #{el.toLowerCase()}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-2 ">
            <p className="pb-2 border-b">{personalProjects.description}</p>
            <div
              className="pt-2"
              dangerouslySetInnerHTML={{
                __html: mapHtmlToTailwind(personalProjects?.content?.html),
              }}
            />
          </div>
        </div>
      )}
      {petProjects && (
        <div className="md:max-w-[800px] mx-auto md:pt-24 pt-20 px-4 overflow-y-auto top-scroll">
          <div className="pb-2 border-b">
            <div className="flex gap-2 items-center">
              <Link href="/projects" className="inline-block animate-moveLeft">
                <ArrowLeftCircleIcon className="w-5 h-5 text-green-600" />
              </Link>
              <h1 className="md:text-4xl text-2xl font-bold">
                {petProjects.title}
              </h1>
            </div>
            <div className="flex space-x-4 flex-wrap">
              {petProjects?.technolgies.map((el) => (
                <span className="text-indigo-400" key={el}>
                  #{el.toLowerCase()}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-2 ">
            <p className="pb-2 border-b">{petProjects.description}</p>
            <div
              className="pt-2"
              dangerouslySetInnerHTML={{
                __html: mapHtmlToTailwind(petProjects?.content?.html),
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetailedPage;
