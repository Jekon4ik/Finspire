import React, { ChangeEvent, JSX, useState, SyntheticEvent} from 'react'

interface Props{
  onClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void; 
}

const Search: React.FC<Props> = ({onClick, search, handleChange}: Props): JSX.Element => {
  return (
    <div>
        <input value={search} onChange = {(e) => handleChange(e)}></input>
        <button onClick = {(e) => onClick(e)}></button>
    </div>
  );
};

export default Search