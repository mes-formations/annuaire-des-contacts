import { ActionTypes } from "./contacts.action-types";
import { Action } from "./contacts.actions";
import { IContact } from "../../interfaces/i-contact";

interface IContactsState{
    contacts:IContact[];
    loading:boolean;
    error:string | null;
}

const initialState:IContactsState={
    contacts:[],
    loading:false,
    error:""
}

export default (state:IContactsState=initialState,action:Action){
    return state;
}

