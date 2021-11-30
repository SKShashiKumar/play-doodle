const InfoBox = (props) => {
    return ( 
        <div className="container-fluid bg-transBlack text-center p-3">
            <div className="row pt-2 pb-2">
                <div className="col-md-12">
                    <h4>{props.heading}</h4>
                    <hr/>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-md-12">
                    <h6>{props.content}</h6>
                </div>
            </div>
            <div className="row p-3">
                <button className={props.btnclassName}>
                        <span className="text-white">Download</span>
                        <img src="https://img.icons8.com/material-rounded/24/ffffff/android-os.png" alt="android"/>
                        <img src="https://img.icons8.com/ios-filled/24/ffffff/mac-os.png" alt="mac"/>
                        <img src="https://img.icons8.com/ios-glyphs/24/ffffff/windows-10.png" alt="windows"/>   
                </button>
            </div>
        </div>
     );
}
 
export default InfoBox;