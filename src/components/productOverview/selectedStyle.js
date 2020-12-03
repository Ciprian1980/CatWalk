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
        name: "Winter Jacket",
        price: 269,
    };

    const { averageRating, category, name, price } = testObj;

    return (
        <div style={{ backgroundColor: "orange", padding: "10px" }}>
            <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />

                <p style={{ display: "inline", textDecoration: "underline" }}>
                    {" "}
                    read all reviews
                </p>
            </div>
            <h1>{category}</h1>
            <h1>{name}</h1>
            <h1>{`${price}`}</h1>
        </div>
    );
}

export default ProductInformation;
