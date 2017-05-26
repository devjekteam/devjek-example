import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ActionMenu.css';

class ActionMenu extends Component {
  constructor() {
    super();
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className={ this.state.open ? 'ActionMenu open' : 'ActionMenu' }>
        <div className="ActionMenu-dots" onClick={this.toggleMenu}>
          <span />
          <span />
          <span />
        </div>
        <ul className={this.state.open ? 'ActionMenu-menu' : 'ActionMenu-menu-hidden'}>
          <li className="ActionMenu-menuItem">
            <span className="ActionMenu-menuItem-icon">
              <img src={require('../../public/files/share-icon.png')} />
            </span>
            Share
          </li>
          <li className="ActionMenu-menuItem">
            <span className="ActionMenu-menuItem-icon">
              <img src={require('../../public/files/download-icon.png')} />
            </span>
            Download as Zip
          </li>
          <li className="ActionMenu-menuItem">
            <span className="ActionMenu-menuItem-icon">
              <img src={require('../../public/files/delete-icon.png')} />
            </span>
            Delete
          </li>
        </ul>
      </div>
    )
  }
}
ActionMenu.propTypes = {
  onDownload: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ActionMenu;