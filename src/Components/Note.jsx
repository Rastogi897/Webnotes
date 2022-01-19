import React from "react";

function Note(props){

    function deleteitem(){
        props.delete(props.id);
    }

    return (
    <div className="col-6 col-md-2 note">
        <h1>{props.title}</h1>
        <hr className="line"></hr>
        <p>{props.content}</p> 
        <button onClick={deleteitem}>DELETE</button>
    </div>
    )
}

export default Note;