# Reusable Dropdown Component

A customizable and reusable dropdown component built with React. This component supports features like search, icons, and disabled options.

## Project URL

[https://reusable-drop.netlify.app/](https://reusable-drop.netlify.app/)

## Features

- Customizable options with labels and icons
- Searchable dropdown
- Disabled options
- Default selected option
- Directional dropdown (up or down)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reusable-dropdown.git
    ```
2. Navigate to the project directory:
   ```bash
   cd reusable-dropdown
    ```
3. Install the dependencies:
    ```bash
    npm install
     ```
4. Start the development server:
    ```bash
    npm start
     ```
5. Open the project in your browser:
    ```bash
    http://localhost:3000
     ```
## Usage

To use the dropdown component in your project, follow these steps:

1. Import the `Dropdown` component in your file:
    ```jsx
    import Dropdown from './components/Dropdown';
     ```
2. Add the `Dropdown` component to your JSX:
    ```jsx
    <Dropdown options={options} />
     ```

## Props

The `Dropdown` component accepts the following props:

- `options`: An array of objects containing the options to be displayed in the dropdown. Each object should have the following properties:
  - `label`: The label to be displayed for the option.
  - `value`: The value of the option.
  - `icon`: (Optional) The icon to be displayed for the option.
  - `disabled`: (Optional) A boolean value indicating whether the option is disabled.

- `selectedOption`: (Optional) The default selected option in the dropdown. This should be an object with the `label` and `value` properties.


- `direction`: (Optional) The direction of the dropdown. Can be set to `'up'` or `'down'`.

- `placeholder`: (Optional) The placeholder text to be displayed when no option is selected.

- `searchable`: (Optional) A boolean value indicating whether the dropdown should be searchable.

- `disabled`: (Optional) A boolean value indicating whether the dropdown is disabled.

- `onChange`: (Optional) A callback function that is called when an option is selected. The function receives the selected option as an argument.

## Example

Here is an example of how to use the `Dropdown` component with custom options:

```jsx
import Dropdown from './components/Dropdown';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3', icon: 'icon' },
  { label: 'Option 4', value: 'option4', disabled: true },
];

const selectedOption = { label: 'Option 2', value: 'option2' };

const MyComponent = () => {
  const handleSelect = (option) => {
    console.log('Selected option:', option);
  };

  return (
    <Dropdown
      options={options}
      selectedOption={selectedOption}
      direction="down"
      placeholder="Select an option"
      searchable
      disabled={false}
      onChange={handleSelect}
    />
  );
};
```