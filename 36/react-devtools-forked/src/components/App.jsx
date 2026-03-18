import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://img.freepik.com/premium-vector/initial-letter-me-logo-design-template-me-logo_1206424-5644.jpg" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
