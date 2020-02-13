//import {Filters} from './action';

export default function reduce(state,action){
    if(typeof state==='undefined'){
        return state={
            title: '',
            note:'',
        }
    }
    return state;
}