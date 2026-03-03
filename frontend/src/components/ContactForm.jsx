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

    if (!validate()) return;

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
    <div className="mt-28 px-4 max-w-7xl mx-auto">
      <div className="md:w-[600px] max-w-xl mx-auto p-10 bg-white rounded-2xl shadow-xl shadow-amber-900/10 border border-orange-50">
        <h2
          className="text-center text-amber-600 font-bold text-4xl mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded mb-4"></div>

        <div
          className="text-center mb-8 text-gray-500 text-lg"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <p>spicehouse@gmail.com</p>
          <p>Mobile: +91 123456789</p>
        </div>

        <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Name"
            onChange={handleChange}
            className="border bg-orange-50/30 border-orange-200 px-4 py-3 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-body text-gray-700"
          />

          {errors.name && <p className="text-red-500 text-sm -mt-4">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            className="border bg-orange-50/30 border-orange-200 px-4 py-3 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-body text-gray-700"
          />

          {errors.email && (
            <p className="text-red-500 text-sm -mt-4">{errors.email}</p>
          )}

          <input
            type="text"
            name="phone"
            value={form.phone}
            maxLength={10}
            inputMode="numeric"
            placeholder="Phone No"
            onChange={handleChange}
            className="border bg-orange-50/30 border-orange-200 px-4 py-3 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-body text-gray-700"
          />

          {errors.phone && (
            <p className="text-red-500 text-sm -mt-4">{errors.phone}</p>
          )}

          <textarea
            placeholder="Message..."
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="border bg-orange-50/30 border-orange-200 px-4 py-3 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all resize-none font-body text-gray-700"
          />

          {errors.message && (
            <p className="text-red-500 text-sm -mt-4">{errors.message}</p>
          )}

          <button className="mt-2 bg-amber-600 font-semibold text-lg text-white py-4 rounded-xl hover:bg-amber-700 hover:cursor-pointer transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 transform">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
