import React, {useState, useEffect} from 'react';
import {uuid} from 'uuidv4';
import './App.css';
import Head from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App()
{
  const LOCAL_STORAGEKEY = "contacts"
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id:uuid(), ...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id; 
    });

    setContacts(newContactList)
  }

  useEffect(() => {
    if(contacts.length){
      localStorage.setItem(LOCAL_STORAGEKEY, JSON.stringify(contacts))
    }
  }, [contacts]);

  useEffect(() => {
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGEKEY));
    if(retriveContact) setContacts(retriveContact);
  }, []);

  return (
    <div className='ui container'>
      <Head />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactIId={removeContactHandler} />
    </div>
  );
}

export default App;
