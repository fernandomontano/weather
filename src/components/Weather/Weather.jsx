import React from "react";

export const Weather = ({ props = "" }) => {
  let values = {};
  Object.keys(props).map((key) => (values = props[key]));

  return (
    <div className="h-5/6 text-white font-black drop-shadow-xl ">
      {Object.keys(values).length !== 0 && (
        <div className="flex items-center flex-col text-center justify-evenly h-2/4 p-4 rounded-xl">
          <div id="conditions" className="text-6xl tracking-widest">
            {values.values[0].conditions.toUpperCase()}
          </div>
          <div id="location" className="text-4xl ">
            {values.address}
          </div>
          <div id="temperature" className="text-5xl">
            {values.currentConditions.temp} °C
          </div>
        </div>
      )}
    </div>
  );
};
