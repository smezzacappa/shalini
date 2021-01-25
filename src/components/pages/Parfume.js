import {React, Component} from "react";
import Card from "react-bootstrap/Card";
// import Mission from "../components/Mission"
// import Button from "react-bootstrap/Button";
export default class Parfume extends Component{
    render(){
        return(
          <div className="App-header" id="mission">
            This is the Parfumes Page
          <style jsx>
            {`
            .card-body{
              box-shadow: 0em 0em 1em silver;
            }
            #mission{
              display: flex;
              justify-content: center;
            }
            .card{
              // margin: 30px;
              background-color: black;
              margin: 1em 0px 1em 0px;
            }
            @media only screen and (max-width: 400px) {
              .card{
                margin: 1em 0 1em 0;;
              }
             }
            `}
          </style>
          </div>
        )
    }
}