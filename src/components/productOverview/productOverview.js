import SelectedStyles from "./selectedStyle";
import AddToCart from "./addToCart";
import ProductInformation from "./productInformation";
import MyCarousel from "./customCarousel";
import VerticalCarousel from "./verticalCarousal";
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
        flex: "3 1",
        width: "100%",
        backgroundColor: "#ebebeb",
        justifyContent: "space-evenly",
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    };

    const gallery_style = {
        backgroundColor: "red",
        width: "75%",
        height: "800px",
        display: "flex",
        flexDirection: "row",
    };

    return (
        <div className="productOverView" style={mainContainerStyle}>
            <div className="imageGallery" style={gallery_style}>
                <VerticalCarousel />
                <div
                    className="right_gallery"
                    style={{
                        width: "70%",
                        backgroundColor: "#ebebeb",
                    }}
                >
                    <MyCarousel />
                </div>
            </div>
            <div
                className="productDetails"
                style={{
                    backgroundColor: "white",
                    padding: "15px",
                    width: "40%",
                    height: "800px",
                }}
            >
                <div className="container" style={containerStyle}>
                    <ProductInformation />
                    <SelectedStyles />
                    <AddToCart />
                </div>
            </div>
        </div>
    );
}

export default ProductOverview;
