import { ChangeEventHandler } from "react";

type SelectionControlsProps = {
  options: {};
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SelectionControls = ({ onChange }: SelectionControlsProps) => {

  return (
    <div className="selection-controls__checkbox-container">
      {/* stop hardcoding this once types are sorted */}
      <label><input type="checkbox" name={"highAlcohol"} onChange={onChange}/>High Alcohol</label>
      <label><input type="checkbox" name={"classicRange"} onChange={onChange}/>Classic Range</label>
      <label><input type="checkbox" name={"highAcidity"} onChange={onChange}/>High Acidity</label>
    </div>
    
  );
};
  export default SelectionControls;