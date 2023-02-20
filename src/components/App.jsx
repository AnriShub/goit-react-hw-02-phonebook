import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  changeFilter = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  addContact = e => {
    const contact = {
      id: nanoid(),
      name: e.name,
      number: e.number,
    }

    const temp = this.state.contacts.filter(temp2 => temp2.name === contact.name);

    if (temp.length !== 0) {
      alert(contact.name + " is already in contacts.")
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact]
      }))
    }
  }

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContact} />
      <h1>Contacts</h1>
      <Filter
        filter={filter}
        onChange={this.changeFilter} />
      <ContactList
        contacts={visibleContacts}
        deleteContact={this.deleteContact} />
    </div >
  };
};
