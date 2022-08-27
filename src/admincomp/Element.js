import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from './Dashboard';


function Element() {

    

    let usertype = localStorage.getItem("usertype");
    if (usertype !== "admin") {
        window.location.href = "admin/login";   
    }

    function logout(e) {
        if (window.confirm("Sure to logout?")) {
            localStorage.clear();
            window.location.href = "/";     
        }
    }

    return (
        <>
            <div class="row">
                
                    
                        
                            <div class="">
                                <div class="side border mb-1">

                                    <ul>
                                        <li><h3><Link to="/dashboard">Dashboard</Link></h3></li>
                                        <li><h3><Link to="/admin/categories">Categories</Link></h3></li>
                                        <li><h3><Link to="/admin/products">Products</Link></h3></li>
                                        <li><h3><a href="#">Users</a></h3></li>
                                        <li><h3><a href="#">Orders</a></h3></li>
                                        <li><button class="btn btn-primary" onClick={(e) => { logout(e) }}>Logout</button></li>
                                    </ul>
                                </div>
                            </div>
                        
                    </div>
        </>
    )
}

export default Element;
