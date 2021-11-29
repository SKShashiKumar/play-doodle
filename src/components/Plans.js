import { Card } from "@mui/material";

const Plans = (props) => {
    return ( 

        <div className="container">
            <Card className="card">
            <div className="row" style={{'backgroundColor':props.color}}>
                <div className="col-md-12 p-4 text-white">
                    <h4 className="plansSubHeading">{props.heading}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 p-3">
                    <p>{props.photos} Photos</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 p-3">
                    <p>{props.features} Features</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 p-3">
                    <p>{props.ads} Ads</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 p-3">
                    <p>{props.support} Support</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 p-3 text-gray">
                    <h3>{props.price}</h3>
                </div>
            </div>
            <div className="row bg-smoke">
                <div className="col-md-12 p-3">
                    <button className="btn btn-dark"><img src="https://img.icons8.com/ios-glyphs/24/ffffff/insert.png" alt="download"/>&nbsp;&nbsp;Download</button>
                </div>
            </div>
            </Card>
        </div>
     );
}
 
export default Plans;