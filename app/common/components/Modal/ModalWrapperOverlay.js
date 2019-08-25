import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class ModalWrapperOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.modalContentRef = React.createRef();
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
  }

  handleOverlayClick(e) {
    const { shouldCloseOnOverlayClick, onRequestClose } = this.props;

    if (!shouldCloseOnOverlayClick) return null;

    const { target } = e;
    const modalContent = this.modalContentRef.current;
    if (target !== modalContent && target.contains(modalContent)) {
      onRequestClose();
    }
  }

  render() {
    const { modalId, modalClassName, overlayClassName, children } = this.props;

    return (
      <div className={cn('app-modal__window-overlay-wrapper', overlayClassName)} onClick={this.handleOverlayClick}>
        <div id={modalId} className={cn('app-modal__window', modalClassName)} ref={this.modalContentRef}>
          {children}
        </div>
      </div>
    );
  }
}

export default ModalWrapperOverlay;

ModalWrapperOverlay.propTypes = {
  modalId: PropTypes.string,
  modalClassName: PropTypes.string,
  overlayClassName: PropTypes.string,
  onRequestClose: PropTypes.func,
  shouldCloseOnOverlayClick: PropTypes.bool,
  children: PropTypes.node,
};

ModalWrapperOverlay.defaultProps = {
  modalId: '',
  modalClassName: '',
  overlayClassName: '',
  onRequestClose: () => {},
  shouldCloseOnOverlayClick: true,
  children: <span>Modal window default content</span>,
};
