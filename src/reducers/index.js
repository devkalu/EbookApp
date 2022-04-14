import { combineReducers } from "redux";
import { categories } from "./categories";
import { books } from "./books";

export default combineReducers({
  books,
  categories,
});
