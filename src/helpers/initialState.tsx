export const initialState: string = JSON.stringify(
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
  undefined,
  2,
);
