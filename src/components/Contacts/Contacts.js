import { useState, useEffect } from "react";
import "./Contacts.css";

import List from "./List/List";
import Form from "./Form/Form";
const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
