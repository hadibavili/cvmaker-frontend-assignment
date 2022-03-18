import { useEffect, useMemo, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Warning, Loader, Modal } from "components/UI";
import Search from "components/Country/Search";
import Country from "components/Country/Country";
import { CountriesWrapper } from "./Styled";

const COUNTRIES = gql`
   query GetCountries {
      countries {
         name
         emoji
         code
         continent {
            name
         }
      }
   }
`;

interface IData {
   countries: Partial<ICountry>[];
}

const Countries = () => {
   const [filtered, setFiltered] = useState<Partial<ICountry>[]>([]);
   const [showModal, setShowModal] = useState<boolean>(false);
   const [code, setCode] = useState<string>("");
   const { loading, error, data } = useQuery<IData>(COUNTRIES);

   useEffect(() => {
      if (!data) return;
      setFiltered([...data.countries]);
   }, [data]);

   const handleSeeDetails = (code: string) => {
      setCode(code);
      setShowModal(true);
   };

   const handleCloseSeeDetails = () => {
      setShowModal(false);
   };

   const handleSearch = async (name: string) => {
      if (!data) return;
      if (name === "") setFiltered([...data.countries]);

      const newData = data.countries.filter((data: Partial<ICountry>) =>
         data.name?.toLowerCase().includes(name)
      );

      setFiltered([...newData]);
   };

   const countries = useMemo(
      () =>
         filtered.map((country: Partial<ICountry>) => (
            <Country
               key={country.code}
               onClick={handleSeeDetails}
               name={country.name!}
               emoji={country.emoji!}
               continent={country.continent!}
               code={country.code!}
            />
         )),
      [filtered]
   );

   if (error) return <Warning message={error.message} />;

   return (
      <>
         <Search onSearch={handleSearch} />
         {loading && <Loader />}
         <CountriesWrapper>{countries}</CountriesWrapper>
         {showModal && <Modal code={code} onClose={handleCloseSeeDetails} />}
      </>
   );
};

export default Countries;
