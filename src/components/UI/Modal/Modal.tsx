import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import { Warning, Loader, H1 } from "components/UI";
import { StyledList, StyledModal } from "./Styled";

const COUNTRY_BY_CODE = gql`
   query Country($code: ID!) {
      country(code: $code) {
         name
         emoji
         code
         native
         phone
         capital
         currency
         languages {
            name
         }
         states {
            name
         }
         continent {
            name
         }
      }
   }
`;

interface IModalProps {
   onClose: () => void;
   code: string;
}
interface IData {
   country: ICountry;
}

const modalRoot = document.getElementById("modal");

export const Modal: React.FC<IModalProps> = ({ onClose, code }) => {
   const { loading, error, data } = useQuery<IData>(COUNTRY_BY_CODE, {
      variables: {
         code,
      },
   });

   return ReactDOM.createPortal(
      <StyledModal>
         <div>
            <span onClick={() => onClose()}>&times;</span>
            {loading && <Loader />}
            {error && <Warning message={error.message} />}
            <H1>{data?.country.emoji}</H1>
            <ul>
               <StyledList>
                  Name: <span className="list-span">{data?.country.name}</span>
               </StyledList>
               <StyledList>
                  Native:
                  <span className="list-span">{data?.country.native}</span>
               </StyledList>

               <StyledList>
                  Capital:
                  <span className="list-span">{data?.country.capital}</span>
               </StyledList>
               <StyledList>
                  Continent:
                  <span className="list-span">
                     {data?.country.continent.name}
                  </span>
               </StyledList>
               <StyledList>
                  Currency:
                  <span className="list-span">{data?.country.currency}</span>
               </StyledList>
               <StyledList>
                  Phone:
                  <span className="list-span">{data?.country.phone}</span>
               </StyledList>
               <StyledList>
                  Code:
                  <span className="list-span">{data?.country.code}</span>
               </StyledList>
               <StyledList>
                  Language:
                  <span className="list-span">
                     {data?.country.languages.name}
                  </span>
               </StyledList>
            </ul>
         </div>
      </StyledModal>,
      modalRoot!
   );
};
