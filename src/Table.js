import React from 'react'
import { Label } from 'recharts';

const Table = () => {
    return (
        <div>
            <nav class="navbar navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand" style={{ fontWeight: "bolder" }}>Product Sell</a>
                    <form class="d-flex">
                        <span className="input-group-text border-0"> <i class="fa-solid fa-magnifying-glass "></i><input class="form-control border-0 me-2" type="search" placeholder="Search" aria-label="Search" /></span>
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "white", color: "gray" }}>
                                Last 30 days
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>

                            </ul>
                        </div>

                    </form>
                </div>
            </nav>
            <table className="table">
                <thead style={{ color: "gray" }}>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col"></th>
                        <th scope="col">Stock</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td ><img src="https://img.freepik.com/free-vector/gradient-3d-folds-background_52683-76979.jpg" className='size'></img></td>
                        <td><label style={{fontWeight:"bold"}}>Abstrack 3D</label><p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></td>
                        <td>32 in stock</td>
                        <td>$45.99</td>
                        <td>20</td>
                    </tr>
                    <tr>
                    <td ><img src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDNkJTIwYWJzdHJhY3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className='size'></img></td>
                        <td><label style={{fontWeight:"bold"}}>Sarphens Illustration</label><p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></td>
                        <td>32 in stock</td>
                        <td>$45.99</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Table;

