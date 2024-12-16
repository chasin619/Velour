import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./schema";
import useHomeStore from "@/store/home";

const useContact = () => {
  const { sendEmail } = useHomeStore();
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
    await sendEmail(payload);
    form.reset();
  };

  const FEILDS = [
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
  };
};

export default useContact;
