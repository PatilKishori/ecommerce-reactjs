import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    
    let [data, setData] = useState({username : "", password:"" });


    function setvalue(e){
        e.preventDefault();
        data = {...data};
        data[e.target.id] = e.target.value;
        setData(data);
    }

    function btnLoginClick(e){
        e.preventDefault();
        if(data.username === "")
        {
            alert("Enter username");
            return;
        }
        if(data.password === "")
        {
            alert("Enter password");
            return;
        }
        let pdata = {data:data};
        axios.post("http://localhost:8081/admin/login", pdata).then((response)=>{
            let result = response.data.data;

            console.log(result);
            if(result.status == "success")
            {
                localStorage.setItem("usertype", "admin");
                window.location.href = "/dashboard";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            }
            else{
                alert("Invalid credentials");
            }

        }, (err)=>{
            console.log(err);
        })
    }

    return(
        <>
         <div class="wrapper fadeInDown">
        <div id="formContent">                  
            <h1>ADMIN LOGIN</h1>
            <input type="text" id="username" value={data.username} onChange={(e)=>{
                setvalue(e)}} class="fadeIn second" placeholder="username"/>
            <input type="password" id="password" value={data.password} onChange={(e)=>{
                setvalue(e)}} class="fadeIn third" placeholder="password"/>
            <input type="submit" class="fadeIn fourth" value="Log In" onClick={(e)=>
                {btnLoginClick(e)}}/>
        </div>
    </div>          
        </>
    )
}

export default Login;
