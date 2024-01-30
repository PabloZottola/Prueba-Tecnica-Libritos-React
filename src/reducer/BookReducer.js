import { types } from "../types/types";

export const BookReducer = (state = {}, action) => {
  switch (action.type) {
    case types.book.bookList:
      return {
        ...state,
      };
      break;

    default:
      return state;
  }
};
