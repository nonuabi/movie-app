export default function movies(state = [], action) {
  if (action.type === "Add_Movie") {
    return action;
  }
  return state;
}
