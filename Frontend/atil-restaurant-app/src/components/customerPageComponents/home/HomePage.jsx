// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './HomePage.css'

// function HomePage() {
//   return (
//     <div className='homeContainer'>
// <div id="carouselExample" className="carousel slide">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="https://www.atascocita.com/message_board/forumimgs/Atascocita577521960308.jpg" className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img src="https://www.dotwnews.com/uploads/posts_photos/spago-by-wolfgang-puck-3-uzstpp.jpg" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://themarlowe.ca/wp-content/uploads/2024/03/Dining-Experience-with-Wine-Selections-in-Richmond-Hill.jpg" className="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>

//     </div>
//   )
// }

// export default HomePage



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { PiHandsPrayingFill } from "react-icons/pi";
// import { FaGlassCheers } from "react-icons/fa";
import './HomePage.css';

function HomePage() {
  return (
    <div className='homeContainer'>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.dotwnews.com/uploads/posts_photos/spago-by-wolfgang-puck-3-uzstpp.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h1 className='nameH'> <PiHandsPrayingFill /> Welcome to Atil <PiHandsPrayingFill /></h1>
              <p>Creating Bonds Over Bites </p>
              <i className="fas fa-hand-holding-heart"></i>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.experiencesluxe.com/cdn-cgi/imagedelivery/kJlAAqUqnbueqjYHlmNNpA/experiencesluxe/resources/posts/locationeuropefrancecityversaillesfoodrestaurant/photo0/w=1200" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h1 className='nameH'>  <PiHandsPrayingFill /> Welcome to Atil  <PiHandsPrayingFill /></h1>
              <p>Creating Bonds Over Bites </p>
              <i className="fas fa-hand-holding-heart"></i>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.atascocita.com/message_board/forumimgs/Atascocita577521960308.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h1 className='nameH'> <PiHandsPrayingFill />Welcome to Atil <PiHandsPrayingFill /></h1>
              <p>Creating Bonds Over Bites </p>
              <i className="fas fa-hand-holding-heart"></i>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
