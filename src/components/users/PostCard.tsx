import React from "react";
import type { Post } from "../../types/user";

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
      <h3 className="text-lg font-semibold text-slate-800 mb-3 capitalize">
        {post.title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm">{post.body}</p>
    </article>
  );
};
