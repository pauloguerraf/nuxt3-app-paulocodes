import VButton from '../components/v-button.vue'

export default {
  title: 'VButton',
  component: VButton,
}

const Template = (args) => ({
  components: { VButton },
  setup() {
    return {
      args
    }
  },
  template : '<v-button v-bind="args" />'
});

export const Primary = Template.bind({})
Primary.args = {
  label: 'Test'
}