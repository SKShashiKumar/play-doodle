import React,{useState} from 'react';
import { Card } from "@mui/material";
import  PopModal from "./PopModal";

const Plans = (props) => {
    
    const [isPopOpen, setIsPosOpen] = useState(false)

    return ( 

        <div className="container">
            <Card className="card">
            <div className="row" style={{'backgroundColor':props.color}}>
                <div className="col p-4 text-white">
                    <h4 className="plansSubHeading">{props.heading}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col p-2">
                    <p><span className="textBold">{props.photos}</span> Photos</p>
                </div>
            </div>
            <div className="row">
                <div className="col p-2">
                    <p><span className="textBold">{props.features}</span> Features</p>
                </div>
            </div>
            <div className="row">
                <div className="col p-2">
                    <p><span className="textBold">{props.ads}</span> Ads</p>
                </div>
            </div>
            <div className="row">
                <div className="col p-2">
                    <p><span className="textBold">{props.support}</span> Support</p>
                </div>
            </div>
            <div className="row">
                <div className="col p-2 text-gray">
                    <h3>{props.price}</h3>
                </div>
            </div>
            <div className="row bg-smoke">
                <div className="col p-2">
                    <button className="btn btn-dark" onClick={() => setIsPosOpen(!isPopOpen)}><img src="https://img.icons8.com/ios-glyphs/24/ffffff/insert.png" alt="download"/>&nbsp;&nbsp;Download</button>
                    <PopModal show={isPopOpen} handleClose={() => setIsPosOpen(false)} />
                </div>
            </div>
            </Card>
        </div>
     );
}
 
export default Plans;