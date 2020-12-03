import ProductInformation from './productInformation'
function ProductOverview(props) {
    // contains the following components
    /*
        Image gallery(ImageGallery)
        Product information(ProductInformation)
        Style selector(StyleSelector)
        Add to cart(AddToCart)
    */

    const mainContainerStyle = {
        display: "flex",
        flex: "2 1",
        width: "80%",
        margin :"84px 10%",
        backgroundColor:"grey",
        justifyContent: "space-evenly",
    };

    const containerStyle =  {
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly"
    }

    
    return (
        <div className="productOverView" style={mainContainerStyle}>
            <div className="imageGallery" style={{backgroundColor:"red", width:"60%" ,height:"800px"}}>
                <h1>Image Gallery</h1>
            </div>
            <div className="productDetails" style={{backgroundColor:"yellow",padding:"15px",width:"40%", height:"800px"}}>
                <div className="container" style={containerStyle}>
                    <ProductInformation/>
                    <h1>Style Selector</h1>     
                    <h1>Add to Cart</h1>     
                </div>
            </div>
        </div>
    );
}

export default ProductOverview;
