import './style.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = event.target.value;

    this.props.onChange(value);
  }

  render() {
    const { id, type, name, className, value, placeholder } = this.props;

    const classNames = cn('appInput', className);
    return (
      <input
        id={id}
        type={type}
        name={name}
        className={classNames}
        onChange={this.onChange}
        value={value}
        placeholder={placeholder}
      />
    );
  }
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  id: '',
  type: 'text',
  name: '',
  className: '',
  onChange: () => ({}),
  value: '',
  placeholder: '',
};
