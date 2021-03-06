// @flow weak

import React, {
  PureComponent,
  PropTypes
}                     from 'react';
import { Link }       from 'react-router';

class RightNavButton extends PureComponent {
  static propTypes = {
    link: PropTypes.string,
    label: PropTypes.string,
    viewName: PropTypes.string,
    onClick: PropTypes.func
  };

  render() {
    const { link, label } = this.props;
    return (
      <li>
        <Link
          to={link}
          onClick={this.handleRightNavItemClick}>
          {label}
        </Link>
      </li>
    );
  }

  handleRightNavItemClick = (event) => {
    const { onClick, viewName } = this.props;
    onClick(event, viewName);
  }
}

export default RightNavButton;
