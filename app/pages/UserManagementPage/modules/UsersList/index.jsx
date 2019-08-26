import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import UsersListItem from './UsersListItem';
import { userShape } from '../../../../common/constants';

export const UsersList = props => {
  const { users, deleteUser, disabled } = props;

  return (
    <div className={'usersList'}>
      <div className={'usersList__title'}>User list</div>

      {users.map(({ id, firstName, lastName, position }) => {
        return (
          <UsersListItem
            key={id}
            userData={{
              id,
              firstName,
              lastName,
              position,
            }}
            deleteUser={deleteUser}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.arrayOf(userShape),
  deleteUser: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

UsersList.defaultProps = {
  users: [],
  disabled: false,
};
