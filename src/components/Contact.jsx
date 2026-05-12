import React from "react";

const Contact = () => {
    function validate(event){
        event.preventDefault()
        if(event.target.password.value.length < 8){
            alert("password must be at least 8 charactar")
        }
    }
  function onfinish(event) {
    event.preventDefault();
    validate(event);
    alert("form submitted");
  }
  return (
    <div>
      <form onSubmit={onfinish}>
        <input type="text" name="username" placeholder="Enter your Name" />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <textarea placeholder="Write your message"></textarea>
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Contact;
