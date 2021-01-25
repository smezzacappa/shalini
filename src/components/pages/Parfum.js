import {React, Component} from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import S1 from "../../assets/images/shalini1.jpeg";
import S2 from "../../assets/images/shalini2.jpeg";
import S3 from "../../assets/images/shalini3.jpg";
import S4 from "../../assets/images/shalini4.jpg";
export default class Parfum extends Component{
    render(){
        return(
          <div >
           <Row>
    <Col sm={6}>
    <img src={S2} />
    </Col>
    <Col sm={6}>
    <img src={S4} />
    </Col>
  </Row>
  <Row>
    
    <Col  sm={6}>
    <img src={S1} />
    </Col>
    <Col sm={6}>
        <img src={S2} />
        </Col>
    {/* <Col sm>sm=true</Col> */}
  </Row>

          <style jsx>
            {`
            .col-sm-6{
             
                line-height: 10em;
                display: flex;
                align-items:center;
                justify-content: center;
            }
            .col-sm-4{
                
                line-height: 10em;
                display:flex;
                align-items:center;
                justify-content: center;
            }
            img{
                height: 50vh;
            }
            `}
          </style>
          </div>
        )
    }
}