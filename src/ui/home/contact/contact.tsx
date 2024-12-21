"use client";

import React from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import useContact from "./action";

const Contact = () => {
  const { onSubmit, form, isLoading } = useContact();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  return (
    <section
      className="flex justify-around items-center flex-col max-w-[1400px] mx-auto xs:px-5 lg:px-8 xs:py-12 lg:py-20 min-h-[60vh]"
      id="contact-us"
    >
      <div className="w-full flex justify-around items-center flex-col gap-1 text-center">
        <p className="xs:text-4xl lg:text-5xl font-bold">
          Contact Velour Web
        </p>
        <p className="my-8 lg:text-lg">
          Looking for new Website for wedding designer? Or help with Local SEO.
          Send us a message and we get back to you ASAP.
        </p>
      </div>
      <form
        className="flex flex-col rounded-2xl lg:p-6 xs:p-4 gap-2 xs:w-full lg:max-w-5xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="my-4 lg:text-lg text-left">Hello, developer,</p>
        <p className="lg:text-lg">
          <span className="border-b border-white pb-3 mb-4 inline-block">
            {" "}
            My name is{" "}
          </span>
          <Input
            {...register("name")}
            placeholder="Emily Jane"
            name="name"
            error={errors}
          />
          <span className="border-b border-white pb-3 mb-4 inline-block">
            and I am a{" "}
          </span>
          <Input
            {...register("business")}
            placeholder="Wedding Florist"
            error={errors}
            styles="!max-w-40"
          />
          <span className="border-b border-white pb-3 mb-4 inline-block">
            in
          </span>
          <Input
            {...register("area")}
            placeholder="Miami"
            error={errors}
            styles="!max-w-30"
          />{" "}
          <span className="border-b border-white pb-3 mb-4 inline-block">
            area. I am also interested in
          </span>
        </p>
        <p className="lg:text-lg">
          <Input
            {...register("service")}
            placeholder="New Website Design"
            error={errors}
            styles="!max-w-52"
          />{" "}
          <span className="border-b border-white pb-3 mb-4 inline-block">
            Also interested in{" "}
          </span>
          <Input
            {...register("localSEO")}
            placeholder="Local SEO"
            error={errors}
            styles="!max-w-28"
          />{" "}
          <span className="border-b border-white pb-3 mb-4 inline-block">
            My email is
          </span>
          <Input
            {...register("email")}
            placeholder="john@gmail.com"
            error={errors}
            styles="!max-w-60"
          />
          <span className="border-b border-white pb-3 mb-4 inline-block">
            and My
          </span>
        </p>
        <p className="lg:text-lg">
          <span className="border-b border-white pb-3 mb-4 inline-block">
            Phone Number is
          </span>
          <Input
            {...register("phone")}
            placeholder="(978) 319-1503"
            error={errors}
            styles="!max-w-40"
          />
          <span className="border-b border-white pb-3 mb-4 inline-block">
            Looking forward to hearing from you soon.
          </span>
        </p>
        <Button
          title="Submit"
          buttonStyles="w-40 py-4 mt-2 self-center mt-8"
          disabled={isLoading}
        />
      </form>
    </section>
  );
};

export default Contact;
