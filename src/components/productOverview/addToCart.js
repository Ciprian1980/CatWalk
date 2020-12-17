import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import Select from "@material-ui/core/Select";

function AddToCart(props) {
    // contains the following components
    /*
     * review stars
     * catergory
     * expanded product name
     * price
     */

    const [size, setSize] = React.useState("SELECT SIZE");
    const [quantity, setQuantity] = React.useState(1);

    const handleCountChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleSizeSelect = (event) => {
        setSize(event.target.value);
    };

    return (
        <div
            style={{
                backgroundColor: "white",
                padding: "10px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}
        >
            <CustomSelect
                styleList={[1, 2, 3, 4]}
                defaultValue={"SELECT SIZE"}
            />
            <CustomSelect styleList={[1, 2, 3, 4]} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <StyledButton>
                    <span>ADD TO BAG</span>
                    <AddIcon />
                </StyledButton>
                <StyledButton>
                    <StarIcon />
                </StyledButton>
            </div>
        </div>
    );
}

export default AddToCart;

const StyledButton = withStyles({
    root: {
        backgroundColor: "white",
        borderRadius: 0,
        border: "1px solid black",
        display: "inline-flex",
        justifyContent: "space-between",
        color: "black",
        height: 48,
        padding: "15px",
    },
    label: {
        fontWeight: "bolder",
    },
})(Button);

const CustomSelect = ({ styleList, defaultValue }) => {
    const styles = styleList;
    return (
        <div style={{ display: "inline" }}>
            <select style={{ padding: "10px" }}>
                {defaultValue ? (
                    <option selected hidden>
                        {defaultValue}
                    </option>
                ) : (
                    <></>
                )}
                {styles.map((style) => (
                    <option value={style}>{style}</option>
                ))}
            </select>
        </div>
    );
};
