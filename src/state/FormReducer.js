import { actionTypes } from "./actionTypes"

 export const reducer=(state,action)=>{

    switch(action.type){
      case actionTypes.INPUT:{
        return{
          ...state ,
          [action.payload.name]:action.payload.value
      }
    }
      case actionTypes.TOGGLE:{
        return{
          ...state ,
          term:!state.term
        }
    }
      case actionTypes.COUNTMAINUS:{
        return {
          ...state,
          age:state.age-1
        }
    }
      case actionTypes.COUNTPLUS:{
        return {
          ...state,
          age:state.age+1

        }
    }
    default :return state
    }


   
}
export const initialState={
  gender:'',
  fullName:'',
  email:'',
  subject:'',
  message:'',
  term:false,
  age:0
  
  
};