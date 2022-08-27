import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, Link, Navigate } from 'react-router-dom';
import Element from './Element';

const Categories = () => {
  let [datas, setData] = useState([]);

  function load() {
    axios.post("http://localhost:8081/productcategory/list").then((res) => {
      setData(res.data.data);
    })
  }


  useEffect(() => {
    load();
  }, [])
  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? '#88c8bc' : '',
      position: isActive ? 'relative' : '',
    }
  }

  function deletecategory(e, id) {
    e.preventDefault();
    axios.post("http://localhost:8081/productcategory/delete", { data: { id: id } }).then((res) => {
      load();
    })
  }

  function logout(e) {
    if (window.confirm("Sure to logout?")) {
      localStorage.clear();
      Navigate("/");
    }
  }

  return (
    <div className='container'>
      <div className='breadcrumbs'>
        <p className='bread'>
          <span> <NavLink style={navStyle} to="/dashboard"> Dashboard </NavLink></span>/
          <span>Categories</span>
        </p>
      </div>
      <h1>Categories</h1>
  <div className='text-right'>
        <Link to="/categories/category" className='btn btn-primary'>Add Category</Link>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <Element />
            </div>

            <div className="  container col-lg-9 text-center ">
              <table className='table table-bordered table-stripped'>
                <tr>
                  <th>Action</th>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Image</th>
                </tr>
                {
                  datas.map((data) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <Link className="btn btn-primary " to={"/admin/category/" + data._id}>Edit</Link>
                            <button className="btn btn-danger" onClick={(e) => deletecategory(e, data._id)} >Delete</button>
                          </td>
                          <td>{data.srno}</td>
                          <td>{data.name}</td>
                          <td><img src={"http://localhost:8081/" + data.imagepath} style={{ height: '70px' }} /></td>
                        </tr>
                      </>
                    )
                  })
                }
              </table>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Categories