/**
 * @author pmeijer / https://github.com/pmeijer
 */

// Libraries
import React, { Component } from 'react';

export default class TermsAndConditions extends Component {
    constructor(props) {
        super(props);
    }
    //
    // componentDidMount() {
    //     this.props.loginClient.getGmeConfig()
    //         .then((gmeConfig) => {
    //             this.setState({
    //                 allowGuests: gmeConfig.authentication.allowGuests,
    //                 allowUserRegistration: gmeConfig.authentication.allowUserRegistration
    //             });
    //         });
    // }

    render() {
        return <div className="register-box-body" style={{float: 'left', width: '360px'}}>
            <p className="login-box-msg">
                <b>MIC class registration</b>
            </p>
            <div className="terms-and-conditions-text">
                <p>
                This website is intended for all MIC-2017-fall students. All mini-project submissions will be done
                via this site. Please give all fields for the registration as they will be used for identification.
                </p>
                <p>
                Vanderbilt University disclaims all warranties with regard to this software, including all implied
                warranties of merchantability and fitness.  In no event shall Vanderbilt University be liable for any
                special, indirect or consequential damages or any damages whatsoever resulting from loss of use,
                data or profits, whether in an action of contract, negligence or other tortious action, arising out
                of or in connection with the use or performance of this software.
                </p>
            </div>
        </div>;
    }
}
