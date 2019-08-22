import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const UsersList = props => {
  return (
    <div className={'usersList'}>
      <div className={'usersListItem'}>
        <div className={'usersListItem__textWrap'}>
          Name: Dmitriy <br />
          Surname: Gavrilov <br />
          Position: Owner
        </div>
        <div className={'usersListItem__removeBtnWrap'}>Button</div>
      </div>
    </div>
  );
};

export default UsersList;
