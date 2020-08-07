import {CHANGE_INPUT,ADD_ITEM,DELETE,FIND_LIST} from './actionTypes'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (value)=>({
    type:DELETE,
    value
})

export const findList = (value)=>({
    type:FIND_LIST,
    value
})
