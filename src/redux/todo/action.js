import { TODO_ADD, TODO_DELETE, TODO_EIDET } from "./actionTypes";

// CREATE TODO
export const createTodo = (todo) => {
  return { type: TODO_ADD, payload: todo };
};

// TODO DELETE
export const delete_todo = (todo) => {
  return { type: TODO_DELETE, payload: todo };
};
export const eidet_todo = (todo) => {
  return { type: TODO_EIDET, payload: todo };
};
