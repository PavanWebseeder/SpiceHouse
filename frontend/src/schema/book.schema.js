import { string, z } from "zod";

export const BookSchema = z.object({
  name: z
    .string()
    .min(1, { error: "Name is required!" })
    .min(3, { error: "Name must be at least 3 characters" })
    .max(35, { error: "Name is too long" })
    .regex(/^[A-Za-z\s]+$/, "Name should contain only letters"),
  phone: z
    .string(),
  date: z.string().nullable().refine(
    (val) => {
      const selectedDate = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    },
    {
      error: "Booking date cannot be in the past",
    },
  ),
  time: z.string().min(1, "Please select time").nullable(),
  person: z.string().refine((val) => Number(val) > 0 && Number(val) <= 20, {
    message: "Number of persons must be between 1 and 20",
  }),
});

export const bookDefaultValues = {
  name: "",
  phone: "",
  date: null,
  time: null,
  person: "",
};
