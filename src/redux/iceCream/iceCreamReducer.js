import {BUY_ICECREAM} from './iceCreamType'
import { act } from 'react-dom/test-utils';

const initalState={
    numOfIceCream:10
}
const iceCreamReducer=(state=initalState,action)=>{
    switch(action.type)
    {
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCream:state.numOfIceCream-action.quantity
        }
        default: return state;
    }
}

export default iceCreamReducer