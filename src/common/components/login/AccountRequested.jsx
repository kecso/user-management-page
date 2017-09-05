/* global window */

/**
 * @author pmeijer / https://github.com/pmeijer
 */

// Libraries
import React, { Component, PropTypes } from 'react';
import { RegisterForm as STYLE } from '../../../client/style';

export default class AccountRequested extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="register-box-body" style={STYLE.fieldBox}>
            <p className="login-box-msg">
                An account has been provided
            </p>
            <div className="account-requested-text">
                Your request has been processed and your account should be available as of now.
                Please go back to the main page and try to log in.
            </div>
        </div>;
    }
}

AccountRequested.propTypes = {
    basePath: PropTypes.string,
    loginClient: PropTypes.object
};

