import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../common/components/Input';
import Button from '../../../../common/components/Button';

export class FormAddUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Dmitriy',
      lastName: 'Gavrilov',
      position: 'Admin',
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
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

  render() {
    const { firstName, lastName, position } = this.state;

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

          <Button>Add user</Button>
        </div>
      </div>
    );
  }
}

export default FormAddUser;
