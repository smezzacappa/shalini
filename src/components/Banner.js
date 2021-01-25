import {React, Component} from "react";
import Card from "react-bootstrap/Card";
// import Mission from "../components/Mission"
// import Button from "react-bootstrap/Button";
export default class Banner extends Component{
    render(){
        return(
          <div className="header" id="mission">
          Shalini
          <style jsx>
            {`
           .header {
            background-color: #282c34;
            // min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
             }
            `}
          </style>
          </div>
        )
    }
}