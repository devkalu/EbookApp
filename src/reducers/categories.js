import { CATEGORY_SELECTION } from "../actions/categories";

const CATEGORIES = [
  {
    id: "1",
    title: "BIOLOGY",
    image: require("../../assets/images/biology.png"),
    isSelected: false,
  },
  {
    id: "2",
    title: "CHEMISTRY",
    image: require("../../assets/images/chemisty.png"),
    isSelected: false,
  },
  {
    id: "3",
    title: "GEOMETRY",
    image: require("../../assets/images/geometry.png"),
    isSelected: false,
  },
  {
    id: "4",
    title: "GEOGRAPHY",
    image: require("../../assets/images/globe.png"),
    isSelected: false,
  },
  {
    id: "5",
    title: "LANGUAGE",
    image: require("../../assets/images/languages.png"),
    isSelected: false,
  },
  {
    id: "6",
    title: "CALCULUS",
    image: require("../../assets/images/maths.png"),
    isSelected: false,
  },
  {
    id: "7",
    title: "ENGINEERING",
    image: require("../../assets/images/divider.png"),
    isSelected: false,
  },
];
export const categories = (state = CATEGORIES, action) => {
  switch (action.type) {
    case CATEGORY_SELECTION:
      return state.map((category) => {
        if (category.id === action.payload) {
          return {
            ...category,
            isSelected: !category.isSelected,
          };
        }

        return category;
      });

    default:
      return state;
  }
};
