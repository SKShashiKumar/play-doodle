import React,{useState} from 'react';
import PopModal from './PopModal'

const TheApp = () => {

    const [isPopOpen, setIsPosOpen] = useState(false)
    
        return ( 
        <div className="container-fluid TheApp">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 col-xl-8">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <h1 className="AppName">The App</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2 className="whybuy">Why buy it?</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="contentFull"><span className="firstContent">Take photos like a pro.</span>
                                    You should buy this app because lorem ipsum consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-white" onClick={() => setIsPosOpen(!isPopOpen)}><img src="https://img.icons8.com/ios-glyphs/24/000000/insert.png" alt="download"/>&nbsp;&nbsp;Download Application</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Avilable for <img src="https://img.icons8.com/color/24/000000/android-os.png" alt="android"/>
                                <img src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt="mac"/>
                                <img src="https://img.icons8.com/color/24/000000/windows-10.png" alt="windows"/>
                                </p>
                            </div>
                    <PopModal show={isPopOpen} handleClose={() => setIsPosOpen(false)} />

                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 xol-xl-4 text-right">
                    <img src="../../img/img_app.jpg" alt="img" className="appImage"/>
                </div>
            </div>
        </div>
     );
}
 
export default TheApp;