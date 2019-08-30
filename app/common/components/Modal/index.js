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
  isOpen: PropTypes.bool, // открыто ли модальное окно
  id: PropTypes.string, //  id модального окна
  className: PropTypes.string, // css - класс модального окна
  overlayClassName: PropTypes.string, // css - класс оверлея модального окна
  onRequestClose: PropTypes.func, // функция, вызываемая по клику на оверлей
  shouldCloseOnOverlayClick: PropTypes.bool, // флаг, закрывать ли окно по клику на оверлей
  children: PropTypes.node, // контент модального окна
};

Modal.defaultProps = {
  isOpen: false,
  id: '',
  className: '',
  overlayClassName: '',
  onRequestClose: () => {},
  shouldCloseOnOverlayClick: true,
};
