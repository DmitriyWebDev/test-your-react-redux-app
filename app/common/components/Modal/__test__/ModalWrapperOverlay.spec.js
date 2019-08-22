import React from 'react';
import { mount } from 'enzyme';
import ModalWrapperOverlay from '../ModalWrapperOverlay';

const modalWindowClassName = 'app-modal__window';
const modalWindowOverlayClassName = 'app-modal__window-overlay-wrapper';

describe('ModalWrapperOverlay', () => {
  it('renders correctly, matches the snapshot', () => {
    const output = mount(<ModalWrapperOverlay />);
    expect(output.html()).toMatchSnapshot();
  });

  /** Tests on logic */

  // Test props (test render with different props values)

  it('renders correct "modalId"', () => {
    const wrapper = mount(<ModalWrapperOverlay modalId={'id-1'} />);
    expect(wrapper.exists(`.${modalWindowClassName}#id-1`)).toBe(true);
  });

  it('renders correct "modalClassName"', () => {
    const wrapper = mount(<ModalWrapperOverlay modalClassName={'class-1'} />);
    expect(wrapper.exists(`.${modalWindowClassName}.class-1`)).toBe(true);
  });

  it('renders correct "overlayClassName"', () => {
    const wrapper = mount(<ModalWrapperOverlay overlayClassName={'overlay-class-1'} />);
    expect(wrapper.exists(`.${modalWindowOverlayClassName}.overlay-class-1`)).toBe(true);
  });

  it('renders correct child component', () => {
    const wrapper = mount(
      <ModalWrapperOverlay>
        <div id={'content'}>Some content</div>
      </ModalWrapperOverlay>,
    );
    expect(wrapper.exists('#content')).toEqual(true);
  });

  // Test events handling

  it('check the onRequestClose call', () => {
    const onRequestClose = jest.fn();
    const props = {
      onRequestClose,
    };
    const AppModalWrapperOverlayComponent = mount(<ModalWrapperOverlay {...props} />);

    AppModalWrapperOverlayComponent.simulate('click');
    expect(onRequestClose).toBeCalled();
  });

  it('check the onRequestClose call, if "shouldCloseOnOverlayClick" = false', () => {
    const onRequestClose = jest.fn();
    const props = {
      onRequestClose,
      shouldCloseOnOverlayClick: false,
    };
    const AppModalWrapperOverlayComponent = mount(<ModalWrapperOverlay {...props} />);

    AppModalWrapperOverlayComponent.simulate('click');
    expect(onRequestClose).not.toBeCalled();
  });

  // Test side effects

  it('disable page scroll when mount', () => {
    mount(<ModalWrapperOverlay />);
    expect(document.body.style.overflow === 'hidden').toBe(true);
  });

  it('enable page scroll when unmount', () => {
    const AppModalWrapperOverlayComponent = mount(<ModalWrapperOverlay />);
    AppModalWrapperOverlayComponent.unmount();
    expect(document.body.style.overflow === '').toBe(true);
  });
});
