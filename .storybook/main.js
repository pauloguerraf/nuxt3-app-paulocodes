const UnoCss = require('unocss/vite').default
const presetUno = require('@unocss/preset-uno').default
const presetIcons = require('@unocss/preset-icons').default
const presetAttributify = require('@unocss/preset-attributify').default

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-dark-mode'
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "storybook-builder-vite"
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins ?? [];
    config.plugins.push(
      UnoCss({
        presets: [
          presetIcons({
            scale: 1.2
          }), 
          presetUno(),
          presetAttributify()
        ],
      })
    );
    return config;
  },
}