import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Button from '../../../../common/components/Button';
import Modal from '../../../../common/components/Modal';

export class UsersListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.handleModalToggle = this.handleModalToggle.bind(this);
  }

  handleModalToggle() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  render() {
    const { modalIsOpen } = this.state;
    const { deleteUser, disabled } = this.props;
    const { id, firstName, lastName, position } = this.props.userData;

    return (
      <Fragment>
        <div id={`user-${id}`} className={'usersListItem'} onClick={this.handleModalToggle}>
          <div className={'usersListItem__textWrap'}>
            {firstName} {lastName}
          </div>
          <div className={'usersListItem__removeBtnWrap'}>
            <Button onClick={deleteUser.bind(this, id)} disabled={disabled}>
              Remove user
            </Button>
          </div>
        </div>

        <Modal isOpen={modalIsOpen} onRequestClose={this.handleModalToggle}>
          <div className={'usersListItem__modalBlock'}>
            <h1 className={'usersListItem__modalBlockHeader'}>User detail information:</h1>
            <div className={'usersListItem__modalBlockText'}>
              First name: {firstName} <br />
              Last name: {lastName} <br />
              Position: {position}
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default UsersListItem;

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired,
  deleteUser: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

UsersListItem.defaultProps = {
  users: [],
  disabled: false,
};
