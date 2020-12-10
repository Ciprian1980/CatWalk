import StarIcon from "@material-ui/icons/Star";
import { useState } from "react";
function ProductInformation(props) {
    // contains the following components
    /*
     * review stars
     * catergory
     * expanded product name
     * price
     */

    const testObj = {
        averageRating: 4.5,
        category: "clothing",
        name: "Expanded Product Name",
        price: 269,
    };

    const { averageRating, category, name, price } = testObj;

    return (
        <div style={{ backgroundColor: "white", padding: "10px" }}>
            <div style={{display:"inline-flex", alignItems:"center"}}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />

                <a href="www.google.com" style={{ margin:"0 10px",fontSize:"24px",color:"grey", textDecoration: "underline" }}>
                    {" "}
                    Read all reviews
                </a>
            </div>
            <h2 style={{color:"grey" }}>CATEGORY</h2>
            <h1>{name}</h1>
            <h2 style={{color:"grey"}}>&#36;{price}</h2>
        </div>
    );
}

export default ProductInformation;
