import { H1, H3, Paragraph, Button } from "components/UI";
import { CountryWrapper } from "./Styled";

interface ICountryProps {
   name: string;
   emoji: string;
   continent: IContinent;
   code: string;
   onClick: (code: string) => void;
}

const Country: React.FC<ICountryProps> = ({
   name,
   emoji,
   continent,
   code,
   onClick,
}) => {
   const handleClick = () => {
      onClick(code);
   };

   return (
      <>
         <CountryWrapper>
            <H1>{emoji}</H1>
            <H3>{name}</H3>
            <Paragraph>Continent: <strong>{continent.name}</strong></Paragraph>
            <Button onClick={handleClick}>See Details</Button>
         </CountryWrapper>
      </>
   );
};

export default Country;
