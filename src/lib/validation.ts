import {z} from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
    email: requiredString.email("Invalid email address"),
    name: z.string().min(2).max(50),
    password: requiredString.min(8, "Must be at least 8 characters long")
})

export type SignUpValues = z.infer<typeof signUpSchema>

export const loginSchema = z.object({
    email: requiredString.email("Invalid email address"),
    password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;

export const createPostSchema = z.object({
    content: requiredString,
});

