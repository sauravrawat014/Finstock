export default function RightSection({imageUrl, productName, productDescription, learnMore}){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col mt-5 p-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore}>Learn More</a>

                </div>
                <div className="col">
                    <img src={imageUrl}/>

                </div>

            </div>

        </div>
    )
}