import React, { Component } from 'react';

class ServerForm extends Component {
  render() {
    return (
      <form className="serverform">
        <input
          type="text"
          className="serverform__hostname"
          placeholder="Hostname"
        />
        <input
          type="text"
          className="serverform__username"
          placeholder="Username"
        />
        <input
          type="submit"
          className="serverform__submit"
          value="add"
        />
      </form>
    )
  }
}

export default ServerForm;
