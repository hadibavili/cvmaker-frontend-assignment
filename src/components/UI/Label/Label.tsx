import { StyledLabel } from "./Styled";

interface ILabelProps {
   label: string;
}

export const Label: React.FC<ILabelProps> = ({ label }) => {
   return <StyledLabel>{label}</StyledLabel>;
};
