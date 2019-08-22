import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Button from '../../../../common/components/Button';

export const UsersList = props => {
  const { users } = props;

  return (
    <div className={'usersList'}>
      <div className={'usersList__title'}>User list</div>

      {users.map(({ id, name, surname, position }) => {
        return (
          <div className={'usersListItem'} key={id}>
            <div className={'usersListItem__textWrap'}>
              Name: {name} <br />
              Surname: {surname} <br />
              Position: {position}
            </div>
            <div className={'usersListItem__removeBtnWrap'}>
              <Button>Remove user</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.array,
};

UsersList.defaultProps = {
  users: [
    {
      id: '1',
      name: 'Name 1',
      surname: 'Surname',
      position: 'position',
    },
    {
      id: '2',
      name: 'Name 2',
      surname: 'Surname',
      position: 'position',
    },
    {
      id: '3',
      name: 'Name 3',
      surname: 'Surname',
      position: 'position',
    },
  ],
};
