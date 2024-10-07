// import React, { createContext, useReducer, useContext } from 'react';

// //calling the createContext and assigning to AuthContext
// const AuthContext = createContext();

// //handing the state globally using reducer and using the state,action to update state and send data
// const authReducer = (state,action) => {
//     switch(action,type) {
//         case 'LOGIN' : return {...state, token:action.payload}; //when you login,take the token from backend and set it

//         case 'LOGOUT': return {...state, token:null}; //when you logout,set the token to null

//         default : return state; 
//     }
// }

// export const AuthProvider = ({children}) =>{
//     const [state,dispatch] = useReducer(authReducer,{ token : null});

//     return (
//         <AuthContext.Provider value={{state,dispatch}} >
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = ()=>{
//     return useContext(AuthContext);
// }