import * as Yup from "yup";
import { valMessages } from "./valMessages";

export const chapterSchema = Yup.object().shape({
  season: Yup.string().required(valMessages.season.required),
  "title-pro": Yup.string()
    .trim(valMessages.name.min)
    .required(valMessages.name.required)
    .min(2, valMessages.season.titleMin)
    .max(100, valMessages.season.titleMax),
  "content-pro": Yup.string()
    .trim(valMessages.name.min)
    .required(valMessages.name.required)
    .min(2, valMessages.season.min)
    .max(6000, valMessages.season.max),
  "title-bases": Yup.string()
    .trim(valMessages.name.min)
    .required(valMessages.name.required)
    .min(2, valMessages.season.min),
  "content-bases": Yup.string()
    .trim(valMessages.name.min)
    .required(valMessages.name.required)
    .min(2, valMessages.season.min)
    .max(6000, valMessages.season.max),
});
