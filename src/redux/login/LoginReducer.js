import {LogIn,LogOut} from './LoginType'

const initialState={
    userName:'',
    islogIn:false
}
const loginReducer=(state=initialState,action)=>{

    switch(action.type){
        case LogIn: return{
            userName:action.userName,
            islogIn:true
        }
        case LogOut: return{
            userName:'',
            islogIn:false
        }
        default: return state
    }

}

export default loginReducer