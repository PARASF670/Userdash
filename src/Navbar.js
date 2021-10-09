import React from "react";
import NavImage from "./NavImage";
import Cards from './Cards';
export default class Navbar extends React.Component{
    constructor() {
        super();
        this.state = {
          count: 0,
          
        }
  }
  Cardref = React.createRef();
  changestate = (data) => {
    this.setState({
      count: this.state.count + 1,

    });
  }
    render() {
        return (
            <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact us</a>
                </li>
                <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">All Products</a>
                      <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Popular Items</a>
          
          <a class="dropdown-item" href="#">New Arrivals</a>
        </div>
      </li>
                          </ul>
                      </div>
                <button class="btn btn-outline-secondary my-2 my-sm-0 " id="btncart" type="submit"><i class="fas fa-shopping-cart"></i> 
                Cart  <span class="badge bg-dark text-white ms-1 rounded-pill">{this.state.count }</span> </button>
          
            </nav>
                <NavImage />
            <Cards Cardreference={this.Cardref} changestate={this.changestate }/>
            </>
        );
    }
}
