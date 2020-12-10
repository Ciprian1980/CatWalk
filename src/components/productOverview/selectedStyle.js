import StarIcon from "@material-ui/icons/Star";
import { useState } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DoneIcon from "@material-ui/icons/Done";
function SelectedStyles(props) {
    // contains the following components
    /*
     * review stars
     * catergory
     * expanded product name
     * price
     */

    const testObj = {
        avaialbleStyles: [1, 2, 3, 4, 5, 6, 7, 8],
    };

    const { avaialbleStyles } = testObj;

    const circles = {
        width: "60px",
        height: "60px",
        margin: "15px 15px 15px 0",
        border: "solid black 1px",
        borderRadius: "50%",
        backgroundColor: "#ebebeb",
        textAlign: "center",
        fontSize: "50px",
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        height: "33%",
        width: "97%",
        padding: "10px",
    };

    const circleCollection = {
        display: "flex",
        flexWrap: "wrap",
    };


    const listOfStyles = testObj.avaialbleStyles.map((item) => {
        return (
            <div style={circles}>
                {item}
                <SmallCircle/>
            </div>
        );
    });

    return (
        <div style={containerStyle}>
            <h1 style={{fontSize:"24px"}}>
                STYLE&nbsp;>&nbsp;<span style={{  fontWeight:"300" }}>SELECTED STYLE</span>
            </h1>
            <div style={circleCollection}>{listOfStyles}</div>
        </div>
    );
}

export default SelectedStyles;

function SmallCircle() {
    const circle_styles = {
        position: "relative",
        width:"25px",
        height:"25px",
        left: "65%",
        bottom: "65%",
        backgroundColor:"white",
        borderRadius: "50%",
        border: "1px solid black",
    };

    const done_icon = {
        width: "50%",
        height: "50%",
        position: "relative",
        bottom: "109%",
    };

    return (
        <div style={circle_styles}>
            <DoneIcon style={done_icon} />
        </div>
    );
}
