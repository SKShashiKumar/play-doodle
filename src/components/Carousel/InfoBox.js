const InfoBox = (props) => {
    return ( 
        <div className="container-fluid bg-transBlack text-center p-3">
            <div className="row">
                <div className="col-md-12">
                    <h2>{props.heading}</h2>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h5>{props.content}</h5>
                </div>
            </div>
            <div className="row">
                <button className={props.btnclassName}>
                    <img src="https://img.icons8.com/material-rounded/24/ffffff/android-os.png" alt="android"/>
                    <img src="https://img.icons8.com/ios-filled/24/ffffff/mac-os.png" alt="mac"/>
                    <img src="https://img.icons8.com/ios-glyphs/24/ffffff/windows-10.png" alt="windows"/>
                        Download
                </button>
            </div>
        </div>
     );
}
 
export default InfoBox;