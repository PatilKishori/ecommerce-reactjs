import {  Link } from 'react-router-dom';
function Footer(){
    return( 

        <div>

<div className="colorlib-partner">
			<div className="container">
				<div className="row">
					<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
						<h2>Trusted Partners</h2>
					</div>
				</div>
				<div className="row">
					<div className="col partner-col text-center">
                        
						<img src={require('../assets/images/brand-1.jpg')} className="img-fluid" alt="Free html4 bootstrap 4 template" />
					</div>
					<div className="col partner-col text-center">
						<img src={require('../assets/images/brand-2.jpg')} className="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div className="col partner-col text-center">
						<img src={require('../assets/images/brand-3.jpg')} className="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div className="col partner-col text-center">
						<img src={require('../assets/images/brand-4.jpg')} className="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div className="col partner-col text-center">
						<img src={require('../assets/images/brand-5.jpg')} className="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
				</div>
			</div>
		</div>

		<footer id="colorlib-footer" role="contentinfo">
			<div className="container">
				<div className="row row-pb-md">
					<div className="col footer-col colorlib-widget">
						<h4>About Footwear</h4>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
						<p>
							<ul className="colorlib-social-icons">
								<li><a href="#"><i className="icon-twitter"></i></a></li>
								<li><a href="#"><i className="icon-facebook"></i></a></li>
								<li><a href="#"><i className="icon-linkedin"></i></a></li>
								<li><a href="#"><i className="icon-dribbble"></i></a></li>
							</ul>
						</p>
					</div>
					<div className="col footer-col colorlib-widget">
						<h4>Customer Care</h4>
						<p>
							<ul className="colorlib-footer-links">
								<li><a href="#">Contact</a></li>
								<li><a href="#">Returns/Exchange</a></li>
								<li><a href="#">Gift Voucher</a></li>
								<li><a href="#">Wishlist</a></li>
								<li><a href="#">Special</a></li>
								<li><a href="#">Customer Services</a></li>
								<li><a href="#">Site maps</a></li>
							</ul>
						</p>
					</div>
					<div className="col footer-col colorlib-widget">
						<h4>Information</h4>
					
							<ul className="colorlib-footer-links">
								<li><a href="#">About us</a></li>
								<li><a href="#">Delivery Information</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Support</a></li>
								<li><a href="#">Order Tracking</a></li>
							</ul>
						
					</div>

					<div className="col footer-col">
						<h4>News</h4>
						<ul className="colorlib-footer-links">
							<li><a href="blog.html">Blog</a></li>
							<li><a href="#">Press</a></li>
							<li><a href="#">Exhibitions</a></li>
							<li><Link to="/admin/login">Admin Login</Link></li>
						</ul>
					</div>

					<div className="col footer-col">
						<h4>Contact Information</h4>
						<ul className="colorlib-footer-links">
							<li>291 South 21th Street, <br /> Suite 721 New York NY 10016</li>
							<li><a href="tel://1234567920">+ 1235 2355 98</a></li>
							<li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
							<li><a href="#">yoursite.com</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="copy">
				<div className="row">
					<div className="col-sm-12 text-center">
						<p>
							<span>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com/" target="_blank">Colorlib</a></span> 
							<span className="block">Demo Images: <Link to="http://unsplash.co/">Unsplash</Link> , <a href="http://pexels.com/" target="_blank">Pexels.com</a></span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	</div>
    
    )
}
export default Footer;