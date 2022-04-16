import { combineReducers } from "redux";
import { categories } from "./categories";
import { books } from "./books";
import { subscriptions } from "./subscriptions";

export default combineReducers({
  books,
  categories,
  subscriptions,
});
