import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          HMT
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Smartphones</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://cdn.dummyjson.com/product-images/6/thumbnail.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Laptops</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://cdn.dummyjson.com/product-images/11/thumbnail.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Fragrances</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://cdn.dummyjson.com/product-images/16/thumbnail.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Skincare</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage