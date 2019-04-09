//The reducer updates the state tree in a predictable way
//Reducers are pure functions
//Reducers take in the current state tree and actions as arguments
//They take in some state, and a description of what changes took place and return a copy of our state.

//Step 1: import the action types from the action files
import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  DELETE_TODO,
  UPDATE_TITLE
} from "../actions";

//Step 2: move the state tree that we started with into a const variable called initialState
const initialState = {
  title: "Editable title from Redux store",
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

//Create an updated state tree based on the action type and the action payload
//Step 3: create the reducer function, pass in state with a default value of initialState, and the dispatched action

export default (state = initialState, action) => {
  switch (
    action.type //Use a switch case to check the action type of the dispatched action
  ) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case ADD_TODO: //Each case in the switch statement returns the new, updated state tree, triggering the UI to re-render with the new data
      return { todos: [...state.todos, action.payload] };
    case TOGGLE_COMPLETED:
      return {
        todos: [
          // The todos reducer will return a brand new array that will replace the old array.
          ...state.todos.map(todo => {
            if (todo.id !== action.payload.id) {
              return todo;
            } else {
              return action.payload;
            }
          })
        ]
      };
    case DELETE_TODO:
      return {
        todos: [...state.todos.filter(todo => todo.id !== action.payload.id)]
      };
    default:
      return state; //Return state for the default
  }
};
