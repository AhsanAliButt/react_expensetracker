import { createContext,useReducer } from "react";

const initialState=[];


export const ExpenseTrackerContext=createContext(initialState);

export const Provider = ({children})=>{
    <ExpenseTrackerContext.Provider value={{appName : "Expense Tracker"}}>

    </ExpenseTrackerContext.Provider>
}