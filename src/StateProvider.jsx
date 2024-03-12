import React, {createContext, useContext, useReducer} from "react";

//prepares the data layer
export const StateContext = createContext()

// wrap our app amd provide the data layer
export const StateProvider = ({reducer, initialstate, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialstate)}>
        {children}
    </StateContext.Provider>
)

// pull information from the data layer
export const useStateValue = () => useContext(StateContext)