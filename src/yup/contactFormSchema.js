import * as yup from "yup";

const contactFormSchema = yup.object().shape({
  id: yup.string(),
  name: yup
    .string()
    .min(3, "At least 3 characters")
    .max(50, "You`ve typed more than 50 characters")
    .required("This input is required"),
  number: yup
    .string()
    .matches(
      /^\d{1,10}-\d{1,10}-\d{1,10}$/,
      "Your phone number should have up to 10 digits between each hyphen, and it should not contain any other characters"
    )
    .required("This input is required"),
});

export default contactFormSchema;
