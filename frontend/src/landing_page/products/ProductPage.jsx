import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage(){
    return(
        <>
        <Hero/>
        <LeftSection imageUrl="media/images/kite.png"
         productName="FinStonk" 
         productDescription="Our lightning-fast trading platform with real-time market data, advanced charting tools, and a sleek, intuitive interface. Experience seamless trading with Finstonk on both Android and iOS devices." 
         tryDemo="" 
         learnMore=""
         googlePlay=""
         appStore=""/> 

         <RightSection imageUrl="media/images/console.png"
          productName="Finstonk Hub" productDescription="Your all-in-one dashboard for managing your Finstonk account. Get detailed insights into your trades and investments with comprehensive reports and intuitive visualizations."
          learnMore=""/>
         

        <LeftSection imageUrl="media/images/coin.png"
         productName="FinStonk Invest" 
         productDescription="Invest in direct mutual funds online with zero commission, delivered straight to your Demat account. Enjoy a smooth and hassle-free investment experience on your Android and iOS devices." 
         tryDemo="" 
         learnMore=""
         googlePlay=""
         appStore=""/>

        <RightSection imageUrl="media/images/kiteconnect.png"
         productName="Finstonk Connect"
         productDescription="Create powerful trading platforms and seamless experiences with our easy-to-use HTTP/JSON APIs. Ideal for startups looking to build innovative investment apps and showcase them to our growing client base." 
         learnMore=""/>

        <LeftSection imageUrl="media/images/varsity.png"
         productName="Finstonk Learn" 
         productDescription="A simple and engaging collection of stock market lessons with detailed explanations and illustrations. Learn effortlessly with bite-sized cards, making it easy to grasp concepts on the go." 
         tryDemo="" 
         learnMore=""
         googlePlay=""
         appStore=""/>

         <p className="text-center mt-5">Explore the Finstonk.tech blog for insights into the technology powering our platform.</p>

         <Universe/>
        </>
        

        
    )
}