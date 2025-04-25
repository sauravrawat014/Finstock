export default function Hero(){
    return(
        <div className="container mt-5">

        <div className="row mb-5 border-bottom text-center">
            <h1>Pricing</h1>
            <h4 className="mb-5 text-muted fs-5 mt-3">Free equity investments and flat ₹20 traday and F&O trades</h4>
            </div>
            

            <div className="row mb-5 text-center">

                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg"/>
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted mt-4">All equity delivery investments (NSE, BSE) are completely free on Finstonk — ₹0 brokerage, ensuring maximum returns on your investments.</p>

                </div>

                <div className="col-4 p-5">

                    <img src="media/images/intradayTrades.svg"/>
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted mt-4">Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity segments. Flat ₹20 on all option trades on Finstonk.</p>

                </div>

                <div className="col-4 p-5">

                    <img src="media/images/pricingMF.svg"/>
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted mt-4">All direct mutual fund investments on Finstonk are completely free — ₹0 commissions and DP charges.</p>

                </div>
        
            </div>
    </div>
    );
}