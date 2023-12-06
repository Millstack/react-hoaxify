import React from 'react';

export class UserSignupPage extends React.Component {

    // creating a state
    // also needed also callback function to handle the change in event
    state = {
        displayName: '',
        username: '',
        password: '',
        passwordRepeat: '',
    };

    // creating an onChange function for display name, when the state is changed
    // it will get called with onChange event, to hanle the changeed event
    // on browser, the typing wont work, as value is set empty, hence need to change it with event e
    onChangeDisplayName = (event) => {
        const value = event.target.value;
        this.setState({ displayName: value })
    }

    // even function for event handling for user name
    onChangeUserName = (e) => {
        const value = e.target.value;
        this.setState({ username: value })
    }

    // even function for event handling for password
    onChangePassword = (e) => {
        const value = e.target.value;
        this.setState({ password: value })
    }

    // even function for event handling for password repeat
    onChangePasswordRepeat = (e) => {
        const value = e.target.value;
        this.setState({ passwordRepeat: value })
    }

    // on click event function
    onClickSignup = () => {
        // to check if props are provided to prevent exception
        // also props present ? test passed, but there are multiple ways, below is one
        // if(this.props.actions){
        //     this.props.actions.postSignup()
        // }

        //alternatively, we can set default properties of component
        // at the bottom of the page
        this.props.actions.postSignup()
    }

    render () {
        return (
            <div>
                <div>
                    <h1>Sign Up</h1>
                </div>
                <div>
                    <input placeholder="Your display name" value={this.state.displayName} onChange={this.onChangeDisplayName}/>
                </div>
                <div>
                    <input placeholder="Your username" value={this.state.username} onChange={this.onChangeUserName} />
                </div>
                <div>
                    <input placeholder="Your password" type="password" value={this.state.password} onChange={this.onChangePassword}/>
                </div>
                <div>
                    <input placeholder="Repeat your password" type="password" value={this.state.passwordRepeat} onChange={this.onChangePasswordRepeat}/>
                </div>
                <div>
                    <button type="" onClick={this.onClickSignup}>Sign Up</button>
                </div>
            </div>
        )
    }
}

// React allows us to set default properties of components
// setting Json object in default props
// postSignup will be an ashynchronous function with API call
// this function will return a promise
UserSignupPage.defaultProps = {
    actions: {
        postSignup: () => new Promise((resolve, reject) => {resolve({})})
    }
}

export default UserSignupPage;