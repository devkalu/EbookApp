export const CATEGORY_SELECTION = "CATEGORY_SELECTION";

export const categorySelection = (categoryId) => (dispatch) => {
  dispatch({
    type: CATEGORY_SELECTION,
    payload: categoryId,
  });
};
