import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import { Layout, Title } from "./Layout";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MdOutlineContactPhone } from "react-icons/md";

const optNotiflx = {
  position: 'center-top',
  timeout: 5000,
  fontSize: '18px',
};

const getSavedContacts =()=>{
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts)
  };
  return []
}

export const App = () => {
  const [contacts, setContacts] = useState(getSavedContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => { localStorage.setItem('contacts', JSON.stringify(contacts))}, [contacts])

  const isInList = contact =>{
    return contacts.some(el => (el.name.toLowerCase()===contact.name.toLowerCase()))
  }

  const addContact = contact => {
    if (isInList(contact)) {
      Notify.warning(`${contact.name} is already in contacts`, optNotiflx)
    } else{
      setContacts(prevContact =>([...prevContact, {id: nanoid(), ...contact}]))
    }
  }

  const deleteContact = contactId =>{
    setContacts(prevContacts => (prevContacts.filter(el => (el.id !== contactId)) ))
  }

  const handleFilter = filter =>{ setFilter(filter) }

  const filteredContacts = contacts.filter(el => el.name.toLowerCase().startsWith(filter.toLowerCase()));

    return (
      <Layout>
        <Title><MdOutlineContactPhone size={48} /> Phonebook</Title>
        <ContactForm onAdd={addContact}/>
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={handleFilter} />
        <ContactList contacts={filteredContacts} onClick={deleteContact}/>
        <GlobalStyle />
      </Layout>
    );
}

