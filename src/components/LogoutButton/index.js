import React from 'react';
import { connect } from 'react-redux';

import { logoutActions } from '../../redux/actions';

const LogoutButton = ({ logout }) => <button onClick={logout} type='submit'>Logout</button>;

const mapDispatchToProps = {
  logout: logoutActions.processing
}

export default connect(null, mapDispatchToProps)(LogoutButton);