import { useState, useEffect } from "react";

function ContactForm({ contact, onSave }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (contact) setForm(contact);
  }, [contact]);

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};


  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />
      <button type="submit">{form._id ? "update" : "Add"}</button>
    </form>
  );
}

export default ContactForm;