/**
 * @author pmeijer / https://github.com/pmeijer
 * @author patrickkerrypei / https://github.com/patrickkerrypei
 */

// Libraries
import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';
// Self-defined
import LoginField from '../content/widgets/LoginField';
import {
    verifyEmail, verifyPassword, verifyUserOrOrganizationId, verifyUserName, verifyMajor
}
    from '../../../client/utils/loginUtils';
// Style
import {RegisterForm as STYLE} from '../../../client/style';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creating: false,
            agreeToTerms: false,
            confirmPassword: '',
            email: '',
            // State so a different message for duplicate userId can be shown
            invalidMessage: {
                confirmPassword: "Passwords must match",
                password: "Password must be at least 3 characters long and must not be " +
                "a poor password such as 'password'",
                email: "Invalid email",
                userId: "Username must only contain letters, numbers, and the underscore" +
                " and must be at least 3 characters long",
                userName: "Provide a first and a surname separated by space",
                major: "Provide your major field"
            },
            userId: '',
            userName: '',
            major: '',
            validCredentials: {
                agreeToTerms: true,
                confirmPassword: true,
                password: true,
                email: true,
                userId: true,
                userName: true,
                major: true
            }
        };

        // Event handlers
        this.checkAllFields = this.checkAllFields.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.checkConfirmPassword = this.checkConfirmPassword.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.checkUserId = this.checkUserId.bind(this);
        this.checkUserName = this.checkUserName.bind(this);
        this.checkMajor = this.checkMajor.bind(this);

        this.onAgreeToTermsChange = this.onAgreeToTermsChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
        this.atFailedNewUser = this.atFailedNewUser.bind(this);
        this.onUserIdChange = this.onUserIdChange.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onMajorChange = this.onMajorChange.bind(this);
    }

    componentDidMount() {

    }

    // Check fields
    checkAllFields() {
        this.setState({
            validCredentials: {
                agreeToTerms: this.state.agreeToTerms,
                confirmPassword: this.state.password === this.state.confirmPassword,
                email: verifyEmail(this.state.email),
                userId: verifyUserOrOrganizationId(this.state.userId),
                password: verifyPassword(this.state.password),
                userName: verifyUserName(this.state.userName),
                major: verifyMajor(this.state.major)
            }
        });
    }

    checkUserId() {
        this.setState({
            validCredentials: {
                agreeToTerms: this.state.validCredentials.agreeToTerms,
                email: this.state.validCredentials.email,
                userId: verifyUserOrOrganizationId(this.state.userId),

                confirmPassword: this.state.validCredentials.confirmPassword,
                password: this.state.validCredentials.password,

                userName: this.state.validCredentials.userName,
                major: this.state.validCredentials.major
            }
        });
    }

    checkPassword() {
        this.setState({
            validCredentials: {
                agreeToTerms: this.state.validCredentials.agreeToTerms,
                email: this.state.validCredentials.email,
                userId: this.state.validCredentials.userId,

                confirmPassword: this.state.validCredentials.confirmPassword,
                password: verifyPassword(this.state.password),

                userName: this.state.validCredentials.userName,
                major: this.state.validCredentials.major
            }
        });
    }

    checkConfirmPassword() {
        this.setState({
            validCredentials: {
                agreeToTerms: this.state.validCredentials.agreeToTerms,
                email: this.state.validCredentials.email,
                userId: this.state.validCredentials.userId,

                confirmPassword: this.state.password === this.state.confirmPassword,
                password: this.state.validCredentials.password,

                userName: this.state.validCredentials.userName,
                major: this.state.validCredentials.major
            }
        });
    }

    checkUserName() {
        this.setState({
            validCredentials: {
                agreeToTerms: this.state.validCredentials.agreeToTerms,
                email: this.state.validCredentials.email,
                userId: this.state.validCredentials.userId,

                confirmPassword: this.state.validCredentials.confirmPassword,
                password: this.state.validCredentials.password,

                userName: verifyUserName(this.state.userName),
                major: this.state.validCredentials.major
            }
        });
    }

    checkMajor() {
        this.setState({
            validCredentials: {
                agreeToTerms: this.state.validCredentials.agreeToTerms,
                email: this.state.validCredentials.email,
                userId: this.state.validCredentials.userId,

                confirmPassword: this.state.validCredentials.confirmPassword,
                password: this.state.validCredentials.password,

                userName: this.state.validCredentials.userName,
                major: this.state.validCredentials.major
            }
        });
    }

    checkEmail() {
        this.setState({
            validCredentials: {
                agreeToTerms: this.state.validCredentials.agreeToTerms,
                email: verifyEmail(this.state.email),
                userId: this.state.validCredentials.userId,

                confirmPassword: this.state.validCredentials.confirmPassword,
                password: this.state.validCredentials.password,

                userName: this.state.validCredentials.userName,
                major: this.state.validCredentials.major
            }
        });
    }

    onAgreeToTermsChange() {
        var prev = this.state.agreeToTerms;
        this.setState({
            agreeToTerms: !prev,
            validCredentials: {
                agreeToTerms: !prev,
                email: this.state.validCredentials.email,
                userId: this.state.validCredentials.userId,

                confirmPassword: this.state.validCredentials.confirmPassword,
                password: this.state.validCredentials.password,

                userName: this.state.validCredentials.userName,
                major: this.state.validCredentials.major
            }
        });
    }

    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    onConfirmPasswordChange(event) {
        this.setState({
            confirmPassword: event.target.value
        });
    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    onUserIdChange(event) {
        this.setState({
            userId: event.target.value
        });
    }

    onUserNameChange(event) {
        this.setState({
            userName: event.target.value
        });
    }

    onMajorChange(event) {
        this.setState({
            major: event.target.value
        });
    }

    onRegister() {
        let allValid = true;

        this.checkAllFields();

        Object.keys(this.state.validCredentials).forEach(key => {
            if (!this.state.validCredentials[key]) {
                allValid = false;
            }
        });

        if (allValid && this.state.agreeToTerms) {
            this.setState({
                creating: true
            });

            this.props.onNewUser(this.state.userId, this.state.password, this.state.email, {
                userName: this.state.userName,
                major: this.state.major
            })
                .then((status) => {
                    if (typeof status === 'number') {
                        this.atFailedNewUser(status);
                    }
                });

        } else {
            // Reset fields
            this.setState({
                agreeToTerms: false,
                password: '',
                confirmPassword: '',
                email: this.state.validCredentials.email ? this.state.email : '',
                userId: this.state.validCredentials.userId ? this.state.userId : '',
                userName: this.state.validCredentials.userName ? this.state.userName : '',
                major: this.state.validCredentials.major ? this.state.major : ''
            });
        }
    }

    atFailedNewUser(status) {
        this.setState({
            creating: false
        });

        if (status === 400) {
            // Immutability add-ons aren't worth installing for this one case
            this.setState({
                invalidMessage: {
                    email: "Email and/or user ID already registered",
                    userId: "Email and/or user ID already registered"
                },
                validCredentials: {
                    email: false,
                    userId: false,
                    agreeToTerms: this.state.validCredentials.agreeToTerms,
                    userName: this.state.validCredentials.userName,
                    major: this.state.validCredentials.major,
                    confirmPassword: this.state.validCredentials.confirmPassword,
                    password: this.state.validCredentials.password
                }
            });
        } else {
            console.error(status);
        }
    }

    render() {

        let validAndNotEmpty = Object.keys(this.state.validCredentials).reduce(
            (previousValue, currentValue /* , currentIndex, array */) => {
                return previousValue && this.state.validCredentials[currentValue] && this.state[currentValue] !== '';
            }, true),
            titleMessage = this.props.allowUserCreation ? this.props.title : 'User Creation Not Permitted';

        return <div className="register-box-body" style={STYLE.fieldBox}>
            {titleMessage ?
                <p className="login-box-msg">{titleMessage}</p> : null}

            <form>

                {/* userName/Id */}
                <LoginField autoFocus={true}
                            hint="Name"
                            iconClass="glyphicon glyphicon-user"
                            disabled={!this.props.allowUserCreation}
                            invalidMessage={this.state.invalidMessage.userName}
                            onBlur={this.checkUserName}
                            onInputChange={this.onUserNameChange}
                            valid={this.state.validCredentials.userName}
                            value={this.state.userName}/>

                <LoginField hint="Major field"
                            iconClass="glyphicon glyphicon-bookmark"
                            disabled={!this.props.allowUserCreation}
                            invalidMessage={this.state.invalidMessage.major}
                            onBlur={this.checkMajor}
                            onInputChange={this.onMajorChange}
                            valid={this.state.validCredentials.major}
                            value={this.state.major}/>

                <LoginField autoFocus={true}
                            hint="User ID"
                            iconClass="glyphicon glyphicon-certificate"
                            disabled={!this.props.allowUserCreation}
                            invalidMessage={this.state.invalidMessage.userId}
                            onBlur={this.checkUserId}
                            onInputChange={this.onUserIdChange}
                            valid={this.state.validCredentials.userId}
                            value={this.state.userId}/>

                {/* password */}
                <LoginField hint="Password"
                            iconClass="glyphicon glyphicon-lock"
                            disabled={!this.props.allowUserCreation}
                            invalidMessage={this.state.invalidMessage.password}
                            onBlur={this.checkPassword}
                            onInputChange={this.onPasswordChange}
                            textType="password"
                            valid={this.state.validCredentials.password}
                            value={this.state.password}/>

                {/* confirm password */}
                <LoginField hint="Confirm password"
                            iconClass="glyphicon glyphicon-log-in"
                            disabled={!this.props.allowUserCreation}
                            invalidMessage={this.state.invalidMessage.confirmPassword}
                            onBlur={this.checkConfirmPassword}
                            onEnter={this.onRegister}
                            onInputChange={this.onConfirmPasswordChange}
                            textType="password"
                            valid={this.state.validCredentials.confirmPassword}
                            value={this.state.confirmPassword}/>

                {/* email */}
                <LoginField hint="Email"
                            iconClass="glyphicon glyphicon-envelope"
                            disabled={!this.props.allowUserCreation}
                            invalidMessage={this.state.invalidMessage.email}
                            onBlur={this.checkEmail}
                            onInputChange={this.onEmailChange}
                            valid={this.state.validCredentials.email}
                            value={this.state.email}/>

                {/* Remember Check / Sign in attempt */}
                <div className="row">
                    {!this.state.validCredentials.agreeToTerms ? // eslint-disable-line no-negated-condition
                        <div className="row">
                            <div className="col-sm-12" style={{textAlign: "left"}}>
                                <span style={{color: "red", textAlign: "left"}}>Please confirm that you've read the disclaimer</span>
                            </div>
                        </div> : null}

                    <div className="col-sm-8" style={STYLE.linkToLogin.column}>

                        <input type="checkbox" checked={this.state.agreeToTerms} onChange={this.onAgreeToTermsChange}/>
                        &nbsp; I have read the disclaimer
                        <br/>
                        <br/>
                        <Link to={this.props.backLinkData.path}>
                            {this.props.backLinkData.title}
                        </Link>

                    </div>

                    <div className="col-sm-4">
                        {this.props.allowUserCreation && this.state.creating === false ?
                            <Button bsStyle="primary"
                                    disabled={!validAndNotEmpty}
                                    onClick={this.onRegister}
                                    style={STYLE.registerButton}>
                                Request Account
                            </Button> : null}
                    </div>

                </div>

            </form>

        </div>;
    }
}

RegisterForm.propTypes = {
    allowUserCreation: PropTypes.string,
    title: PropTypes.string,
    backLinkData: PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        path: React.PropTypes.string.isRequired
    }),
    onNewUser: PropTypes.func.isRequired
};
