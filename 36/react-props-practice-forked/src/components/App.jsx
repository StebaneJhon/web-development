import React from "react";
import Contact from "./Contact";
import ContactList from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Contact
        name={ContactList[0].name}
        img={ContactList[0].imgURL}
        tel={ContactList[0].phone}
        email={ContactList[0].email}
      />
      <Contact
        name={ContactList[1].name}
        img={ContactList[1].imgURL}
        tel={ContactList[1].phone}
        email={ContactList[1].email}
      />
      <Contact
        name={ContactList[2].name}
        img={ContactList[2].imgURL}
        tel={ContactList[2].phone}
        email={ContactList[2].email}
      />
    </div>
  );
}

export default App;
