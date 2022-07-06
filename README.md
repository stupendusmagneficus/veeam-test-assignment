# Veeam test assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Please check my demo https://veeam-test-assignment.vercel.app/

## Scripts to run the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

In application code you can find some unnecessary npm packages, the reason is that i wanted to show you that i am able to use loots of different tools to develop.

As well, i want to share with you my initial state object which you can modify and test the application

```JSX
    [
        {
          type: 'number',
          value: 7,
          labelText: 'Count',
          id: 7,
        },
        {
          type: 'checkbox',
          checked: false,
          labelText: 'Is checked',
          id: 6,
        },
    
        {
          type: 'text',
          labelText: 'Caption 1',
          id: 3,
          placeholder: 'Author: Yahor Dunayeu',
        },
        {
          type: 'text',
          labelText: 'Caption 2',
          id: 4,
          placeholder: 'Veeam Software: Test assignment - React Developer',
        },
    
        {
          type: 'textarea',
          labelText: 'Description',
          id: 5,
          placeholder:
            'So! Welcome to my tiny application. Please surf it without any hesitation. I hope you gonna enjoy it :)',
        },
    
        [
          {
            type: 'button',
            buttonText: 'Almost ok!',
            appearance: 'ghost',
            id: 33,
          },
          {
            type: 'button',
            buttonText: 'Ok!',
            appearance: 'primary',
            id: 1,
          },
          {
            type: 'button',
            buttonText: 'Not ok!',
            appearance: 'ghost',
            id: 2,
          },
        ],
    ],
```
