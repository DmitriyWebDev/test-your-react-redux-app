import './style.scss';
import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { stopEventPropagation } from '../../utils/utils';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    stopEventPropagation(e);

    const { disabled, onClick } = this.props;

    if (!disabled) onClick();
  }

  render() {
    const { id, className, disabled } = this.props;

    const classNames = cn('button', { button_disabled: disabled }, className);
    return (
      <button id={id} className={classNames} type={'button'} onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  id: '',
  className: '',
  onClick: () => ({}),
  disabled: false,
};
