//Actions in Redux are packets of information that describe events that have occurred in the UI
//In code, an action is simply an object
//Actions are dispatched to the reducers and tell the reducers how to update the state tree

export const ADD_TODO = "ADD_TODO"; //this is the Action Type variable that captures a string
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"; //this is the Action Type variable that captures a string
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TITLE = "UPDATE_TITLE";

//An Action Creator is a function that "creates" an action by returning an action object
//When the Action Creator is invoked, the action is returned, and it will be dispatched (under the hood) to the reducer

//When you type a new todo list item into the input field and press the submit button you should call an action creator that adds a new todo item to the todos array on the application state tree.
export const addTodo = todo => {
  console.log(todo);
  return {
    //This is the Action object
    type: ADD_TODO, //An Action Type is created to avoid hidden bugs, and used as the type in the action
    payload: {
      todo,
      id: Date.now(),
      completed: false
    }
  };
};

//When you click on each todo list item you will dispatch an action that will toggle that todo item's completed property to either true or false.
export const toggleCompleted = todo => {
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      ...todo,
      completed: !todo.completed
    }
  };
};

//Create a button next to each todo list item and when it is pressed it will call an action creator that will dispatch an action that removes the specified todo list item from the todos array.

export const deleteTodo = todo => {
  console.log("delete todo", todo);
  return {
    type: DELETE_TODO,
    payload: todo
  };
};

export function updateTitle(newTitle) {
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  };
}
