const TODOS_KEY = 'todos';

export interface Todo{
  todo: Array<TodoItem>;
}

export interface TodoItem{
  title:string;
  body:string;
  dateCreated:string;
}

