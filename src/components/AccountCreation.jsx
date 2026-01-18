import React from "react";

class AccountCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  render() {
    return (
      <div className="auth-card">
        <h3>Create an account</h3>
        <label>
          Name
          <input type="text" placeholder="Jane Writer" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <button className="button button--primary" type="button">
          Sign up
        </button>
      </div>
    );
  }
}

export default AccountCreation;
