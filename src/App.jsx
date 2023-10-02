import React, { useState } from "react";
import "./App.css";

function App() {
    const [content, setContent] = useState({
        message: "",
        gifPath: "https://res.cloudinary.com/durbee4ln/image/upload/v1696268727/giphy_khrzov.gif"
    });
    const [position, setPosition] = useState({ left: 0, top: 0 });

    const handleMouseEnter = (hoverMsg, hoverGif, event) => {
        const rect = event.target.getBoundingClientRect();
        setPosition({
            left: rect.left,
            top: rect.bottom + 5
        });
        setContent({
            message: hoverMsg,
            gifPath: hoverGif
        });
    };

    const handleMouseLeave = () => {
        setContent({ message: "", gifPath: "" });
    };

    const handleClick = (clickMsg, clickGif) => {
        setContent({
            message: clickMsg,
            gifPath: clickGif
        });
    };

    return (
        <div className="App">
            <button
                onMouseEnter={(e) => handleMouseEnter('Hover over Button 1', "https://res.cloudinary.com/durbee4ln/image/upload/v1696268727/giphy_khrzov.gif", e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('Button 1 does XYZ', "https://res.cloudinary.com/durbee4ln/image/upload/v1691832901/16_prev_ui_tojjsk.png")}
            >
                Button 1
            </button>

            <button
                style={{ marginTop: "150px", marginLeft: "300px" }}
                onMouseEnter={(e) => handleMouseEnter('Hover over Button 2', "https://res.cloudinary.com/durbee4ln/image/upload/v1696268727/giphy_khrzov.gif", e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('Button 2 does ABC', "https://res.cloudinary.com/durbee4ln/image/upload/v1691832901/16_prev_ui_tojjsk.png")}
            >
                Button 2
            </button>

            <button
                style={{ marginTop: "100px", marginLeft: "500px" }}
                onMouseEnter={(e) => handleMouseEnter('Hover over Button 3',  "https://res.cloudinary.com/durbee4ln/image/upload/v1696268727/giphy_khrzov.gif", e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('Button 3 does DEF',  "https://res.cloudinary.com/durbee4ln/image/upload/v1696268727/giphy_khrzov.gif")}
            >
                Button 3
            </button>

            <button
                style={{ marginTop: "250px", marginLeft: "100px" }}
                onMouseEnter={(e) => handleMouseEnter('Hover over Button 4',  "https://res.cloudinary.com/durbee4ln/image/upload/v1696268727/giphy_khrzov.gif", e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('Button 4 does GHI',  "https://res.cloudinary.com/durbee4ln/image/upload/v1691832901/16_prev_ui_tojjsk.png")}
            >
                Button 4
            </button>

            <button
                style={{ marginTop: "350px", marginLeft: "400px" }}
                onMouseEnter={(e) => handleMouseEnter('Hover over Button 5', "https://res.cloudinary.com/durbee4ln/image/upload/v1696268727/giphy_khrzov.gif", e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('Button 5 does JKL', "https://res.cloudinary.com/durbee4ln/image/upload/v1691832901/16_prev_ui_tojjsk.png")}
            >
                Button 5
            </button>

            <div className={`assistant w-[100px] h-[100px] ${content.message ? 'show' : ''}`} style={{ left: `${position.left}px`, top: `${position.top}px` }}>
                <p>{content.message}</p>
                <img src={content.gifPath} alt="GIF for illustration" className="w-[100%]" />
            </div>
        </div>
    );
}

export default App;


