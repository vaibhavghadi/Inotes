import { object, string } from "yup";

const Valid = object({
  title: string().trim().min(3).max(30).required("** Required **"),
  description: string().trim().min(6).max(80).required("** Required **"),
  tag: string().trim().min(3).max(30).required("** Required **"),
});

export default Valid;
