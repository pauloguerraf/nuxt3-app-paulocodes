import { themes } from '@storybook/theming';
export const parameters = {
    darkMode: {
        // Override the default dark theme
        dark: { ...themes.dark, appBg: '#333333' },
        // Override the default light theme
        light: { ...themes.normal, appBg: 'white' }
    }
}