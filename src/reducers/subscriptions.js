import { SUBSCRIPTION_SELECTION } from "../actions/subscriptionSelection";

const SUBSCRIPTIONS = [
  {
    subscription: "starter",
    cost: "free",
    description: "Access to 5 books monthly",
    isSelected: false,
  },
  {
    subscription: "reader",
    cost: "$5",
    description: "Access to 10 books monthly",
    isSelected: false,
  },
  {
    subscription: "scholar",
    cost: "$10",
    description: "Access to 20 books monthly",
    isSelected: false,
  },
];

export const subscriptions = (state = SUBSCRIPTIONS, action) => {
  switch (action.type) {
    case SUBSCRIPTION_SELECTION:
      return state.map((sub) => {
        if (sub.subscription === action.payload) {
          return {
            ...sub,
            isSelected: true,
          };
        } else {
          return {
            ...sub,
            isSelected: false,
          };
        }
      });
    default:
      return state;
  }
};
