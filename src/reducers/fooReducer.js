'use strict';

const fooReducer = (currentState = {}, action) => {
  let nextState;

  switch(action.type) {
    case 'UPDATE_FOO':
      nextState =  action.foo;
      return nextState;
    default:
      return currentState;
  }
};

export default fooReducer;