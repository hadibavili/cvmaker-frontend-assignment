import { useEffect, useState } from "react";
import { StyledInput } from "./Styled";

interface IInputProps {
   placeholder: string;
   onChange: (value: string) => void;
}

export const Input: React.FC<IInputProps> = ({ placeholder, onChange }) => {
   const [value, setValue] = useState("");

   const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };

   useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
         onChange(value);
      }, 800);

      return () => clearTimeout(delayDebounceFn);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [value]);

   return (
      <StyledInput
         onChange={handleOnchange}
         value={value}
         placeholder={placeholder}
      />
   );
};
