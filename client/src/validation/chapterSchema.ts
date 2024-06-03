import * as Yup from "yup";
import { valMessages } from "./valMessages";
/* const MAX_FILE_SIZE = 1024000 * 5; //5000KB
interface ValidFileExtensions {
  image: string[];
}
const validFileExtensions: ValidFileExtensions = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};
function isValidFileType(
  fileName: string | undefined,
  fileType: keyof ValidFileExtensions
): boolean {
  if (
    fileName &&
    (validFileExtensions[fileType].indexOf(
      fileName.split(".").pop() as string
    ) as number) > -1
  )
    return true;
  else return false;
}

interface File {
  name: string;
  size: number;
} */

export const chapterSchema = Yup.object().shape({
  season: Yup.string().required(valMessages.season.seasonRequired),
  titlePro: Yup.string()
    .trim(valMessages.season.titleMin)
    .required(valMessages.season.required)
    .min(2, valMessages.season.titleMin)
    .max(100, valMessages.season.titleMax),
  contentPro: Yup.string()
    .trim(valMessages.season.contentMin)
    .required(valMessages.season.required)
    .min(2, valMessages.season.contentMin)
    .max(6000, valMessages.season.contentMax),
  // imagePro: Yup.mixed<File>()
  //   .notRequired()
  //   .test("is-valid-type", valMessages.image.format, (value) =>
  //     isValidFileType(value && value.name.toLowerCase(), "image")
  //   )
  //   .test(
  //     "is-valid-size",
  //     valMessages.image.size,
  //     (value) => value && value.size <= MAX_FILE_SIZE
  //   ),
  titleBases: Yup.string()
    .trim(valMessages.season.titleMin)
    .required(valMessages.season.required)
    .min(2, valMessages.season.titleMin),
  contentBases: Yup.string()
    .trim(valMessages.season.contentMin)
    .required(valMessages.season.required)
    .min(2, valMessages.season.contentMin)
    .max(6000, valMessages.season.contentMax),
  // imageBases: Yup.mixed<File>()
  //   .notRequired()
  //   .test("is-valid-type", valMessages.image.format, (value) =>
  //     isValidFileType(value && value.name.toLowerCase(), "image")
  //   )
  //   .test(
  //     "is-valid-size",
  //     valMessages.image.size,
  //     (value) => value && value.size <= MAX_FILE_SIZE
  //   ),
});
