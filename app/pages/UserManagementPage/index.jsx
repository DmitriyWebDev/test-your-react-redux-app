import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userShape } from '../../common/constants';
import { getUsersList, addUser, deleteUser, resetPageData } from './redux-tools/actions';
import UsersList from './modules/UsersList';
import FormAddUser from './modules/FormAddUser';
import {
  userManagementUsersListSelector,
  userManagementPageIsLoadingSelector,
  userManagementUserAdditionIsLoadedSelector,
  userManagementUserDeletingIsLoadedSelector,
} from './redux-tools/selectors';

export class UserManagementPage extends React.Component {
  componentDidMount() {
    this.props.getUsersList();
  }

  componentDidUpdate(prevProps) {
    const { getUsersList, userAdditionIsLoaded, userDeletingIsLoaded } = this.props;

    // When new user added, request updated users list
    if (userAdditionIsLoaded !== prevProps.userAdditionIsLoaded && userAdditionIsLoaded) {
      console.log('user Added');
      getUsersList();
    }

    // When any user deleted, request updated users list
    if (userDeletingIsLoaded !== prevProps.userDeletingIsLoaded && userDeletingIsLoaded) {
      console.log('user Deleted');
      getUsersList();
    }
  }

  componentWillUnmount() {
    this.props.resetPageData();
  }

  render() {
    const { pageIsLoading, usersList, addUser, deleteUser } = this.props;

    return (
      <div className={'userManagementPage'}>
        <div className={'userManagementPage__contentWrap'}>
          <div className={'userManagementPage__header'}>
            User management page
            {pageIsLoading && <div className={'userManagementPage__headerLoader'}>Loading...</div>}
          </div>
          <div className={'userManagementPage__content'}>
            <div className={'userManagementPage__section'}>
              <div className={'userManagementPage__sectionContent'}>
                <UsersList users={usersList} deleteUser={deleteUser} />
              </div>
            </div>

            <div className={'userManagementPage__section'}>
              <div className={'userManagementPage__sectionContent'}>
                <FormAddUser addUser={addUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    usersList: userManagementUsersListSelector(state),
    pageIsLoading: userManagementPageIsLoadingSelector(state),
    userAdditionIsLoaded: userManagementUserAdditionIsLoadedSelector(state),
    userDeletingIsLoaded: userManagementUserDeletingIsLoadedSelector(state),
  }),
  {
    getUsersList,
    addUser,
    deleteUser,
    resetPageData,
  },
)(UserManagementPage);

UserManagementPage.propTypes = {
  usersList: PropTypes.arrayOf(userShape).isRequired,
  pageIsLoading: PropTypes.bool.isRequired,
  userAdditionIsLoaded: PropTypes.bool.isRequired,
  userDeletingIsLoaded: PropTypes.bool.isRequired,
  getUsersList: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  resetPageData: PropTypes.func.isRequired,
};
