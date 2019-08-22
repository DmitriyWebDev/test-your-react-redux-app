import React from 'react';
import { convertStringToBarcodeBase64Url } from '../../common/utils/utils';

import cn from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers, printUserBarcode } from './redux-tools/actions';

export class UserManagementPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <div onClick={printUserBarcode.bind(this, 'user-barcode-img99')}>UserManagementPage</div>;
  }
}

export default connect(
  state => ({}),
  { getUsers },
)(UserManagementPage);
