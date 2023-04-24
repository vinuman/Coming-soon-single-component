import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
    } else {
      setErrorMsg("");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Email ID:</label>
      <input
        htmlFor="email"
        type="email"
        placeholder="Your email address…"
        value={email}
        onChange={handleEmailChange}
      ></input>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      <button type="submit" name="submit" value="submit">
        Notify Me
      </button>
    </form>
  );
};

export default Form;
