import React from "react";
import Element from "./Element";
function Dashboard(){
return(
        <>

<div class="container">
    <h3>Dashboard</h3>
        <div class="row">
          <div class="col-lg-3">
            <Element />
            </div>
            <div class="col-lg-9 col-xl-9">
                <div class="row row-pb-md">
                    <div class="col-lg-6 mb-4 text-center">
                        <div class="product-entry border">
                            <a href="#" class="prod-img">
                            <div class="process-wrap">
                            <div class="process text-center active">
                                <p><span class='text-center'>01</span></p>
                            </div>
                        </div>

                            </a>
                            <div class="desc">
                                <h2><a href="#">Categories</a></h2>
                             
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 text-center">
                        <div class="product-entry border">
                            <a href="#" class="prod-img">
                                
                            <div class="process-wrap">
                            <div class="process text-center active">
                                <p><span>01</span></p>
                                
                            </div>
                            
                        </div>

                            </a>
                            <div class="desc">
                                <h2><a href="#">Products</a></h2>
                          
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 text-center">
                        <div class="product-entry border">
                            <a href="#" class="prod-img">

                            <div class="process-wrap">
                            <div class="process text-center active">
                                <p><span>01</span></p>
                                
                            </div>
                            
                        </div>

                            </a>
                            <div class="desc">
                                <h2><a href="#">Users</a></h2>
                             
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 text-center">
                        <div class="product-entry border">
                            <a href="#" class="prod-img">

                            <div class="process-wrap">
                            <div class="process text-center active">
                                <p><span>01</span></p>
                                
                            </div>
                            
                        </div>
                            </a>
                            <div class="desc">
                                <h2><a href="#">Orders</a></h2>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>

</>
)
};
            export default Dashboard;