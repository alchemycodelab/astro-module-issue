import Example from './Example';

export default function registerComponents(Builder) {

  function register(Component) {
    Builder.registerComponent(Component, Component.config || {});
  }
  
  register(Example);
}
