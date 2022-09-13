import React from "react";

type setStateAT = { type: "SET-STATE" };
const initialState = {};
type ActionTypes = setStateAT

export const loginPageReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET-STATE": {
            return {
                ...state
            }
        }
        default:
            return {...state}
    }
};