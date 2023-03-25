import React, { useState } from "react";
import { Link } from "react-router-dom";

// import './blog-card.css'

// import Modal from "../Modal/Modal";
 
const BlogCard = (props) => {
    const { title, id, category, desc, creator } = props.item;
  
    const [showModal, setShowModal] = useState(false);
   
    return (
      <div className="single__blog__card">
       
        <div className="blog__content">
          <h5 className="blog__title">
            {title}
                </h5>
                
         <div className="creater__info-wrapper d-flex gap-3">
           
                    <span className="description">{desc}</span>
                    <h1>{creator}</h1>
                    <button>show more</button>
           
        </div>
  
          {/* <div className="mt-3 d-flex align-items-center justify-content-between">
            <button
              className="bid__btn d-flex align-items-center gap-1"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-shopping-bag-line"></i> Place Bid
            </button>
  
            {showModal && <Modal setShowModal={setShowModal} />}
  
            <span className="history__link">
              <Link to="#">View History</Link>
            </span>
          </div> */}
        </div> 
      </div>
    );
  };
  
  export default BlogCard;
  