import {LogIn,LogOut} from './LoginType'
const logIn=(name='')=>{
    return {
        type:LogIn,
        userName:name
    }
}
const logOut=(name='')=>{
    return {
        type:LogOut,
        userName:name
    }
}

export {logIn,logOut}