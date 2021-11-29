import InfoBox from "./Carousel/InfoBox";
import {useState} from 'react';

const Carousel = () => {

  const [cor, setCor] = useState(1);

  return (
    <div className="container-fluid imgCol">
      {(cor === 1)?
      <div className="row">
        <img src="../../img/app2.jpg" alt="c1" height="100%" width="100%"/>
        <button className="btn btn-dark leftButton" onClick={() => setCor(2)}>Take Tour&nbsp;&gt;</button>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 rightBox">
              <InfoBox heading="Take photos with our app" content="Super simple installment: free of charge" btnclassName= "btn col-md-10 mx-auto bg-success"/>
            </div>
          </div>
        </div>
      </div>
:(cor === 2)?
      <div className="row">
        <img src="../../img/app4.jpg" alt="c1" height="100%" width="100%"/>
        <button className="btn btn-dark leftButton" onClick={() => setCor(3)}>Take Tour&nbsp;&gt;</button>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 rightBox">
              <InfoBox heading="Take photos with our app" content="Super simple installment: free of charge" btnclassName= "btn col-md-10 mx-auto bg-danger"/>
            </div>
          </div>
        </div>
      </div>
:
      <div className="row">
        <img src="../../img/app.jpg" alt="c1" height="100%" width="100%"/>
        <button className="btn btn-dark leftButton" onClick={() => setCor(1)}>Take Tour&nbsp;&gt;</button>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 rightBox">
              <InfoBox heading="Take photos with our app" content="Super simple installment: free of charge" btnclassName= "btn col-md-10 mx-auto bg-purple"/>
            </div>
          </div>
        </div>
      </div>
}
    </div>
  );
};

export default Carousel;
