import CustomButton from './custom-button.vue';
import Home from './home.vue';
import { mount } from '@vue/test-utils';

describe('home', () => {
    it('check button', () => {
        const wrapper = mount(Home);
        const customButton = wrapper.findComponent(CustomButton);
        expect(customButton.text()).toBe('Click me');
    });
});