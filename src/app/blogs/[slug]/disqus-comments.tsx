import { IsinglePost } from "@/interfaces/blogs.interface";
import { DiscussionEmbed } from "disqus-react";
import React from "react";

const DisqusComments = ({ data }: { data: IsinglePost }) => {
  const disqusShortname = "Fikrlar";
  const disqusConfig = {
    url: `https://localhost:3000/blog/${data.slug}`,
    identifier: data.id, // Single post id
    title: data.title, // Single post title
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
