import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('should have test === "test"', async () => {
    const page = await newE2EPage({
      html: '<my-component></my-component>',
    });
    const component = await page.find('my-component');

    // Repro steps
    // 1. run npm run test.watch my-component.e2e
    // 2. wait for initial test run
    // 3. keeping test watcher on, change my-component#test to something else and save
    // 4. test will run again and pass (it should fail)
    expect(await component.getProperty('test')).toBe('test');
  });
});
