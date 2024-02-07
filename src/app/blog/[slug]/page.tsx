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

  return (
    <div className="mt-20">
      <span>{data.title}</span>
      <div dangerouslySetInnerHTML={{ __html: `${data?.content?.html}` }}></div>
    </div>
  );
};

export default BlogDetailedPage;
