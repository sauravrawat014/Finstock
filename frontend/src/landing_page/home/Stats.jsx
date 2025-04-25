export default function Stats(){
    return(
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">

                    <h1 className="fs-2 mb-5">Invest with Transparency</h1>

                    <h2 className="fs-4">Empowering Retail Investors</h2>
                    <p className="text-muted">Finstonk is a next-gen trading platform simplifying investing for retail users. Focused on transparency, ease of use, and financial literacy, it empowers users to take control of their financial future.</p>
                      
                    <h2 className="fs-4">Scalable and User-Centric</h2>
                    <p className="text-muted">Built to handle millions of users, Finstonk is designed to grow with its user base, offering a reliable and efficient trading experience for retail investors.</p>

                    <h2 className="fs-4">Secure and Transparent</h2>   
                    <p className="text-muted">Built with security and transparency at its core, Finstonk ensures a safe and trustworthy environment for users to trade and invest.</p> 

                    <h2 className="fs-4">Do Better with Money</h2>    
                    <p className="text-muted">Finstonk goes beyond transactions. With features like Smart Nudge (personalized insights) and Safety Switch (risk management tools), we aim to help users make smarter financial decisions.</p>   


                </div>

                <div className="col-6 p-5">

                    <img src="media/images/stock_market.jpg" style={{width: "90%", borderRadius: "1rem"}}/>

                    <div className="text-center">
                        <a href="" className="mx-4" style={{textDecoration: "none"}}>Explore Finstonk <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="" style={{textDecoration: "none"}}>Try Kite <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                </div>

            </div>

        </div>
    );
}