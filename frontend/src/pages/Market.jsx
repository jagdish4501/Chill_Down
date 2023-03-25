import React from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";


import { Container, Row, Col } from "reactstrap";

const Market = () => {
  return (
    <>
      <CommonSection title={"MatketPlace"} />

      <section> 
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter">
                <div className="filter__left">
                  <div className="all__category__filter">
                    <h6>All Categories</h6>
                    <select>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-card">Trending Cards</option>
                     
                    </select>
                  </div>

                  <div className="all__items__filter">
                    <h6>All Items</h6>
                    <select>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundel</option>
                     
                    </select>
                  </div>
                </div>
                <div className="filter__right">
                  <select>
                      <option >Sort By</option>
                      <option value="high">High Rate</option>
                      <option value="mid">mid Rate</option>
                      <option value="low">low Rate</option>
                 </select>
                </div>
              </div>
            </Col>

            {/* {
              NFT__DATA
            } */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;


