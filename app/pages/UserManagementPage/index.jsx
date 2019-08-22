import React from 'react';
import './style.scss';

import cn from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from './redux-tools/actions';
import { UsersList } from './modules/UsersList';
import FormAddUser from './modules/FormAddUser';

export class UserManagementPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className={'userManagementPage'}>
        <div className={'userManagementPage__contentWrap'}>
          <div className={'userManagementPage__header'}>User management page</div>
          <div className={'userManagementPage__content'}>
            <div className={'userManagementPage__section'}>
              <div className={'userManagementPage__sectionContent'}>
                <UsersList />
              </div>
            </div>

            <div className={'userManagementPage__section'}>
              <div className={'userManagementPage__sectionContent'}>
                <FormAddUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  { getUsers },
)(UserManagementPage);
