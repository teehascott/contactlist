import { useState } from 'react'
import React from "react";
import ContactRow from "./ContactRow.jsx";
import {useEffect} from 'react'

const dummyContacts = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '456-789-0123' },
  ];

export default function ContactList() {
    const [contacts, setContacts] = useState(dummyContacts)
    useEffect(() => {
        async function fetchContacts() {
          try {
            const response = await fetch(
              "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
            );
            const result = await response.json();
            setContacts(result);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContacts();
      }, []);
    return (
      <table>
         <caption>
            Contact List
         </caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
        <tbody>
          {/* {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))} */}
            {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />;
        })}
        </tbody>
      </table>
    );
  };
  
//   export default ContactList;