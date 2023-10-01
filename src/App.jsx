import React, { useState } from "react";
import "./App.css";

function App() {
    const [message, setMessage] = useState("");
    const [position, setPosition] = useState({left: 0, top: 0});

    const showAssistant = (msg, event) => {
        const rect = event.target.getBoundingClientRect();
        setPosition({
            left: rect.left,
            top: rect.bottom + 5 // Place it just below the button
        });
        setMessage(msg);
        const assistantEl = document.querySelector('.assistant');
        assistantEl.classList.add('show');
    };

    return (
        <div className="App">
            <button className="w-[20rem]" onClick={(e) => showAssistant('Button 1 does XYZ', e)}>
              
              
              <h5>hello</h5>
              
              Button 1</button>
            <button style={{ marginTop: "150px", marginLeft: "300px" }} onClick={(e) => showAssistant('Button 2 does ABC', e)}>Button 2</button>
            <button style={{ marginTop: "100px", marginLeft: "500px" }} onClick={(e) => showAssistant('Button 3 does DEF', e)}>Button 3</button>
            <button style={{ marginTop: "250px", marginLeft: "100px" }} onClick={(e) => showAssistant('Button 4 does GHI', e)}>Button 4</button>
            <button style={{ marginTop: "350px", marginLeft: "400px" }} onClick={(e) => showAssistant('Button 5 does JKL', e)}>Button 5</button>

            <div className="assistant" style={position}>
                {message}
                <button onClick={() => {
                    setMessage("");
                    const assistantEl = document.querySelector('.assistant');
                    assistantEl.classList.remove('show');
                }}>Close</button>
            </div>
        </div>
    );
}

export default App;
