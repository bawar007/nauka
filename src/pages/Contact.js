import React, { Component } from "react";
import "../styles/ContactPage.css";

class Contact extends Component {
  state = {
    value: "",
    isEmpty: true,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      isEmpty: false,
    });
  };
  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Napisz wiadomość..."
          ></textarea>
          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default Contact;
