import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookDefaultValues, BookSchema } from "../schema";

const BookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BookSchema),
    defaultValues: bookDefaultValues,
  });

  const onSubmit = (data) => {
    try {
      console.log("data", data);
      alert('Table Booked Successfully')
      reset()
    } catch (error) {
      console.error(error);
    }
  };
  /*  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    person: "",
  }); */

  //const [errors, setErrors] = useState({});

  /*  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    const today = new Date().toISOString().split("T")[0];
    if (!form.date) {
      newErrors.date = "Please select a date";
    }
    if (form.date < today) {
      newErrors.date = "Past dates not allowed";
    }

    if (!form.time) {
      newErrors.time = "Please select Time";
    }

    const [hour, minute] = form.time.split(":").map(Number);
    const totalMinutes = hour * 60 + minute;

    const minTime = 11 * 60;
    const maxTime = 22 * 60;

    if (totalMinutes < minTime || totalMinutes > maxTime) {
      newErrors.time = "Booking Time must be between 11:00am to 10:00pm";
    }

    if (!form.person || Number(form.person).length < 1) {
      newErrors.person = "Minimum 1 person is required to book table";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => {
        setErrors({});
      }, 3000);
    }
    return Object.keys(newErrors).length === 0;
  }; */

  /*  const handleSubmit = (e) => {
    
    e.preventDefault();
    if(!validate()) return;

    alert('Table Booked Successfully');

    setForm({name:'',phone:'',date:'',time:'',person:''})
  }; */

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
          Dine In
        </h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto rounded mb-4"></div>

        <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              {...register('name')}
              placeholder="Name"
              className="w-full border bg-orange-50/30 border-orange-200 px-5 py-3.5 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 font-body text-gray-700 hover:border-amber-400 placeholder:text-gray-400"
            />
            {errors?.name && (
              <p className="text-red-500 text-sm ml-1">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Phone No"
              {...register('phone')}
              className="w-full border bg-orange-50/30 border-orange-200 px-5 py-3.5 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 font-body text-gray-700 hover:border-amber-400 placeholder:text-gray-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm ml-1">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:gap-4 w-full">
            <div className="flex flex-col gap-1 flex-1">
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                placeholder="Date"
                {...register('date')}
                className="w-full border bg-orange-50/30 border-orange-200 px-5 py-3.5 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 font-body text-gray-700 hover:border-amber-400 placeholder:text-gray-400"
              />
              {errors.date && (
                <p className="text-red-500 text-sm ml-1">{errors.date.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <input
                type="time"
                placeholder="Time"
                {...register('time')}
                className="w-full border bg-orange-50/30 border-orange-200 px-5 py-3.5 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 font-body text-gray-700 hover:border-amber-400 placeholder:text-gray-400"
              />
              {errors.time && (
                <p className="text-red-500 text-sm ml-1">{errors.time.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="number"
              inputMode="numeric"
              placeholder="No of Person"
              {...register('person')}
              className="w-full border bg-orange-50/30 border-orange-200 px-5 py-3.5 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 font-body text-gray-700 hover:border-amber-400 placeholder:text-gray-400"
            />
            {errors.person && (
              <p className="text-red-500 text-sm ml-1">{errors.person.message}</p>
            )}
          </div>

          <button type="submit" className="mt-4 bg-gradient-to-r from-amber-600 to-orange-500 font-semibold text-lg text-white py-4 rounded-xl hover:from-amber-700 hover:to-orange-600 hover:cursor-pointer transition-all duration-300 shadow-[0_4px_14px_0_rgba(217,119,6,0.39)] hover:shadow-[0_6px_20px_rgba(217,119,6,0.23)] hover:-translate-y-0.5 active:scale-[0.98] transform">
            Book Table
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default BookForm;
