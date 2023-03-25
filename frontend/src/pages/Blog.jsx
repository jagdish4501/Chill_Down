import { Container, Col, Row } from 'reactstrap'

import { BLOG__DATA } from '../assets/data/data'

import BlogCard from './Blog-card/BlogCard'
// import './blog.css'

const Blog = () => {
    return(
    <section>
 <Container>
            <Row> 
                <Col lg='12'>
                    <h3 className="trending__title"> Trending   
                   </h3>
                </Col>
                 {
                    BLOG__DATA.slice(0, 9).map((item) => (
                        <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
                            <BlogCard item={item} />
                            
                        </Col>
                    ))}

            </Row>
      </Container>


        </section>
    )
}
export default Blog


