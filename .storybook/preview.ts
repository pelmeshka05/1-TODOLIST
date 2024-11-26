import type { Preview } from "@storybook/react";
// import { DecoratorFn } from '@storybook/react';


// import { Provider } from 'react-redux';

// export const decorators: DecoratorFn[] = [
//   (Story) => (
//     <Provider>
//       <Story />
//     </Provider>
//   ),
// ];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
