import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "default",
        login: "default",
      },
    };

    // console.log("parent constructor");
  }

  async componentDidMount() {
    // console.log("parent componentDidMount");

    const data = await fetch("https://api.github.com/users/ket8n");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  render() {
    // console.log("parent render");

    const { name, login } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>LoginID: {login}</h3>
      </div>
    );
  }
}

export default UserClass;
