export default function Pricing(){
    return(
        <div className="container">
            <div className="row">

                <div className="col-4">

                    <h1 className="mb-3 fs-2">Transparent Pricing</h1>
                    <p>We lead with clear, flat fees and no hidden charges, making investing affordable and straightforward for everyone.</p>
                    <a href="" style={{textDecoration: "none"}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>

                </div>

                <div className="col-2">

                </div>

                <div className="col-6">
                    
                    <div className="row text-center mb-5">

                        <div className="col border p-2">
                            <h1 className="mb-3">₹0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>

                        </div>

                        <div className="col border p-2">

                        <h1 className="mb-3">₹20</h1>
                        <p>Intraday and F&O</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}