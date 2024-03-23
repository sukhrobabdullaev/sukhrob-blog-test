import Link from "next/link";
import { dateTimeCalc } from "@/helpers/date.time";
import { BlogsService, ProjectsService } from "@/services/blogs.service";
import { ArrowLeftCircleIcon, Calendar } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import NotFound from "./not-found";
import Image from "next/image";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.slug;
  const project = await ProjectsService.getDetailedProject(id);

  return {
    title: `Project | ${
      project ? project.title.substring(0, 20) : "not found"
    }...`,
  };
}

async function getData(id: string) {
  try {
    const detailedProject = await ProjectsService.getDetailedProject(id);
    return detailedProject;
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
  console.log(params.slug);

  const data = await getData(params.slug);
  console.log(data);

  if (!data) {
    return <NotFound />;
  }

  const mapHtmlToTailwind = (html: string) => {
    // Define mappings for HTML tags to Tailwind CSS classes
    const tagMappings: { [key: string]: string } = {
      h1: "text-4xl font-bold mb-4",
      h2: "md:text-3xl text-xl font-bold mb-3",
      h3: "md:text-2xl text-xl font-bold mb-2",
      p: "text-base mb-2",
      a: "text-blue-400",
      ul: "list-disc ml-10 my-4",
      ol: "list-decimal ml-10 my-4",
      code: "bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-sm",
      pre: "bg-gray-100 dark:bg-gray-800 overflow-y-scroll rounded-md p-2 text-sm ",
      // Add more mappings for other HTML tags as needed
    };

    // Replace each HTML tag with its corresponding Tailwind CSS classes
    for (const tag in tagMappings) {
      const regex = new RegExp(`<${tag}`, "g");
      html = html.replace(regex, `<${tag} class="${tagMappings[tag]}"`);
    }

    return html;
  };

  return (
    <div className="md:max-w-[1000px] mx-auto md:pt-32 pt-20 px-4 overflow-y-auto top-scroll">
      <div className="pb-6 border-b">
        <div className="flex gap-2 items-center">
          <Link href="/projects" className="inline-block animate-moveLeft">
            <ArrowLeftCircleIcon className="w-5 h-5 text-green-600" />
          </Link>
          <h1 className="md:text-4xl text-2xl font-bold">{data.title}</h1>
        </div>
        <h3 className="text-lg text-muted-foreground">{data.title}</h3>
        {/* <span className="text-base flex items-center gap-2 mt-2 text-green-300">
          <Calendar className="w-5 h-5 text-red-300" />
          {dateTimeCalc(data.createdAt)}
        </span> */}
      </div>
      <div
        className="pt-2"
        dangerouslySetInnerHTML={{
          __html: mapHtmlToTailwind(data?.content?.html),
        }}
      />
    </div>
  );
};

export default ProjectDetailedPage;
