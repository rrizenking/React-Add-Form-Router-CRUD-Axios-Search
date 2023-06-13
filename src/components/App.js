  import React, {useState, useEffect} from 'react';
  import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  import { v4 as uuid } from 'uuid';
  import './App.css';
  import AddContact from './AddContact';
  import ContactList from './ContactList';
  import Header from './Header';
  import ContactDetail from './ContactDetail';
  import api from '../api/contacts';
  import EditContact from './EditContact';

  function App()
  {
    const LOCAL_STORAGEKEY = "contacts"
    const [contacts, setContacts] = useState([]);
    const [searchTerm , SetsearchTerm] = useState("");
    const [searchResult, SetsearchResult] = useState([]);

    const retriveContacts = async() =>{
      const response = await api.get('/contacts');
      return response.data;
    }

    const addContactHandler = async(contact) => {
      const request = {
        id: uuid(),
        ...contact,
      }
      const response = await api.post('/contacts', request);
      setContacts([...contacts, response.data]);
    }

    const updateContactHandler = async(contact) => {
      const response = await api.put(`/contacts/${contact.id}`, contact);
      const {id, name, email} = response.data;
      setContacts(
        contacts.map((contact) => {
          return contact.id === id ? {...response.data} : contact;
        })
      );
    }

    const removeContactHandler = async(id) => {
      await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter((contact)=>{
        return contact.id !== id; 
      });

      setContacts(newContactList)
    }

    const searchHandler = (searchTerm) => {
      SetsearchTerm(searchTerm);
      if(searchTerm !== '')
      {
        const newContactList = contacts.filter((contact) => {
          return Object.values(contact).join(' ').toLowerCase().includes(searchTerm.toLowerCase());
        })
        SetsearchResult(newContactList);
      }
      else {
        SetsearchResult(contacts);
      }
    }

    useEffect(() => {
      if(contacts.length){
        //localStorage.setItem(LOCAL_STORAGEKEY, JSON.stringify(contacts))
      }
    }, [contacts]);

    useEffect(() => {
      //const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGEKEY));
      //if(retriveContact) setContacts(retriveContact);

      const getAllContacts = async() => {
        const allContacts = await retriveContacts();
        if(allContacts) setContacts(allContacts);
      }

      getAllContacts();
    }, []);

    return (
      <div className='ui container'>
        <Router>
        <Header></Header> 
          <Routes>
            <Route path="/" element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResult} getContactIId={removeContactHandler} term={searchTerm} searchKeyword={searchHandler} />} />
            <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler} />} />
            {/*<Route path="/" render={(props) => (<ContactList {...props} />)} />
            <Route path="/add" render={(props) => (<AddContact {...props} addContactHandler={addContactHandler} />)} />*/}

          </Routes>  
        </Router>
      </div>
    );
  }

  export default App;
