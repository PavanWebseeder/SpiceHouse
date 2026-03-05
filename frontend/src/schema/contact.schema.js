import { z } from 'zod';

export const ContactSchema = z.object({
    name: z.string()
    .min(2,{error:'Name must contain be at least 2 character '})
    .max(35, {error: "Name is too long" })
    .regex(/^[A-Za-z\s]+$/, {error:"Name should contain only letters"}),
    
    email: z
    .email({error:'Invalid Email address'}),

    phone: z.string()
    .min(1,{error:'Phone Number is required'})
    .regex(/^[6-9]\d{9}$/, {
      error: "Enter valid 10-digit phone number",
    }),
    message: z.string()
    .min(1,{error:'Message cannot be empty'})
    .max(500,{error:'Message is too long'})

})

export const ContactDefaultValues = {

    name:'',
    email:'',
    phone:'',
    message:''
};