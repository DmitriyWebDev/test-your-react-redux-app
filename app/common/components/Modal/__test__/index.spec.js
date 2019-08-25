import React from 'react';
import { mount } from 'enzyme';
import Modal from '../index';

describe('Modal', () => {
  it('renders correctly, matches the snapshot', () => {
    const ModalComponent = mount(
      <Modal
        className="class-1"
        id="id-1"
        isOpen={true}
        onRequestClose={() => ({})}
        overlayClassName="overlay-class-1"
        shouldCloseOnOverlayClick={true}
      >
        Modal window content
      </Modal>,
    );
    expect(ModalComponent).toMatchSnapshot();
  });
});
