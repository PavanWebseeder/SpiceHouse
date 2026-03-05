import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ContactSchema, ContactDefaultValues } from "../schema/contact.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";

const ContactForm = () => {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const [errors, setErrors] = useState({});

  // const validate = () => {
  //   const newErrors = {};

  //   if (!form.name.trim()) {
  //     newErrors.name = "Name is required";
  //   } else if (form.name.trim().length < 2) {
  //     newErrors.name = "Name must be at least 2 characters";
  //   }

  //   if (!form.email.trim()) {
  //     newErrors.email = "Email is required";
  //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
  //     newErrors.email = "Enter a valid email";
  //   }

  //   if (!form.phone.trim()) {
  //     newErrors.phone = "Mobile number is required";
  //   } else if (form.phone.trim().length < 10) {
  //     newErrors.phone = "Mobile number must be at least 10 digits";
  //   }

  //   if (!form.message.trim()) {
  //     newErrors.message = "Message is required";
  //   }

  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length > 0) {
  //     setTimeout(() => {
  //       setErrors({});
  //     }, 3000);
  //   }
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validate()) return;

  //   emailjs
  //     .send(
  //       import.meta.env.VITE_SERVICE_ID,
  //       import.meta.env.VITE_TEMPLATE_ID,
  //       form,
  //       import.meta.env.VITE_PUBLIC_KEY,
  //     )
  //     .then(
  //       () => {
  //         alert("Message Sent Successfully..!");
  //         setForm({ name: "", email: "", phone: "", message: "" });
  //       },
  //       (error) => {
  //         alert("Failed to Send Message");
  //         console.log(error);
  //       },
  //     );
  // };

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: ContactDefaultValues,
  });

  const onSubmit = (data) => {
    try {
      console.log("data", data);
      reset();
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          data,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(
          () => {
            alert("Message Sent Successfully..!");
          },
          (error) => {
            alert("Failed to Send Message");
            console.log(error);
          },
        );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-28 px-4 max-w-7xl mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="md:w-[600px] max-w-xl mx-auto p-10 bg-white rounded-2xl shadow-xl shadow-amber-900/10 border border-orange-50"
      >
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

        <form
          className="flex flex-col gap-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              className="w-full border bg-orange-50/30 border-orange-200 px-5 py-3.5 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 font-body text-gray-700 hover:border-amber-400 placeholder:text-gray-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm ml-1">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="w-full border bg-orange-50/30 border-orange-200 px-5 py-3.5 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 font-body text-gray-700 hover:border-amber-400 placeholder:text-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm ml-1">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              {...register("phone")}
              maxLength={10}
              inputMode="numeric"
              placeholder="Phone No"
              className="w-full border bg-orange-50/30 border-orange-200 px-5 py-3.5 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 font-body text-gray-700 hover:border-amber-400 placeholder:text-gray-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm ml-1">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              placeholder="Message..."
              {...register("message")}
              rows="5"
              className="w-full border bg-orange-50/30 border-orange-200 px-5 py-3.5 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 resize-none font-body text-gray-700 hover:border-amber-400 placeholder:text-gray-400"
            />
            {errors.message && (
              <p className="text-red-500 text-sm ml-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button className="mt-4 bg-gradient-to-r from-amber-600 to-orange-500 font-semibold text-lg text-white py-4 rounded-xl hover:from-amber-700 hover:to-orange-600 hover:cursor-pointer transition-all duration-300 shadow-[0_4px_14px_0_rgba(217,119,6,0.39)] hover:shadow-[0_6px_20px_rgba(217,119,6,0.23)] hover:-translate-y-0.5 active:scale-[0.98] transform">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
