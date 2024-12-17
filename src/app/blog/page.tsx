"use client";

import React, { useEffect } from "react";
import { BlogCard } from "@/ui/blog";
import useHomeStore from "@/store/home";

const Blog = () => {
  const { blogs, getAllBlogs } = useHomeStore();

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="mt-6 lg:px-16 px-4 py-6">
      <h1 className="xs:text-4xl lg:text-5xl text-center my-12">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-6">
        {blogs.map((item, index) => (
          <BlogCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
