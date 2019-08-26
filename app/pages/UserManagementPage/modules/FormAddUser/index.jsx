import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../common/components/Input';
import Button from '../../../../common/components/Button';
import './style.scss';
import { isFormDataValid } from '../../utils/utils';

export const defaultState = {
  firstName: '',
  lastName: '',
  position: '',
};

export class FormAddUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...defaultState,
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(firstName) {
    this.setState({ firstName });
  }

  handleLastNameChange(lastName) {
    this.setState({ lastName });
  }

  handlePositionChange(position) {
    this.setState({ position });
  }

  handleSubmit() {
    const { addUser, disabled } = this.props;

    if (!disabled && isFormDataValid(this.state)) {
      addUser(this.state);

      this.setState(defaultState);
    }
  }

  render() {
    const { disabled } = this.props;
    const { firstName, lastName, position } = this.state;
    const isDataValid = isFormDataValid(this.state);

    return (
      <div className={'form'}>
        <div className={'form__title'}>Users form</div>

        <div className={'form__content'}>
          <div className={'form__field'}>
            <div className={'form__fieldLabel'}>Name</div>
            <div className={'form__fieldValue'}>
              <Input name={'firstName'} value={firstName} onChange={this.handleFirstNameChange} />
            </div>
          </div>

          <div className={'form__field'}>
            <div className={'form__fieldLabel'}>Surname</div>
            <div className={'form__fieldValue'}>
              <Input name={'lastName'} value={lastName} onChange={this.handleLastNameChange} />
            </div>
          </div>

          <div className={'form__field'}>
            <div className={'form__fieldLabel'}>Position</div>
            <div className={'form__fieldValue'}>
              <Input name={'position'} value={position} onChange={this.handlePositionChange} />
            </div>
          </div>

          <Button disabled={!isDataValid || disabled} onClick={this.handleSubmit}>
            Add user
          </Button>
        </div>
      </div>
    );
  }
}

export default FormAddUser;

FormAddUser.propTypes = {
  addUser: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

FormAddUser.defaultProps = {
  disabled: false,
};
