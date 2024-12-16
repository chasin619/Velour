"use client";

import React from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import useContact from "./action";

const Contact = () => {
  const { FEILDS, onSubmit, form, isLoading } = useContact();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  return (
    <section
      className="flex justify-around items-center xs:flex-col md:flex-row gap-10 max-w-[1400px] mx-auto xs:px-5 lg:px-8 xs:py-12 lg:py-20 min-h-[60vh]"
      id="contact-us"
    >
      <div className="xs:w-full lg:w-1/2">
        <p className="text-yellow-500 mb-2 font-medium xs:text-2xl lg:text-3xl">
          Ready to elevate your brand?
        </p>
        <p className="xs:text-4xl lg:text-5xl font-bold">
          Schedule free <br /> discovery call today!
        </p>
        <p className="mt-8 mb-6 max-w-[520px] lg:text-lg">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <form
        className="bg-lightGray flex flex-col justify-center items-center rounded-2xl lg:p-6 xs:p-4 gap-2 xs:w-full lg:w-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {FEILDS.map((feild: any, index: number) => (
          <Input
            {...feild}
            {...register(feild.name)}
            key={index}
            error={errors}
          />
        ))}
        <textarea
          {...register("message")}
          name="message"
          id="message"
          placeholder="Message"
          className="border border-[#E6E6E6] rounded-md p-4 xs:w-full lg:w-[500px] text-darkBlack"
          rows={5}
        />
        {errors.message && (
          <p className="text-[#ff2c2c] w-full text-left">
            {errors.message.message}
          </p>
        )}
        <Button
          title="Submit"
          buttonStyles="w-full py-4 mt-2"
          disabled={isLoading}
        />
      </form>
    </section>
  );
};

export default Contact;
