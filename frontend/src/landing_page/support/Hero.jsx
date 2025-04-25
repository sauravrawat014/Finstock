export default function Hero(){
    return(
        <section className="container-fluid" id="supportHero">
            <div className="p-4" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
                </div>
                <div className="row p-3 m-2">
                    
                    <div className="col-6 p-5">
                        <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                        <input placeholder="Eg: how do i activate F&O" className="mb-2"/>
                        
                        <br/>
                        <a href="" style={{marginRight: "20px", lineHeight: "30px"}}>Track account opening</a> 
                        <a href="" style={{marginRight: "20px", lineHeight: "30px"}}>Track segment activation </a>
                        <a href="" style={{marginRight: "20px", lineHeight: "30px"}}>Intraday margins </a> <br/>
                        <a href="" style={{marginRight: "20px", lineHeight: "30px"}}>Kite user manual</a>
                    </div>
                    <div className="col-6 p-5">
                        <h1 className="fs-3">Featured</h1>
                        <ol>
                            <li><a href="" style={{lineHeight: "50px"}}>Surveillance measure on scrips - March 2025</a></li>
                            <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
                        </ol>

                    </div>

                </div>

            
        </section>
    )
}