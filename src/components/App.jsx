import { GlobalStyle } from "./GlobalStyle";
import { Layout, Title } from "./Layout";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MdOutlineContactPhone } from "react-icons/md";
import { Toaster } from 'react-hot-toast';


export const App = () => {

    return (
      <Layout>
        <Title><MdOutlineContactPhone size={48} /> Phonebook</Title>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <GlobalStyle />
        <Toaster />
      </Layout>
    );
}

