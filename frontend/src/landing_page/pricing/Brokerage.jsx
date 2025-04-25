export default function Brokerage(){
    return(
       <div className="container">
        <div className="row p-5 mt-5 text-center border-top">

            <div className="col-8 p-4">
                <a href="" style={{textDecoration: "none"}}><h3 className="fs-5">Brokerage Calculator</h3></a>
                <ul style={{textAlign: "left", lineHeight: "2.5", fontSize: "14px"}} className="text-muted mt-3">
                    <li>Call & trade and RMS auto-squareoff:Additional charges of ₹50 +</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                </ul>
            </div>
            <div className="col-4 p-4">
                <a href="" style={{textDecoration: "none"}}><h3 className="fs-5">List of charges</h3></a>
            </div>

        </div>

       </div>
    );
}