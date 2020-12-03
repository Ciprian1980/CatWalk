import React from "react";
import ReactDOM from "react-dom";
import ProductOverview from "./productOverview/productOverview";
import SearchAppBar from "./Banner.js";



function Home(props) {
    // contains the following components
    /*
        Banner(banner)
        ProductOverview 
    */
    const localStyle ={
        display:"block"
    }


    return (
        <div style={localStyle}>
            <SearchAppBar />
            <ProductOverview/>
        </div>
    );
}

export default Home;
