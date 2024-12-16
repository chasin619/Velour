import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email Address must be a valid email").required("Email is required"),
  business: Yup.string().required("Business is required"),
  message: Yup.string().required("Message is required"),
});
