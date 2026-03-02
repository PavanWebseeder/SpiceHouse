import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (form.phone.trim().length < 10) {
      newErrors.phone = "Mobile number must be at least 10 digits";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

     if (Object.keys(newErrors).length > 0) {
    setTimeout(() => {
      setErrors({});
    }, 3000);
  }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validate()) return;

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message Sent Successfully..!");
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Failed to Send Message");
          console.log(error);
        },
      );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-20 px-4">
      <div className="md:w-200 mx-w-xl mx-auto p-6 rounded-lg border shadow-xl shadow-olive-800 border-gray-500">
        <h2
          className="text-center text-blue-500 font-semibold text-2xl mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Get In Touch
        </h2>

        <div
          className="text-center mb-3 text-gray-500"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <p>spicehouse@gmail.com</p>
          <p>Mobile:+91 123456789</p>
        </div>

        <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Name"
            onChange={handleChange}
            className="border border-gray-400 px-2 py-3 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            className="border border-gray-400 px-2 py-3 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="text"
            name="phone"
            value={form.phone}
            maxLength={10}
            inputMode="numeric"
            placeholder="Phone No"
            onChange={handleChange}
            className="border border-gray-400 px-2 py-3 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          <textarea
            placeholder="Message..."
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="border border-gray-400 px-2 py-3 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
