import { v4 as uuidv4 } from "uuid";
import PageOne from "../Page/PageOne";
import PageTwo from "../Page/PageTwo";

const dataSlider = [
  {
    id: uuidv4(),
    title:<PageOne/>,
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: <PageTwo/>,
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
];

export default dataSlider;