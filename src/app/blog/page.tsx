import React from "react";
import { BlogCard } from "@/ui/blog";
import { blogData } from "@/utils/constants";

const Blog = () => {
  return (
    <div className="mt-6 lg:px-16 px-4 py-6">
      <h1 className="text-5xl text-center my-12">
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-6">
        {blogData.map((item, index) => (
          <BlogCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
