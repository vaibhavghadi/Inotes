import { object, string } from "yup";

export const signup = object({
  name1: string().trim().min(3).max(30).required("** Required **"),
  email1: string().trim().email().min(12).max(40).required("** Required **"),
  password1: string().trim().min(6).max(30).required("** Required **"),
});

export const signin = object({
  email2: string().trim().email().min(12).max(40).required("** Required **"),
  password2: string().trim().min(6).max(30).required("** Required **"),
});
