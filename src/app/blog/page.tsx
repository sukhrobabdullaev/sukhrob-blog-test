import BlogCard from "@/components/shared/blog-card";
import { BlogsType } from "@/interfaces/blogs.interface";
import { BlogsService } from "@/services/blogs.service";

function getData() {
  try {
    const res = BlogsService.getAllBlog();
    console.log("Response from API:", res);
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const BlogPage = async () => {
  const data = await getData();

  return (
    <div className="md:max-w-[1220px] mx-auto pt-32 flex gap-10">
      <div className="flex flex-col space-y-4 w-3/4">
        {data && data.length > 0 ? (
          data.map((post: BlogsType) => {
            return <BlogCard key={post.id} post={post} />;
          })
        ) : (
          <h3>No posts available.</h3>
        )}
      </div>
      <div className="">latest</div>
    </div>
  );
};

export default BlogPage;
