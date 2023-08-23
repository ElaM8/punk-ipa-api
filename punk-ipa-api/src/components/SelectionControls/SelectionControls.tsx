import { useState, FormEvent, ChangeEventHandler } from "react";

type SelectionControlsProps = {
  name: {};
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SelectionControls = ({ name, checked, onChange }: SelectionControlsProps) => {

  return (
    <div className="selection-controls__checkbox-container">
      <input type="checkbox" name={"highAlcohol"} checked={checked} onChange={onChange}/>
      <input type="checkbox" name={"classicRange"} checked={checked} onChange={onChange}/>
      <input type="checkbox" name={"highAcidity"} checked={checked} onChange={onChange}/>
    </div>
    
  );
};
  export default SelectionControls;