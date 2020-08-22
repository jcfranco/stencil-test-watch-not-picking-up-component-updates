import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  @Prop() test = 'test';

  render() {
    return <div>🙃</div>;
  }
}
