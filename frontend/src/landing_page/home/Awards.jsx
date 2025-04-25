export default function Award(){
    return (
       <div className="container mt-5">

        <div className="row">

            <div className="col-6 p-5">
                <img src="media/images/largestBroker.svg"/>

            </div>

            <div className="col-6 p-5 mt-3">
                <h1>Largest Stock Broker In India</h1>
                <p className="mb-5">Developed a simulated stock trading platform inspired by leading brokerage platforms, demonstrating how millions of users can drive over 15% of India’s daily retail trading and investing volumes, highlighting the platform’s scalability and market impact</p>

                <div className="row">

                    <div className="col-6">

                    <ul>
                    <li><p>Futures And Options</p></li>

                    <li><p>Commodity Derivatives</p></li>

                    <li><p>Currency Derivatives</p></li>
                </ul>

                    </div>

                    <div className="col-6">

                    <ul>
                    <li><p>Stocks % IPOs</p></li>

                    <li><p>Direct mutual funds</p></li>

                    <li><p>Bonds and Government Security</p></li>
                </ul>

                    </div>

                </div>
                
                <img src="media/images/pressLogos.png" style={{width:"90%"}}/>

            </div>

        </div>
       </div>
    )
}