// Imports from React
import React from 'react';
// Imports of components
import Section from './components/Section';
import PageTitle from './components/PageTitle';
import Title from './components/Title';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <>
      <PageTitle title="Phone Book" />
      <Section>
        <Title title="Add contacts" />
        <ContactForm />
        <Title title="Сontacts" />
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default App;

// Left from class component till Local Storage refactoring
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
