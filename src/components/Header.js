
import {  Link, NavLink} from 'react-router-dom'

function Header(){


const NavStyle = ({isActive}) =>{
		return{
			
			color: isActive ? ' #88c8bc ' : '',
			position: isActive ? 'relative' : ''
		}
	}
	let adminlogggedin = false;
	if(localStorage.getItem("usertype") != null){
		if(localStorage.getItem("usertype") === "admin")
			adminlogggedin = true;
	}
    return(
    <div>
            <nav class="colorlib-nav" role="navigation">
			<div class="top-menu">
				<div class="container">
					<div class="row">
						<div class="col-sm-7 col-md-9">
							<div id="colorlib-logo"><a href="index.html">Footwear</a></div>
						</div>
						<div class="col-sm-5 col-md-3">
			            <form action="#" class="search-wrap">
			               <div class="form-group">
			                  <input type="search" class="form-control search" placeholder="Search" />
			                  <button class="btn btn-primary submit-search text-center" type="submit"><i class="icon-search"></i></button>
			               </div>
			            </form>
			         </div>
		         </div>
					<div class="row">
						<div class="col-sm-12 text-left menu-1">
							<ul>
								<li class="active"><Link to="/">Home</Link></li>
								<li class="has-dropdown">
									<a href="men.html">Men</a>
									<ul class="dropdown">
										<li><a href="product-detail.html">Product Detail</a></li>
										<li><a href="cart.html">Shopping Cart</a></li>
										<li><a href="checkout.html">Checkout</a></li>
										<li><a href="order-complete.html">Order Complete</a></li>
										<li><a href="add-to-wishlist.html">Wishlist</a></li>
									</ul>
								</li>
								<li><a href="women.html">Women</a></li>
								
								<li><a href="contact.html">Contact</a></li>
								{
									adminlogggedin ? <li><NavLink style={NavStyle} className="nav-bar-link" to="#">administration</NavLink></li> : ""
								}
								<li class="cart"><a href="cart.html"><i class="icon-shopping-cart"></i> Cart [0]</a></li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="sale">
				<div class="container">
					<div class="row">
						<div class="col-sm-8 offset-sm-2 text-center">
							<div class="row">
								<div class="owl-carousel3">
									<div class="item">
										<div class="col">
											<h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
										</div>
									</div>
									<div class="item">
										<div class="col">
											{/* <h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
       </div> 
    );
};
export default Header;