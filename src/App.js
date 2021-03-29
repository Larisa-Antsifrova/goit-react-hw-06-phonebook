import React, { Component } from 'react';
import Section from './components/Section';
import PageTitle from './components/PageTitle';
import Title from './components/Title';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   parsedContacts && this.setState({ contacts: [...parsedContacts] });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  submitHandler = newContact => {
    const { contacts } = this.state;
    const existingContact = contacts.find(
      contact => contact.name === newContact.name,
    );
    if (existingContact) {
      alert(`${existingContact.name} is already in contacts.`);
      return;
    }
    this.setState({ contacts: [newContact, ...contacts] });
  };

  filterUpdate = event => {
    const { value } = event.currentTarget;

    this.setState({
      filter: value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };

  render() {
    // const filtered = this.state.contacts.filter(
    //   ({ name, number }) =>
    //     name.toLowerCase().includes(this.state.filter.toLocaleLowerCase()) ||
    //     number.includes(this.state.filter),
    // );

    return (
      <>
        <PageTitle title="Phone Book" />
        <Section>
          <Title title="Add contacts" />
          <ContactForm />
          <Title title="Сontacts" />
          {/* <Filter
            filterValue={this.state.filter}
            filterUpdate={this.filterUpdate}
          /> */}
          {/* <ContactList
            filtered={filtered}
            onDeleteContact={this.deleteContact}
          /> */}
        </Section>
      </>
    );
  }
}

export default App;
