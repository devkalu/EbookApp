export const SUBSCRIPTION_SELECTION = "SUBSCRIPTION_SELECTION";

export const subscriptionSelection = (subscription) => (dispatch) => {
  dispatch({
    type: SUBSCRIPTION_SELECTION,
    payload: subscription,
  });
};
