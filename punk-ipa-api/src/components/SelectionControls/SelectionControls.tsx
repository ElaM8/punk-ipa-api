import { useState, FormEvent, ChangeEventHandler } from "react";

type SelectionControlsProps = {
  options: {};
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SelectionControls = ({ options, onChange }: SelectionControlsProps) => {

  return (
    <div className="selection-controls__checkbox-container">
      {/* {Object.keys(options).map((o) => 
      console.log(o))} */}
      <label><input type="checkbox" name={"highAlcohol"} onChange={onChange}/>High Alcohol</label>
      <label><input type="checkbox" name={"classicRange"} onChange={onChange}/>Classic Range</label>
      <label><input type="checkbox" name={"highAcidity"} onChange={onChange}/>High Acidity</label>
    </div>
    
  );
};
  export default SelectionControls;