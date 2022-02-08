import { v4 as uuidv4 } from "uuid";

import image1 from "./images/img1.jpg";
import image2 from "./images/img2.jpg";
import image3 from "./images/img3.jpg";
import image4 from "./images/img4.jpg";
import image5 from "./images/img5.jpg";

const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    image: image1,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    image: image2,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    image: image3,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    image: image4,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    image: image5,
  },
];

export default dataSlider;
