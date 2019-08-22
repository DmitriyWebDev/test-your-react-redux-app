import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import PropTypes from 'prop-types';
import ModalWrapperOverlay from './ModalWrapperOverlay';

class Modal extends React.Component {
  render() {
    if (!this.props.isOpen) return null;

    const { id, className, children, onRequestClose, overlayClassName, shouldCloseOnOverlayClick } = this.props;

    return ReactDOM.createPortal(
      <div className={'app-modal'}>
        <ModalWrapperOverlay
          modalId={id}
          modalClassName={className}
          overlayClassName={overlayClassName}
          onRequestClose={onRequestClose}
          shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        >
          {children}
        </ModalWrapperOverlay>
      </div>,
      document.body,
    );
  }
}

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
  onRequestClose: PropTypes.func,
  shouldCloseOnOverlayClick: PropTypes.bool,
  children: PropTypes.node,
};

Modal.defaultProps = {
  isOpen: false,
  id: '',
  className: '',
  overlayClassName: '',
  onRequestClose: () => {},
  shouldCloseOnOverlayClick: true,
};
