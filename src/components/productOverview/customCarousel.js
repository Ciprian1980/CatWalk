import React, { useEffect, useState } from "react";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function MyCarousel() {
    let data = [img1, img2, img3, img4, img5];

    const [animate, setTransition] = useState("");
    const [marginLeft, setMarginLeft] = useState(0);
    const [imgCounter, setImgCounter] = useState(0);

    const nextHandler = () => {
        if (imgCounter === data.length - 1) {
            setMarginLeft(0);
            setImgCounter(0);
        } else {
            setImgCounter(imgCounter + 1);
            setMarginLeft(marginLeft - 800);
        }
        setTransition("margin-left 1s");
    };

    const previousHandler = () => {
        if (imgCounter === 0) {
            setMarginLeft(800 * -4);
            setImgCounter(data.length - 1);
        } else {
            setImgCounter(imgCounter - 1);
            setMarginLeft(marginLeft + 800);
        }
        setTransition("margin-left 1s");
    };

    const outer_container = {
        display: "flex",
        width: "100%",
        height: "800px",
    };

    const button_style =  {
        backgroundColor:"Transparent",
        border:"none",
        outline :"none",
    }

    return (
        <div style={outer_container}>
            <button onClick={previousHandler} style={button_style}>
                <ArrowBackIcon/>
            </button>
            <div
                className="image_container"
                style={{
                    height: "inherit",
                    width: "inherit",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        transition: animate,
                        display: "inline-flex",
                        marginLeft: marginLeft,
                    }}
                >
                    {data.map((item) => (
                        <img
                            key={item}
                            src={item}
                            style={{
                                height: "inherit",
                                width: "inherit",
                                alt: { item },
                            }}
                        />
                    ))}
                </div>
            </div>

            <button onClick={nextHandler} style={button_style}>
                <ArrowForwardIcon/>
            </button>
            {/*   <PubgMenu /> */}
        </div>
    );
}
