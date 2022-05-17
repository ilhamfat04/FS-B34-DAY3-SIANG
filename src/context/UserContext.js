import { createContext, useReducer, useState } from "react";

export const UserContext = createContext()

// const [state, dispatch] = useReducer(logic, state)

const initialState = {
    isLogin: false,
    user: {}
}

const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "LOGIN_SUCCESS":
            return {
                isLogin: true,
                user: payload
            }
        case "LOGOUT":
            return {
                isLogin: false,
                user: {}
            }
        default:
            throw new Error()
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // proses context
    return (
        <UserContext.Provider value={[state, dispatch]} >
            {children}
        </UserContext.Provider>
    )
}