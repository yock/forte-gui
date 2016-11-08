import React, { Component } from 'react';
import Github from './github';
import PublicKeyTransform from './public_key_transform';

class PublicKeyForm extends Component {
  render() {
    return (
      <div className="publickeyform">
        <form
          onSubmit={ e => {
            e.preventDefault();
            this.props.onFormSubmit(this.props.username);
        }}>
          <input
            disabled={this.props.inputDisabled}
            type="text"
            value={this.props.username}
            placeholder="Enter a Github username"
            className="publickeyform__input"
            onChange={(e) => {
              e.preventDefault();
              this.props.onInputChange(e.target.value);
          }}/>
          <input
            type="submit"
            value="add"
            className="publickeyform__retrieve"
          />
        </form>
      </div>
    )
  }
}

export default PublicKeyForm;
