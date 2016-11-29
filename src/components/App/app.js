import React from 'react';
import AppMenu from 'components/Menu/menu';
import { Link } from 'react-router'
import AuthService from '../../services/authentification';

export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            loggedIn: AuthService.loggedIn()
        }
    }

    updateAuth(loggedIn) {
        this.setState({
            loggedIn
        })
    }

    componentWillMount() {
        AuthService.onChange = this.updateAuth.bind(this);
        AuthService.login()
    }

    render(){
        return (
            <div>
                <AppMenu />
                {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
            </div>
        )
    }
}
