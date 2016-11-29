import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router'
import AuthService from '../../services/authentification';

export default class AppMenu extends React.Component {
  state = {};

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
  };

  render() {
    const {activeItem} = this.state;

    let logMenu = null;
    if (!AuthService.loggedIn()) {
      logMenu = <Menu.Item
        name='login'
        as={Link}
        to="login"
        active={activeItem === 'login'}
        onClick={this.handleItemClick}
      />
    } else {
      logMenu = <Menu.Item
        name='logout'
        as={Link}
        to="logout"
        active={activeItem === 'logout'}
        onClick={this.handleItemClick}
      />
    }
    return (
      <Menu>
        <Menu.Item
          name='home'
          as={Link}
          to="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='profile'
          as={Link}
          to="profile"
          active={activeItem === 'profil'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='thumbnail'
          as={Link}
          to="thumbnail"
          active={activeItem === 'thumbnail'}
          onClick={this.handleItemClick}
        />
        {logMenu}
      </Menu>
    )
  }
}