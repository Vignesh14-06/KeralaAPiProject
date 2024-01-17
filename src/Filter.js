import React, { useState } from "react";
import ListItem from "./ListItem";

const Filter = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={(e) => handleChange(e)} />
      <ListItem value={value} />
    </div>
  );
};

export default Filter;
