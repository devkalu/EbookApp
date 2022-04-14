import { CATEGORY_SELECTION } from "../actions/categories";

import { CATEGORIES } from "../data";

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
