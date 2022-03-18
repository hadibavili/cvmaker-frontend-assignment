import { StyledWarning } from "./Styled";

interface IWarningProps {
   message: string;
}

export const Warning: React.FC<IWarningProps> = ({ message }) => {
   return <StyledWarning>{message}</StyledWarning>;
};
