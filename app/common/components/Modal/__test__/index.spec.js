import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../index';

describe('Modal', () => {
  it('renders correctly, matches the snapshot', () => {
    const ModalComponent = shallow(
      <Modal
        className={'class-1'}
        id={'id-1'}
        isOpen={true}
        onRequestClose={() => ({})}
        overlayClassName={'overlay-class-1'}
        shouldCloseOnOverlayClick={true}
      >
        Modal window content
      </Modal>,
    );
    expect(ModalComponent).toMatchSnapshot();
  });
});
