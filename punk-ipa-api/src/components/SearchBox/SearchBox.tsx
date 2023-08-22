import { FormEventHandler } from "react";
import './SearchBox.scss'

type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>
};

const SearchBox = ( { label, searchTerm, handleInput }: SearchBoxProps) => {

  return (
    <>
      <h2>SearchBox</h2>
      <div className="form__input--searchBox">
        <input 
        type="text"
        id={label}
        name={label}
        value={searchTerm}
        onInput={handleInput}
        />
      </div>
    </>
  )
}

export default SearchBox;