'use strict';

import store from '../store/createStore';


// Action Creators

const updateFoo = (foo) => {
  return {
    type: 'UPDATE_FOO',
    name: foo
  };
};



export {
  updateFoo
};