import React from "react";
import { Container, Row,Col } from "reactstrap";
import Image from "next/image";
import fullimg from "../../assets/images/full-img.png"
const About = () => {
    return(
        <>
        <Container className="mt-5 bg-1">
        <Row className=" text-center">
            <hr />
        <h1>About</h1>
        <hr />
        </Row>
        <Row className="mt-5">
            <Col className="col-5">
            <Image className="img-fluid" src={fullimg} alt="" />
            </Col>
            <Col className="col-7 mt-5">
            <h1>About</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tempore distinctio, quisquam dicta harum nisi ducimus
                 molestiae dolor dolorum magnam ipsa debitis est nostrum facilis ea unde non officia corrupti!
                Nemo neque dignissimos architecto culpa mollitia cum molestias, totam eligendi! Perferendis voluptate eum 
                temporibus ut! Ratione a officia libero, quis dolore minima pariatur voluptates hic quidem enim inventore nulla alias!
            </p>
            </Col>
        </Row>
        
        </Container>
        </>
    );
}
export default About;