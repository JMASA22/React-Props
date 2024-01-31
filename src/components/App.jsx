// App.jsx
import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import contacts from "../contacts";

function createCard (contact){
  return (
    <Card 
      // id = {contact.id}
      key={contact.id}
      name={contact.name} 
      img={contact.img}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Contactes Mones</h1>
      <div className="card-container">
       {contacts.map(createCard)}
       
        {/*
        <Card 
          name={contacts[0].name}
          img={contacts[0].img}
          tel={contacts[0].tel}
          email={contacts[0].email}
        />

        <Card 
          name={contacts[1].name}
          img={contacts[1].img}
          tel={contacts[1].tel}
          email={contacts[1].email}
        />
        <Card 
          name={contacts[2].name}
          img={contacts[2].img}
          tel={contacts[2].tel}
          email={contacts[2].email}
        />

        <Card 
          name={contacts[3].name}
          img={contacts[3].img}
          tel={contacts[3].tel}
          email={contacts[3].email}
        />

        <Card 
          name={contacts[4].name}
          img={contacts[4].img}
          tel={contacts[4].tel}
          email={contacts[4].email}
        />

        <Card 
          name={contacts[5].name}
          img={contacts[5].img}
          tel={contacts[5].tel}
          email={contacts[5].email}
        />
        */}

      </div>
      <Footer />
    </div>
    

  );
}

export default App;
