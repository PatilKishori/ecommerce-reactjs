
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Homepic = (props) => {
	const [data, setData] = useState([]

	)

	useEffect(() => {
		axios.post("http://localhost:8081/productcategory/list", { data: { pcid: "" } }).then((res) => {
			setData(res.data.data);
		})
	}, [])

	return (
		<div>



			<div className="colorlib-product">
				<div className="container">
					<div className="row m-2 mb-2 py-2">
						<div className="mx-auto offset-sm-2 text-center colorlib-heading">
							<h2>{props.title}</h2>
						</div>


						{
							data.map((e) => {

								return (
									<div className="col-lg-6 py-2 text-center">
										<div className="product-entry border">
											<Link to='' href="" className="prod-img">
												<img src={"http://localhost:8081/" + e.imagepath} className="img-fluid" alt="Free html5 bootstrap 4 template" />
											</Link>
											<div className="desc">
												<h2><a href="">{e.name}</a></h2>

											</div>
										</div>
									</div>
								)

							})
						}


					</div>
				</div>

			</div>
		</div>

	)
}

export default Homepic