"use client";

import HeroSection from "@/ui/blogDetails/HeroSecion";
import ContentSection from "@/ui/blogDetails/ContentSection";
import { blogData } from "@/utils/constants";
import { use } from "react";

const BlogDetails = ({ params }: { params: any }) => {
  const { slug }: any = use(params);
  const post = blogData.find((post) => post.slug === slug);

  if (!post) {
    return <></>;
  }

  return (
    <div>
      <HeroSection post={post} />
      <ContentSection htmlContent={post.content} />
    </div>
  );
};

export default BlogDetails;
