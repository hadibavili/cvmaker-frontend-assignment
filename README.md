
# 🌎 Countries

The app allows you to search for countries and view their continent, flag, and other details. By clicking on more details you can access more information about that country in more detail.

### Tech stack:
- React - React.portal - useMemo - React.memo
- TypeScript 
- Apollo => Fetching data from GraphQL API
- Styled-components 💅 => Custom Styling
- Jest/React-testing-library => Testing


## 📇 Project Structure

    ├── src                         # Source directory
        ├── components              # All components that used in project
            ├── UI                  # All UI components like buttons and etc
        ├── interfaces              # All TypeScript Interfaces and Types
        ├── pages                   # All pages that uses components
        ├── tests                   # Test utils
           
    └── README.md

    
## 📝 Principles And Conventions

- I put all my logic outside of the **JSX** in order to create more readable code.
- I followed the **KISS** principle and didn't add complex logics or variables names, etc.
- I used camelCase for prop names.
- I used PascalCase for my components.
- I used camelCase for any other codes.

## 🧪 Test
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


