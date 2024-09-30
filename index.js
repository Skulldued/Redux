const { createStore, combineReducers } = require("redux");
const initalState = {
  number: 0,
  anotherNumber: 0,
};
function numberReducer(incomingObject = initalState, action) {
  if (action.type === "ADD") {
    const numberToAdd = action.payload;

    return {
      ...incomingObject,
      number: incomingObject.number + numberToAdd,
    };
  } else if (action.type === "SUBTRACT") {
    const numberToSubtract = action.payload;

    return {
      ...incomingObject,
      number: incomingObject.number - numberToSubtract,
    };
  } else {
    return incomingObject;
  }
}

function anotherNumberReducer(incomingObject = initalState, action) {
  if (action.type === "INCREMENT") {
    return {
      ...incomingObject,
      anotherNumber: incomingObject.anotherNumber + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...incomingObject,
      anotherNumber: incomingObject.anotherNumber - 1,
    };
  } else {
    return incomingObject;
  }
}

// combine reducer start
const rootReducer = combineReducers({
  number: numberReducer,
  anotherReducer: anotherNumberReducer,
});

console.log(rootReducer); // This is nothing but a function
// combine reducer end

// const store = createStore(numberReducer, initalState);
const store = createStore(rootReducer);
console.log("Before ADD ", store.getState());
store.dispatch({ type: "ADD", payload: 49 });
console.log("After ADD ", store.getState());
console.log("Before Increment ", store.getState());
store.dispatch({ type: "INCREMENT", payload: null });
console.log("After Increment ", store.getState());
