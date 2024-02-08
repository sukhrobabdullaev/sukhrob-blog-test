import BlogCard from "@/components/shared/blog-card";
import LatestCard from "@/components/shared/latest-card";
import { BlogsType } from "@/interfaces/blogs.interface";
import { BlogsService } from "@/services/blogs.service";

function getData() {
  try {
    const res = BlogsService.getAllBlog();
    return res;
  } catch (error) {
    return [];
  }
}

async function getLatestPost() {
  try {
    const latestPost = await BlogsService.getLatestOne();
    return latestPost;
  } catch (error) {
    return null;
  }
}

const BlogPage = async () => {
  const data = await getData();
  const latestPost = await getLatestPost();

  return (
    <div className="md:max-w-[1220px] flex justify-between md:flex-row md:gap-0 gap-4 flex-col-reverse mx-auto pt-32 ">
      <div className="flex flex-1 overflow-auto flex-col gap-4">
        {data && data.length > 0 ? (
          data.map((post: BlogsType) => {
            return <BlogCard key={post.id} post={post} />;
          })
        ) : (
          <h3>No posts available.</h3>
        )}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, pariatur.
        Soluta earum, iure reiciendis incidunt id perferendis explicabo culpa
        tempore dolorem officiis amet odit, nemo quasi aspernatur sapiente
        repellat, quae obcaecati commodi praesentium. Ad temporibus eum fugiat
        voluptates inventore ducimus quisquam veniam in explicabo recusandae
        voluptatum aspernatur blanditiis placeat ut delectus dolores doloremque
        voluptas, consequatur necessitatibus sunt expedita nulla cumque. At
        fugit recusandae, quo cum rerum mollitia temporibus dolore amet deserunt
        ex odit illo provident consequuntur, inventore maiores ducimus, est
        eligendi exercitationem ut ea cupiditate itaque libero? Dolores quia
        quisquam dolore, necessitatibus alias nisi amet illo dicta aliquam
        obcaecati ut odio, eius numquam consequuntur temporibus libero quae est
        ad expedita accusantium ducimus suscipit esse laboriosam. Repudiandae,
        dolorum saepe, reprehenderit quas neque nemo modi incidunt veniam
        consectetur deserunt ducimus quaerat. Tempore sapiente cupiditate
        voluptate. Quis consequuntur voluptatem qui laudantium obcaecati,
        architecto illo quam labore voluptatum officia quae possimus ratione,
        quod aspernatur eius commodi harum nulla, rem veritatis ea. Tempore in
        labore accusamus. Illo ab quis saepe optio quae quas? Architecto dolore
        at ad eligendi odit? Omnis commodi dolor fugit enim eius ab aliquam
        obcaecati incidunt voluptatibus reprehenderit exercitationem
        repellendus, quas, a sapiente quaerat dolores illum alias minima
        eligendi harum, molestiae perspiciatis! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatibus quam voluptatum inventore
        incidunt officiis? Quisquam qui quaerat hic laudantium temporibus odio,
        deserunt vitae reprehenderit, nobis aut, quasi excepturi sint ut dolore
        eius ad unde libero. Rerum voluptas iste, similique et ullam impedit?
        Rem laudantium laborum quasi praesentium obcaecati vero optio nam
        corporis sint, necessitatibus molestias magni debitis iusto, saepe,
        repudiandae impedit! Molestias dolorum adipisci reprehenderit, fuga
        quasi illum fugit aut earum quibusdam expedita pariatur, omnis culpa
        minus perferendis possimus. Est possimus quo inventore cum doloremque
        nihil aliquid cupiditate hic. Perferendis omnis culpa harum repellendus,
        repudiandae cumque. Quae, aspernatur aliquid possimus fugiat, earum
        exercitationem molestiae perferendis, voluptates amet voluptatibus
        tempora excepturi veritatis nam. Voluptate eius possimus ipsum tempora
        obcaecati, veritatis illum. Vero magnam praesentium qui quidem minima
        maxime inventore ipsa aspernatur temporibus incidunt facilis tempore
        illum aliquam voluptatibus culpa odit minus atque dolorem velit nam
        possimus consequatur, est ad! Ducimus iure eius doloribus totam
        dignissimos itaque hic obcaecati, officia id in beatae non quo, enim
        reiciendis illum perferendis, nam laboriosam aperiam iste facilis
        ratione? Natus quis vitae vero molestias? Similique ex sit minima esse
        vero, aliquam pariatur non omnis earum tenetur voluptates unde, dolores
        nisi illo suscipit culpa. Hic, cupiditate porro?
      </div>
      <div className="flex flex-col gap-4 md:sticky md:top-16 md:w-80 md:h-80 p-4">
        <h3 className="text-center  font-bold md:text-3xl  text-2xl">
          Latest post
        </h3>
        <div className="flex flex-col space-y-4">
          {latestPost && latestPost.length > 0 ? (
            latestPost.map((latestpost: BlogsType) => {
              return <LatestCard key={latestpost.id} latestpost={latestpost} />;
            })
          ) : (
            <h3>No posts available.</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
