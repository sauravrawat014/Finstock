export default function Hero(){
    return(
        <>
        <div className="container">
            <div className="row p-5 mb-5">
            <h1 className="text-center fs-9 ">Empowering Traders, Breaking Barriers</h1>
            <p className="text-center">Finstonk is redefining the future of trading by offering seamless and affordable solutions for traders and investors across India.</p>

            </div>
            <hr/>

            <div className="row mb-5">
            <h2 className="text-3xl font-bold text-center mb-8">My Vision & Mission</h2>
                <div className="col mt-5">
                    <p className="fs-6 text-muted mb-5 mt-5 p-2">🚀 "Our mission is to revolutionize the trading landscape by introducing innovative, tech-powered solutions that make investing seamless, secure, and affordable for everyone. We aim to break down complex financial barriers, empowering traders with cutting-edge tools, real-time insights, and an intuitive interface that enhances decision-making. By prioritizing accessibility and transparency, we strive to create a trading ecosystem where both beginners and seasoned investors can thrive, ensuring that the power of trading is placed directly in the hands of the people.</p>
                    <img src="media/images/aboutMision.jpg" style={{width: "65%", borderRadius: "1rem"}} className="mt-5 p-2 mb-5"/>
                    

                </div>

                <div className="col mt-5 text-center">
                    <img src="media/images/aboutVision.jpg" style={{width:"60%", borderRadius:"1rem"}} className="mb-5 p-2"/>
                    <p className="fs-6 text-muted mt-5 p-2 mb-5">🚀 "Our mission is to empower traders by seamlessly integrating advanced technology with comprehensive education, equipping them with the knowledge, tools, and insights needed to make informed financial decisions. We believe that success in trading is not just about access to markets but about understanding market trends, mastering trading strategies, and staying ahead with real-time data. Through interactive learning resources, expert guidance, and innovative tech solutions, we strive to create an ecosystem where traders of all levels can enhance their skills, minimize risks, and confidently navigate the complexities of the financial world."</p>

                </div>

            </div>
            <hr/>

            <div className="row mt-5">

            <h2 className="text-3xl font-bold text-center mb-5">Why Finstonk?</h2>

                <div className="col">
                <img src="media/images/aboutMoney.jpg" style={{width: "65%", borderRadius: "1rem"}} className="p-2 mb-5"/>
                <h3 className="text-xl font-bold mt-5 mb-5">⚡️ Advanced Tech</h3>
                <p className="mt-5 mb-5 fs-6 text-muted">👉 "Leverage cutting-edge technology to experience lightning-fast order execution and real-time market updates. Our platform is built with advanced algorithms and state-of-the-art infrastructure, ensuring high performance and reliability even during peak trading hours."</p>
                <img src="media/images/aboutEducation.jpg" style={{width: "65%", borderRadius: "1rem"}} className="p-2 mb-5 mt-5"/>
                </div>

                <div className="col text-center">
                <h3 className="text-xl font-bold mt-5 mb-5">💸 Zero Commission</h3>
                <p className="mt-5 mb-5 fs-6 text-muted">👉 "Enjoy seamless trading with absolutely zero brokerage, ensuring that you maximize your profits without worrying about hidden fees. Our transparent and fair fee structure guarantees that you know exactly what you're paying, giving you full control over your investments."</p>

                <img src="media/images/aboutTech.jpg" style={{width: "65%", borderRadius: "1rem"}} className="mt-5 p-2 mb-5"/>

                <h3 className="text-xl font-bold mt-5 mb-5">📚 Empowering Education</h3>
                <p className="mt-5 mb-5 fs-6 text-muted">👉 "Gain a competitive edge with our extensive library of educational resources, interactive tutorials, and expert insights. We empower traders of all levels by providing the knowledge and tools needed to make informed, confident, and profitable decisions in the ever-changing financial landscape."</p>
                </div>

            </div>

        </div>
        </>
    );
}