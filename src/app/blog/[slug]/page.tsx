"use client";

import { use } from "react";
import HeroSection from "@/ui/blogDetails/HeroSecion";
import ContentSection from "@/ui/blogDetails/ContentSection";
import useHomeStore from "@/store/home";

const BlogDetails = ({ params }: { params: any }) => {
  const { slug }: any = use(params);
  const { blogs } = useHomeStore();
  const post = blogs.find((post) => post.slug === slug);

  if (!post) {
    return <></>;
  }

  return (
    <div>
      <HeroSection post={post} />
      <ContentSection htmlContent={post?.content} />
    </div>
  );
};

export default BlogDetails;
