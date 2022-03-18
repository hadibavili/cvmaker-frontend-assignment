import { Label, Input, Button } from "components/UI";
import { useState } from "react";
import React from "react";
import { InputBox } from "./Styled";

interface ISearchProps {
   onSearch: (name: string) => void;
}

const Search: React.FC<ISearchProps> = ({ onSearch }) => {
   const [term, setTerm] = useState("");

   const handleClick = () => {
      onSearch(term);
   };

   const handleChange = (name: string) => {
      setTerm(name);
      onSearch(name);
   };

   return (
      <InputBox>
         <Label label="keyword" />
         <Input onChange={handleChange} placeholder="Example: Ne" />
         <Button onClick={handleClick}>Search</Button>
      </InputBox>
   );
};

export default Search;
