import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Button from '../../../../common/components/Button';

export const UsersListItem = props => {
  const { deleteUser } = props;
  const { id, firstName, lastName, position } = props.userData;

  return (
    <div id={`user-${id}`} className={'usersListItem'}>
      <div className={'usersListItem__textWrap'}>
        first name: {firstName} <br />
        last name: {lastName} <br />
        Position: {position}
      </div>
      <div className={'usersListItem__removeBtnWrap'}>
        <Button onClick={deleteUser.bind(this, id)}>Remove user</Button>
      </div>
    </div>
  );
};

export default UsersListItem;

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired,
  deleteUser: PropTypes.func.isRequired,
};
