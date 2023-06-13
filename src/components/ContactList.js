import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const inputEL = useRef("");

    const deleteContactHandler = (id) => {
        props.getContactIId(id);
    }
    
    const renderContactList = props.contacts.map((contact) => {
        return ( 
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        );
    })

    const getSearchTeam = () => {
        props.searchKeyword(inputEL.current.value);
    }

    return (
        <div className="main">
            <br /><br />
            <h2>Contact List
                <Link to="/add"><button className="ui button blue right">Add Contact</button></Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEL} type='text' placeholder="Search Contact" className="prompt" value={props.term} onChange={getSearchTeam}/>
                    <i className="seach icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList.length > 0 ? renderContactList : "No contact avaliable"}
            </div>
        </div>
    );
}

export default ContactList;