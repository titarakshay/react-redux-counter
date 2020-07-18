import {createStore} from 'redux'
import {INC,DEC,RESET} from './Types'

function reducer(state=0,action){
    switch (action.type){
        case 'INC':
            return state+1;
        case 'DEC':
            return state -1;
        case 'RESET':
            return 0
        default:
            return state
    }
}

export let store=createStore(reducer)