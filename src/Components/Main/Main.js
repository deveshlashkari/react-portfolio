import React, { useState } from "react";
import Typist from "react-typist";
import "./Main.css";

import { randomColor } from "../../Utils/CommonUtils";

function Main() {
  const [done, setDone] = useState(true);

  const handleTyping = () => {
    setDone(false);
    setDone(true);
  };

  return (
    <div className="main">
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <span className="heading-text">DEVESH LASHKARI</span>

          {done ? (
            <Typist
              onTypingDone={handleTyping}
              cursor={{ show: false, blink: true, element: "" }}
            >
              {/* <Typist.Backspace count={10} delay={300} /> */}
              <span className="typist-text" style={{ color: randomColor() }}>
                Hy
              </span>
            </Typist>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
