import { ADD_TODO, TOGGLE_COMPLETED } from "../actions";

const initialState = {
  todos: [
    {
      todo: "Walk the Dog",
      id: 1452,
      completed: false
    },
    {
      todo: "Brush Teeth",
      id: 1356,
      completed: false
    },
    {
      todo: "Take a Shower",
      id: 8273,
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case TOGGLE_COMPLETED:
      return {
        todos: [
          ...state.todos.map(todo => {
            if (todo.id !== action.payload.id) {
              return todo;
            } else {
              return action.payload;
            }
          })
        ]
      };
    default:
      return state;
  }
};
