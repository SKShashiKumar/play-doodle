import Plans from "./Plans";

const Pricing = () => {
    return (  
        <div className="container-fluid pricingMain">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="pricingName">Pricing</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>Choose a pricing plan that fits your needs.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 p-2">
                    <Plans color={'#616161'} heading={'Basic'} photos={250} features={10} ads={'NO'} support={'Office hours'} price={'$ 25'}/>
                </div>
                <div className="col-md-6 p-2">
                    <Plans color={'#f44336'} heading={'Premium'} photos={1000} features={50} ads={'NO'} support={'Endless'} price={'$ 99'}/>
                </div>
            </div>
        </div>
    );
}
 
export default Pricing;