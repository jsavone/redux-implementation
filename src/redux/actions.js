 // create a default variable
 
 export const ADD_ITEM = 'ADD_ITEM'
 
 
 // create the function 
 export const addItem = (item) =>{
   //return an obj with the actions
   return{
     type:ADD_ITEM,
     payload:item
   }
 }