//Actions in Redux are packets of information that describe events that have occurred in the UI
//In code, an action is simply an object
//Actions are dispatched to the reducers and tell the reducers how to update the state tree

export const ADD_TODO = "ADD_TODO"; //this is the Action Type variable
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"; //this is the Action Type variable

//An Action Creator is a function that "creates" an action by returning an action object
//When the Action Creator is invoked, the action is returned, and it will be dispatched (under the hood) to the reducer
export const addTodo = todo => {
  return {
    type: ADD_TODO, //An Action Type is created to avoid hidden bugs, and used as the type in the action
    payload: {
      //This is the Action object
      todo,
      id: Date.now(),
      completed: false
    }
  };
};

export const toggleCompleted = todo => {
  console.log(`completed: ${todo.completed}`);
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      ...todo,
      completed: !todo.completed
    }
  };
};
