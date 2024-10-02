import Link from "next/link";
import { dateTimeCalc } from "@/helpers/date.time";
import { BlogsService } from "@/services/blogs.service";
import { ArrowLeftCircleIcon, Calendar } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import NotFound from "./not-found";
import DisqusComments from "./disqus-comments";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.slug;
  const post = await BlogsService.getDetailedBlog(id);

  return {
    title: `Blog | ${post ? post.title.substring(0, 20) : "not found"}...`,
  };
}

async function getData(id: string) {
  try {
    const detailedBlog = await BlogsService.getDetailedBlog(id);
    return detailedBlog;
  } catch (error) {
    console.error("Error fetching detailed blog:", error);
    return null;
  }
}

const BlogDetailedPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  console.log(data);

  if (!data) {
    return <NotFound />;
  }

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
    <div className="md:max-w-[800px] mx-auto md:pt-32 pt-20 overflow-y-auto top-scroll">
      <div className="pb-2 border-b">
          <Link href="/blogs" className="flex gap-2 items-center">
            <ArrowLeftCircleIcon className="w-5 h-5 text-green-600" /> 
            <span className="text-stone-500">Back to blogs</span>
          </Link>
        <div className="flex gap-2 items-center">
          <h1 className="md:text-2xl text-lg font-bold">{data.title}</h1>
        </div>
        {/* <h3 className="text-muted-foreground">{data.excerpt}</h3> */}
        <span className="text-base flex items-center gap-2 text-green-300">
          <Calendar className="w-5 h-5 text-red-300" />
          <span className="text-sm">{dateTimeCalc(data.createdAt)}</span>
        </span>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: mapHtmlToTailwind(data?.content?.html),
        }}
      ></div>
    </div>
  );
};

export default BlogDetailedPage;
