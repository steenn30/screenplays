import React from "react";

class AccountSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="auth-card">
        <h3>Sign in</h3>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>
        <button className="button button--ghost" type="button">
          Sign in
        </button>
      </div>
    );
  }
}

export default AccountSignIn;
