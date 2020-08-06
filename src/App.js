import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

export default class App extends Component {
  static propTypes = {
    state: PropTypes.shape({
      contacts: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        }),
      ),
      filter: PropTypes.string,
    }),
    getVisibleContacts: PropTypes.func,
    addContact: PropTypes.func,
    changeFilter: PropTypes.func,
    removeContact: PropTypes.func,
  };

  static defaultProp = {
    filter: "",
  };

  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`CONTACT ${name} IS ALREADY IN CONTACTS.`);
    } else if (name === "" || number === "") {
      alert(`FOR ADD CONTACT IN PHONEBOOK YOU MUST FILLED ALL FIELDS`);
    } else {
      const contact = {
        id: uuidv4(),
        name,
        number,
      };

      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  //метод который возвращает новый массив (не мутирует state)
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemove={this.removeContact}
          />
        )}
      </>
    );
  }
}
