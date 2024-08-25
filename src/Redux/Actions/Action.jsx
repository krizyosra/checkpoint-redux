import { type } from "@testing-library/user-event/dist/type"
import { add, edit, filter, filterTaskCheck, RESET_FILTER } from "../Constants/Const"

export const addTask =(data)=>{

    return {type: add , payload: data}
}

export const filtertask=(data)=>{
    return {type:filter, payload: data}
}
export const filterChek=(check)=>{

    return {type: filterTaskCheck, payload: check}
}

//Crée une action pour réinitialiser le filtre.
export const resetFilter = () => {
    return { type: RESET_FILTER };
}

export const editTask=(data)=>{

    return {type: edit, payload: data
    }
}