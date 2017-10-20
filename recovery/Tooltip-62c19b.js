import React from 'react';
import {string} from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class Tooltip extends React.Component {
  static displayName = 'Tooltip';

  static propTypes = {
    targetElementId: string,
    tooltipText: string,
  };

  render() {
    return (
      <div
        onMouseEnter={this.mouseEnter}
        onMouseOut={this.mouseOut}
      >
        stuff
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default Tooltip;
