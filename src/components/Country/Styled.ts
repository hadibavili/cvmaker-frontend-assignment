import styled from "styled-components";

export const CountryWrapper = styled.div`
   display: inline-block;
   background-color: #eee;
   padding: 0rem 1rem;
   border-radius: 0.3rem;
   width: 28%;
   button {
      width: 100%;
      margin: 1rem auto;
      display: block;
   }
   h1 {
      margin-bottom: 0;
   }
   h3 {
      margin: 0;
   }

   @media (max-width: 550px) {
      width: 100%;
      button {
         width: 100%;
      }
   }

   @media (max-width: 767px) {
      width: 100%;
      button {
         width: 100%;
      }
   }

   @media (max-width: 1224px) and (min-width: 767px) {
      width: 42%;
      button {
         width: 100%;
      }
   }
`;

export const InputBox = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 65%;
   margin: 1rem auto;
   input {
      white-space: wrap;
      border-radius: 3px;
      background: #e9e9e9;
      white-space: nowrap;
      padding: 0.35em 0.75em;
      border: none;
      font-size: 1em;
      text-decoration: none;
      line-height: normal;
      max-height: 3em;
      flex: 2 0 250px;
   }

   input:focus {
      background-color: #eee;
      outline: none;
   }
   label:first-child {
      margin: 0.5rem 0;
      flex: 0 1 100%;
   }

   @media (max-width: 480px) {
      width: 100% !important;
      button {
         width: 100%;
         margin-top: 0.5rem;
      }
      input {
         padding: 0.7em 0.75em;
      }
   }

   @media (max-width: 767px) {
      width: 65%;
      button {
         width: 100%;
         margin-top: 0.5rem;
      }
      input {
         padding: 0.7em 0.75em;
      }
   }
`;
