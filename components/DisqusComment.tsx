import { DiscussionEmbed } from "disqus-react";
const DisqusComment = ({ post }) => {
  const disqusShortname = "thulinhred";
  const disqusConfig = {
    url: "https://blog-next-ts-hazel.vercel.app/posts/${post._id}",
    identifier: post._id, // Single post id
    title: post.title, // Single post title
    // language: "ja",
  };

  return (
    <div className="px-48">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComment;
