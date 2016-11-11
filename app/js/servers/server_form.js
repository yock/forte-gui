import React, { Component } from 'react';

class ServerForm extends Component {
  render() {
    return (
      <form className="serverform"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.onFormSubmit(this.props);
            }}>
        <input
          type="text"
          value={this.props.hostname}
          onChange={(e) => {
            e.preventDefault();
            this.props.onHostnameChange(e.target.value)
          }}
          className="serverform__hostname"
          placeholder="Hostname"
          disabled={this.props.inputsDisabled}/>
        <input
          type="text"
          value={this.props.username}
          onChange={(e) => {
            e.preventDefault();
            this.props.onUsernameChange(e.target.value)
          }}
          className="serverform__username"
          placeholder="Username"
          disabled={this.props.inputsDisabled} />
        <input
          type="submit"
          className="serverform__submit"
          value="add"
          disabled={this.props.inputsDisabled}
        />
      </form>
    )
  }
}

export default ServerForm;
