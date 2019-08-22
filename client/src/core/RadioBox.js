import React, { useState, useEffect } from "react";

const RadioBox = ({ prices }) => {
  const [value, setValue] = useState(0);

  return (
    <>
      {JSON.stringify(prices)}
      <input type="radio" className="mr-2 ml-4">
        <label className="form-check-label">Name</label>
      </input>
    </>
  );
};
