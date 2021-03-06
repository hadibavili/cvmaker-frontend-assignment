
# ๐ Countries

The app allows you to search for countries and view their continent, flag, and other details. By clicking on more details you can access more information about that country in more detail.

### Tech stack:
- React - React.portal - useMemo - React.memo
- TypeScript 
- Apollo => Fetching data from GraphQL API
- Styled-components ๐ => Custom Styling
- Jest/React-testing-library => Testing


## ๐ Project Structure

    โโโ src                         # Source directory
        โโโ components              # All components that used in project
            โโโ UI                  # All UI components like buttons and etc
        โโโ interfaces              # All TypeScript Interfaces and Types
        โโโ pages                   # All pages that uses components
        โโโ tests                   # Test utils
           
    โโโ README.md

    
## ๐ Principles And Conventions

- I put all my logic outside of the **JSX** in order to create more readable code.
- I followed the **KISS** principle and didn't add complex logics or variables names, etc.
- I used camelCase for prop names.
- I used PascalCase for my components.
- I used camelCase for any other codes.

## ๐งช Test
The App has 11 tests including unit tests and snapshot testing, and the test files are located in close proximity to each component

## Runing Locally

Run the project locally using `npm` or `yarn`

Using NPM:

```bash
  npm install && npm start
```

Using Yarn:

```bash
  yarn && yarn start
```

## Running Tests

To run tests, run the following command

Using NPM:

```bash
  npm run test
```

Using Yarn:

```bash
  yarn test
```


