import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./schema";
import useHomeStore from "@/store/home";
import { useState } from "react";

const useContact = () => {
  const { sendEmail } = useHomeStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      business: "",
      message: "",
    },
  });

  const onSubmit = async (payload: any) => {
    try {
      setIsLoading(true);
      await sendEmail(payload);
      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const FEILDS: any = [
    {
      name: "name",
      placeholder: "Name",
      type: "text",
    },
    {
      name: "email",
      placeholder: "Email",
      type: "email",
    },
    {
      name: "business",
      placeholder: "Business",
      type: "text",
    },
  ];

  return {
    FEILDS,
    form,
    onSubmit,
    isLoading,
  };
};

export default useContact;
