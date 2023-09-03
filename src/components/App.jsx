import { Component } from "react";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactsGroup } from "./ContactsGroup/ContactsGroup";
import { FilterContacts } from "./Filter/Filter";


export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    this.setState({
      contacts: contacts ? JSON.parse(contacts) : []
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contact || this.state.contacts !== null) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  onAppendToContacts = contact => {
    if (this.isPossiblyToAppend(contact.name)) this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));
  };
  
  isPossiblyToAppend = name => {
    for (const contact of this.state.contacts) {
      if (name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${name} is already in your contacts.`);
        return false;
      }
    }
    return true;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  findContact = searchQuery => {
    this.setState({ filter: searchQuery.toLowerCase() });
  };
  
  render() {
    const displayedContacts = this.state.filter
      ? this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter)
      )
      : this.state.contacts; 

    return (
      <>
        <AddContactForm addContact={this.onAppendToContacts} />
        <FilterContacts findContact={this.findContact} />
        <ContactsGroup
          contacts={displayedContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
