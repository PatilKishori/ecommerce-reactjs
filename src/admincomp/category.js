
import Element from './Element';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, Link, useParams, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Category = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        id: '',
        name: '',
        srno: '',
        image: '',
    })

    let { id } = useParams();

    useEffect(() => {
        if (id !== null) {
            axios.post('http://localhost:8081/productcategory/get/', { data: { id: id } })
                .then((response) => {
                    const newData = { ...data };
                    newData["id"] = response.data.data._id;
                    newData["name"] = response.data.data.name;
                    newData["srno"] = response.data.data.srno;
                    setData(newData);
                })
        }
    }, []);



    function handle(e) {
        
        if (e.target.id === "image") {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (reader.result != null) {
                    const newData = { ...data };
                    newData[e.target.id] = reader.result.toString();
                    setData(newData);
                }
            }
        }
        else {
            const newData = { ...data };
            newData[e.target.id] = e.target.value;
            setData(newData);
        }
    }
    function submit(e) {
        e.preventDefault();
        axios.post("http://localhost:8081/productcategory/save", {
            data: {
                id: data.id === null ? "" : data.id,
                name: data.name,
                image: data.image,
                srno: data.srno
            }
        }).then(res => {
            navigate('/admin/categories');
        })
    }

   
    return (
        <div>
            <div class="col-lg-6">
                <p class="bread"><span><a href="/admin/categories">Catagories</a></span> / <span>Category</span></p>
            </div>

            <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <Element />
            </div>


            <div class="col-lg-9">
                <div class="div1">
                    <form className="">
                        <h3 class="add">Add Category</h3>
                        <label for="srno">Sr No :</label>
                    <input className="form-control" type="number" min="1" value={data.srno} id="srno" onChange={(e) => handle(e)} />
                    <br />
                    <label for="name">Product Name :</label>
                    <input type="text" className="form-control" value={data.name} onChange={(e) => handle(e)} id="name" aria-describedby="emailHelp" placeholder="Enter Product Name" />
                     <br />
                     <label for="image">Image :</label>
                            <input type="file" accept="image/*" className="form-control" onChange={(e) => handle(e)} id="image" />
                        <br />
                        <Link to="" onClick={(e) => submit(e)} className="btn btn-primary">Save</Link>
                    </form>
                
                </div>
                
            </div>
            <div className='col-md-2'></div>
        </div>
        </div>
        </div>
        

    )
}

export default Category;