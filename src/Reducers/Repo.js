import { FETCH_REPO, SEARCH_USER_FAILURE } from "../Actions/actionCreator";
const initialRepoState = {
  repository: [],
};
export default function Repo(state = initialRepoState, action) {
  switch (action.type) {
    case FETCH_REPO:
      return {
        ...state,
        repository: action.repo,
      };
    case SEARCH_USER_FAILURE:
      return {
        ...state,
        repository: [],
      };
    default:
      return state;
  }
}
