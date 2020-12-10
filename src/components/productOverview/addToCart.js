import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import StarIcon from '@material-ui/icons/Star';
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
        <div style={{ backgroundColor: "white", padding: "10px" }}>
            <FormControl
                variant="filled"
                style={{ width: "40%", marginRight: "20px" }}
            >
                <InputLabel id="demo-simple-select-filled-label">
                    SELECT SIZE
                </InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={size}
                    onChange={handleSizeSelect}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    <MenuItem value={40}>OUT OF STOCK</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="filled" style={{width:"20%"}}>
                <InputLabel id="demo-simple-select-filled-label">
                    {quantity}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={quantity}
                    onChange={handleCountChange}
                >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                    <MenuItem value={40}>4</MenuItem>
                </Select>
            </FormControl>
            <div style ={{display:"flex" , justifyContent:"space-between"}}>
            <StyledButton style={{width:"80%"}}>
                <span>ADD TO BAG</span>
                <AddIcon />
            </StyledButton>
            <StyledButton style={{width:"10%", marginRight:"10px"}}>
                <StarIcon/>
            </StyledButton>
            </div>
        </div>
    );
}

export default AddToCart;

const StyledButton = withStyles({
      root: {
              backgroundColor: 'white',
              borderRadius: 0,
              border: "1px solid black",
              display:"inline-flex",
              justifyContent:"space-between",
              color: 'black',
              height: 48,
              padding: '15px',
            },
            label: {
                fontWeight:"bolder"
              },
})(Button);
