import styled from "styled-components";
export const StyledList = styled.li`
   width: 100%;
   padding: 0.75rem 0.5rem;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 0.9rem;
   border-radius: 3px;
   margin: 0.2rem;

   .list-span {
      font-size: 1.1rem;
      display: inline;
      color: black;
   }
`;

export const StyledModal = styled.div`
   position: fixed;
   z-index: 1;
   padding-top: 4rem;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;

   overflow: auto;
   background-color: rgb(0, 0, 0);
   background-color: rgba(0, 0, 0, 0.4);

   div {
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      width: 40%;
      border-radius: 5px;
   }

   @media (max-width: 550px) {
      padding-top: 0.5rem;

      div {
         width: 80%;
      }
   }

   span {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
   }

   span:hover,
   span:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
   }

   ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      list-style-type: none;
      padding-left: 0;
   }
`;
