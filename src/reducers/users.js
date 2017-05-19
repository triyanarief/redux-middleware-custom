import {
  FETCH_USERS
} from '../actions/types';

export default function(state = [], action){
  switch(action.type){
    case FETCH_USERS:
      //take the existing state and concatenate the new list of users as well
      return [...state, ...action.payload.data ]; 
  }

  return state; 
}
