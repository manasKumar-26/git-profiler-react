import {
  SEARCH_USER_FAILURE,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_START,
  RESET_SEARCH,
} from "../Actions/actionCreator";
const initialSearchState = {
  searchUser: {},
  isSearching: false,
  searchedUser: false,
  searchSuccess: null,
};
export default function Search(state = initialSearchState, action) {
  switch (action.type) {
    case SEARCH_USER_SUCCESS:
      return {
        searchUser: action.user,
        isSearching: false,
        searchedUser: true,
        searchSuccess: true,
      };
    case SEARCH_USER_FAILURE:
      return {
        searchUser: {},
        isSearching: false,
        searchedUser: false,
        searchSuccess: false,
      };
    case SEARCH_USER_START:
      return {
        ...state,
        isSearching: true,
      };
    case RESET_SEARCH:
      return {
        ...state,
        searchSuccess: null,
      };
    default:
      return state;
  }
}
