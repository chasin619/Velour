import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./schema";
import useHomeStore from "@/store/home";

const useContact = () => {
  const { sendEmail } = useHomeStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      area: "",
      localSEO: "",
      phone: "",
      business: "",
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

  return {
    form,
    onSubmit,
    isLoading,
  };
};

export default useContact;
