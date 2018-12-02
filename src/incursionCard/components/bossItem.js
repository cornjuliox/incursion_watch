import React, { Component } from 'react';

export default class BossItem extends Component {
  render() {
    let friendlyDisplayText = '';
    let textColor = '';
    if (this.props.hasBoss === true) {
      friendlyDisplayText = 'Yes';
      textColor = 'text-success'
    } else {
      friendlyDisplayText = 'No';
      textColor = 'text-danger'
    }

    // NOTE: getting errors when I shove it into the return div down below.
    //       so I'm putting it up here.
    let displayClassName = `float-right ${textColor}`;

    return (
      <div className="my-1">
        <p className="float-left">Has Boss?</p>
        <p className={displayClassName}>{friendlyDisplayText}</p>
      </div>
    )
  }
}
