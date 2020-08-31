import {BUY_ICECREAM} from './iceCreamType'
const buyIceCream=(n=1)=>{
    return{
        type:BUY_ICECREAM,
        quantity:n
    }
}

export { buyIceCream }
