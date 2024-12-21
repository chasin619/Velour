import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email Address must be a valid email")
    .required("Email is required"),
  area: Yup.string().required("Area is required"),
  localSEO: Yup.string().required("Local SEO is required"),
  service: Yup.string().required("Service is required"),
  phone: Yup.string().required("Phone Number is required"),
  business: Yup.string().required("Business is required"),
});
