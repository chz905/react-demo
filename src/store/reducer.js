import {CHANGE_INPUT,ADD_ITEM,DELETE,FIND_LIST} from './actionTypes'

const defaultState={
    inputValue: 'Write Something',
    list:[
        '第一列1',
        '第二列2'
    ],
    listGroup:[]
}
export default (state=defaultState,action)=>{
    // console.log(state,action)
    // Reducer 里只能接收state，不能改变state
    let newState = JSON.parse(JSON.stringify(state))
    if(action.type===FIND_LIST){
        newState.listGroup=action.value
        return newState
    }
    if(action.type===DELETE){
        console.log(action)
        newState.list.splice(action.value,1)
        return newState
    }
    if(action.type===ADD_ITEM){
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type===CHANGE_INPUT){
        newState.inputValue = action.value
        return newState
    }

    return state
}