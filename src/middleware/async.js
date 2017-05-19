export default function( {dispatch} ) {
  return next => action => {
    // if action does not have payload or a payload doesnt have .then 
    // send it on, we dont care about it 
    if(!action.payload || !action.payload.then){
      return next(action); 
    }

    //make sure action's promise resolves
    action.payload
      .then(function(response){
        //create new action with old type
        //take whatever data contains, extend it over payload
        //the old action has the junk promise, we only care about the data
        //knock off the promise adn replace it w our response
        const newAction= {...action, payload: response } ;

        //take this action and send it through the top most reducer again
        dispatch(newAction); 

      }); 
  }; 
}
