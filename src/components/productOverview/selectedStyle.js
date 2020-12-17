import StarIcon from "@material-ui/icons/Star";
import React, { useState } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DoneIcon from "@material-ui/icons/Done";
// images used for thubnail
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
function SelectedStyles(props) {
    // contains the following components
    /*
     * review stars
     * catergory
     * expanded product name
     * price
     */

    const circles = {
        cursor: "pointer",
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

    const testObj = {
        avaialbleStyles: [
            { id: 0, name: "Hand made", imgSrc: img1, clicked: true },
            { id: 1, name: "Hand woven", imgSrc: img2, clicked: false },
            { id: 2, name: "Machine made", imgSrc: img3, clicked: false },
            { id: 3, name: "Perfect for winter", imgSrc: img4, clicked: false },
            { id: 4, name: "Perfect for winter", imgSrc: img4, clicked: false },
            { id: 5, name: "Summer time", imgSrc: img5, clicked: false },
            { id: 6, name: "Summer time", imgSrc: img5, clicked: false },
            { id: 7, name: "Summer time", imgSrc: img5, clicked: false },
            { id: 8, name: "Summer time", imgSrc: img5, clicked: false },
        ],
    };

    const { avaialbleStyles } = testObj;

    const [selectedStyleName, setSelectedStyleName] = useState(
        avaialbleStyles[0].name
    );
    const [displayStatus, setDisplayStatus] = React.useState(avaialbleStyles);
    // by default the first available style is selected

    const setStyleName = function (data) {
        console.log("before map" );
        console.log(displayStatus);
    
        const temp = displayStatus.map(item=> {

            if(item.id===parseInt(data)) {
                if(!item.clicked){
                    
                    item.clicked = true;
                }
            }
            else {
                item.clicked = false;
            }
            return item
        });
        console.log("after map" );
        console.log(temp);

        if(temp[data]) {
            setSelectedStyleName(temp[data].name);
        }
        setDisplayStatus([...temp]);
    };

    const listOfStyles = displayStatus.map(({ clicked, imgSrc,id }) => {
        return (
            <>
                <StyleItem
                    cb={setStyleName}
                    imgSrc={imgSrc}
                    clicked={clicked}
                    id={id}
                />
            </>
        );
    });

    return (
        <div style={containerStyle}>
            <h1 style={{ fontSize: "24px" }}>
                STYLE&nbsp;>&nbsp;
                <span style={{ fontWeight: "300" }}>{selectedStyleName}</span>
            </h1>
            <div style={circleCollection}>{listOfStyles}</div>
        </div>
    );
}

export default SelectedStyles;

function SmallCircle(props) {
    const { displayStatus } = props;

    const circle_styles = {
        position: "relative",
        width: "25px",
        height: "25px",
        left: "65%",
        bottom: "130%",
        backgroundColor: "white",
        borderRadius: "50%",
        border: "1px solid black",
        zIndex: "1000",
    };

    const done_icon = {
        width: "50%",
        height: "50%",
        position: "relative",
        bottom: "100%",
    };

    if (displayStatus) {
        return (
            <div style={circle_styles} >
                <DoneIcon style={done_icon} />
            </div>
        );
    }
    return <></>;
}

function StyleItem(props) {
    const circles = {
        cursor: "pointer",
        width: "60px",
        height: "60px",
        margin: "15px 15px 15px 0",
        border: "solid black 1px",
        borderRadius: "50%",
        backgroundColor: "#ebebeb",
        textAlign: "center",
        fontSize: "50px",
    };

    // destructure the image src

    const { imgSrc, cb, clicked, id } = props;

    const [displayStatus, setDisplayStatus] = React.useState(clicked);
    const [activeID, setActiveID] = React.useState(id);

    function clickHandler(e) {
        setActiveID(e.target.id);
        cb(e.target.id);
    }

    return (
        <>
            <div
                style={circles}
                onClick={(e) => clickHandler(e)}
            >
                <img
                    id={id}
                    style={{
                        height: "inherit",
                        width: "inherit",
                        borderRadius: "inherit",
                    }}
                    src={imgSrc}
                />
                <SmallCircle displayStatus={clicked} />
            </div>
        </>
    );
}
