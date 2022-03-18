interface ICountry {
   name: string;
   emoji: string;
   code: string;
   native: string;
   phone: string;
   capital: string;
   currency: string;
   languages: ILanguage;
   states: IState[];
   continent: IContinent;
}
interface IContinent {
   name: string;
}
interface ILanguage {
   name: string;
}
interface IState {
   name: string;
}
