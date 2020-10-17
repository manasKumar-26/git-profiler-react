import {
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  SEARCH_USER_START,
  RESET_SEARCH,
  FETCH_REPO,
} from "./actionCreator";
import { generateLink } from "../Helpers/urls";
export const searchSuccess = (user) => {
  return {
    type: SEARCH_USER_SUCCESS,
    user,
  };
};
export const searchFailure = () => {
  return {
    type: SEARCH_USER_FAILURE,
  };
};
export const searchStart = () => {
  return {
    type: SEARCH_USER_START,
  };
};
export const resetSearch = () => {
  return {
    type: RESET_SEARCH,
  };
};
export const fetchUser = (user) => {
  const url = generateLink.search(user);
  return (dispatch) => {
    dispatch(searchStart());
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          dispatch(searchFailure());
        } else {
          dispatch(searchSuccess(data));
          dispatch(fetchRepo(data.repos_url));
        }
        setTimeout(() => {
          dispatch(resetSearch());
        }, 3000);
      });
  };
};
export const setRepo = (repo) => {
  return {
    type: FETCH_REPO,
    repo,
  };
};
export const fetchRepo = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setRepo(data));
      });
  };
};
