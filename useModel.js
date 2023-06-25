import React, { useEffect, useState } from "react";

const useModel = (inital, onChange) => {
  const [value, setValue] = useState(inital);
  const handler = (e) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };
  const model = { value, onChange: handler };
  return { model, setModel: setValue };
};

export default useModel;
