import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MovieCard from './MovieCard';
import '../css/Custom.css'
import { connect } from 'react-redux'
import {logIn,logOut} from '../redux/login/LoginAction'
import { navigate } from '@reach/router';

const initialState = [];
function Movie(props) {

    const [moviedata, setmoviedata] = useState(initialState)
    useEffect(() => {
        if(!props.loginstate.islogIn)
        {
            navigate("/signin")
        }
        var data = JSON.stringify({ "category": "movies", "language": "kannada", "genre": "all", "sort": "voting" });

        var config = {
            headers: {
                'content-type': 'application/json'
            }
        };
        Axios.post('https://cors-anywhere.herokuapp.com/https://hoblist.com/movieList',data,config)
        .then(result=>{setmoviedata(result.data.result)});
        

    })
    
    return (
        <div className="flex-row flex-wrap">
            {moviedata.map(movie=><MovieCard key={movie._id} movie={movie}/>)}
            
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        loginstate:state.login
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return {
        logIn:(name)=>dispatch(logIn(name)),
        logOut:(name)=>dispatch(logOut(name))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Movie)
