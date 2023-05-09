import React from "react";
import { useState, useEffect } from "react";
import { colorLog } from "../utils";
import { Box } from "@mui/material";

// const LifecycleExe = () => {
//   const [count, setCount] = useState(() => {
//     colorLog("1", "red");
//     setTimeout(() => {
//       colorLog("4", "green");
//     }, 1000);
//     return 0;
//   });
//   useEffect(() => {
//     colorLog("3", "pink");
//     return () => {
//       colorLog("5", "black");
//     };
//   }, []);

//   useEffect(() => {
//     colorLog("3");
//     return () => {
//       colorLog("6");
//     };
//   }, []);

//   return (
//     <Box>
//       {colorLog("2")}
//       Lifecycle
//       <button onClick={() => setCount((prev) => prev + 1)}>Click </button>
//     </Box>
//   );
// };

const LifeCycleExe = () => {
  const [count, setCount] = useState(() => {
    colorLog("1");
    setTimeout(() => {
      colorLog("5");
    }, 1000);
    return 0;
  });

  useEffect(() => {
    colorLog("3");
    return () => {
      colorLog("6");
    };
  }, []);

  useEffect(() => {
    colorLog("4");
  }, [count]);

  return (
    <div>
      {colorLog("2")}
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
    </div>
  );
};

export default LifeCycleExe;
