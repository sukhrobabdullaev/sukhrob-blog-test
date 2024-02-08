import { BlogsService } from "@/services/blogs.service";

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
    return <div>Loading...</div>;
  }

  const mapHtmlToTailwind = (html: string) => {
    // Define mappings for HTML tags to Tailwind CSS classes
    const tagMappings: { [key: string]: string } = {
      h1: "text-4xl font-bold mb-4",
      h2: "text-3xl font-bold mb-3",
      h3: "text-2xl font-bold mb-2",
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
    <div className="md:max-w-[1220px] mx-auto pt-32">
      <span>{data.title}</span>
      <span>{data.excerpt}</span>
      <div
        dangerouslySetInnerHTML={{
          __html: mapHtmlToTailwind(data?.content?.html),
        }}
      ></div>
    </div>
  );
};

export default BlogDetailedPage;
