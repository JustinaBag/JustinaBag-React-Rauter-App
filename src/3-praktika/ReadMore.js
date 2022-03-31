import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Custom.css";


import {Container, Row, Col } from "react-bootstrap";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function ReadMore() {
    return <div>
        <Container className="p-5">
            <Row className="g-4">
            <Col lg={4}>
            <ReactReadMoreReadLess
            readMoreClassName="readMoreClassName"
            readLessClassName="readLessClassName"
            charLimit={200}
            readMoreText="Read More ▾"
            readLessText="Read Less ▴"
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At deserunt alias incidunt quo ab eius   voluptatibus culpa sunt enim, ipsam maiores, aliquid amet voluptates et? Illum corporis ratione accusamus sunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At deserunt alias incidunt quo ab eius voluptatibus culpa sunt enim, ipsam maiores, aliquid amet voluptates et? Illum corporis ratione accusamus sunt.
            </ReactReadMoreReadLess>    
            </Col>

            <Col lg={4}>
            <ReactReadMoreReadLess
            readMoreClassName="readMoreClassName"
            readLessClassName="readLessClassName"
            charLimit={200}
            readMoreText="Read More ▾"
            readLessText="Read Less ▴"
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At deserunt alias incidunt quo ab eius    voluptatibus culpa sunt enim, ipsam maiores, aliquid amet voluptates et? Illum corporis ratione accusamus sunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At deserunt alias incidunt quo ab eius voluptatibus culpa sunt enim, ipsam maiores, aliquid amet voluptates et? Illum corporis ratione accusamus sunt.
            </ReactReadMoreReadLess>
   </Col>
   </Row>
   </Container>
   </div>
}
