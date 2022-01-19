import React, { useState } from "react";

function CreateArea(props) {

  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function updateNote(event){
    const {name, value} = event.target;
    setnote(prevValue => {
      return {
      ...prevValue, 
      [name]: value
    };
    });
  }

  function addclicked(event){
    props.add(note);
    event.preventDefault();
    setnote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>

        <input onChange={updateNote} name="title" placeholder="Title" value={note.title} maxLength={28}/>
        <textarea 
          onChange={updateNote} 
          value={note.content} 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          maxLength={170}
          />
        <button onClick={addclicked}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
