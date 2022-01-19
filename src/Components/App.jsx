import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteitems, setnoteitems] = useState([]); 

  function addNote(newnote){
    setnoteitems( prevValue => {
      return [...prevValue, newnote]
    });
  }

  function deleteNote(id){
    setnoteitems((prevValue)=>{
      return prevValue.filter((item, index)=>{
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
        add = {addNote}
      />

      <div className="container"> 
        <div className="row set">
        {noteitems.map((items, index) => {
          return <Note 
            key={index}
            id={index}
            title={items.title}
            content={items.content}
            delete={deleteNote}
          />
        })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
