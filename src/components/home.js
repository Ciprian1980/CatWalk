import React from "react";
import ReactDOM from "react-dom";
import ProductOverview from "./productOverview/productOverview";
import SearchAppBar from "./Banner.js";
import CustomSearchAppBar from "./customBanner";

function Home(props) {
    // contains the following components
    /*
        Banner(banner)
        ProductOverview 
    */
    const localStyle = {
        display: "block",
    };

    // the following is applied because the the search bar is postions fixed
    const main_style = {
    };

    const notice_style ={
        color:"black",
        textAlign: "center",
        display:"flex",
        alignItems:"baseline",
        justifyContent:"center"
    }

    return (
        <div style={localStyle}>
            <CustomSearchAppBar/>
            <main style={{width:"80%", margin:"0 auto"}}>
                <div style={notice_style}>
                    <p>
                        <i>SITE-WIDE ANNOUNCEMENT MESSAG!</i> - SALE/DISCOUNT
                        <span style={{ fontWeight: "bold" }}>&nbsp;OFFER</span>{" "}
                    </p>
                    &nbsp; &nbsp;<a href="www.google.com">  NEW PRODUCT HIGHLIGHT</a>
                </div>
                <ProductOverview />
            </main>
        </div>
    );
}

export default Home;
