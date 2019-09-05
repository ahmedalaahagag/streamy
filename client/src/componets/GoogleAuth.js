import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '767141226919-1bl4npm92t4r9bkcmutupvphkum0drb1.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn) {
            return (
                <button className='ui red google button' onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign out from google account
                    </button>
            );
        } else {
            return (
                <button className='ui red google button' onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Sign in with google
                    </button>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
};

const mapStateToProp = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProp, { signIn, signOut })(GoogleAuth);
