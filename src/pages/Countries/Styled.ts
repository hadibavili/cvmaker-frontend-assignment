import styled from "styled-components";

export const CountriesWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 65%;
   justify-content: space-between;
   gap: 1rem;
   margin: 2rem auto;

   @media (max-width: 450px) {
      width: 100%;
   }
`;
