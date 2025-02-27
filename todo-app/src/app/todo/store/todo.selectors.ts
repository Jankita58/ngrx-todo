import { AppStore } from "../../app.state";

export const getTodos = (state: AppStore) => state.todo.todos;
export const getTodosDone = (state: AppStore) => state.todo.todos.filter((todo) => todo.id).length;
export const getTodosNotDone = (state: AppStore) => state.todo.todos.filter((todo) => !todo.id).length;
