import { Component } from "react";
import './search-box.css'
import { ChangeEventHandler } from "react";

type IsearchBoxProps = {
    className: string;
    placeHolder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}


   

const SearchBox = ({onChangeHandler, placeHolder, className}: IsearchBoxProps) => (
    <input 
    className ={`search-box ${className}`} 
    placeholder={placeHolder}
    type="search"
    onChange={onChangeHandler}/>
);


export default SearchBox;