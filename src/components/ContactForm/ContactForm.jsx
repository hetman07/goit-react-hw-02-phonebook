import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    static propTypes = {};
    static defaultProp = {};

    state = {
      name: "",
      number: "",
    };

//1 ввожу данные в поле инпут и меняю поле name/number в state
handleChange = e => {
  const field = e.target.dataset.row;
  this.setState({
    [field]: e.target.value, //данные введеные в поле инпут
  });
};
//2при нажатии на кнопку add contact снова меняем state только св-во contacts (массив обьектов {name,id})
handleSubmit = e => {
  e.preventDefault();
  this.props.onAddContact(this.state.name, this.state.number);

  this.setState({
    name: "",
    number: "",
  });
};

    render() {
      const { name, number } = this.state;
        return (
        <form className="TaskEditor" onSubmit={this.handleSubmit}>
        <label className="TaskEditor-label">
          Name
          <input
            className="TaskEditor-input"
            type="text"
            value={name}
            onChange={this.handleChange}
            data-row="name"
          />
        </label>
        <label className="TaskEditor-label">
          Number
          <input
            className="TaskEditor-input"
            type="text"
            value={number}
            onChange={this.handleChange}
            data-row="number"
          />
        </label>

        <button type="submit" className="TaskEditor-button">
          Add contact
        </button>
      </form>)

    }
}

export default Form;

