import { React, useEffect, useState } from "react";
import { getSigns } from '../service/api';

export const SelectSign = ({ onSignSelectded }) => {
    const [signs, setSigns] = useState([]);

    useEffect(() => {
        getSigns().then(setSigns);
    }, []); // +empty array
  return (
    <>
      <h2>Please select the sign</h2>
      <div className="grid">
        {/* {["a", "b", "c"].map((sign) => ( */}
        {/* {signs.map((sign) => ( */}
        {/* {[ "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", 
      "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"].map((sign) => ( */}
        {signs.map((sign) => (
          <button
            className="sign"
            key={sign}
            onClick={() => onSignSelectded(sign)}
          >
            {sign}
          </button>
        ))}
      </div>
    </>
  );
};

//export default App;