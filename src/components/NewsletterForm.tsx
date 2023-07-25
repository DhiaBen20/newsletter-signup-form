import { UseFormRegister, useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { ReactNode } from "react";
import useNewsletterContext from "../hooks/useNewsLetterContext";

export interface NewsletterFormFields {
    email: string;
}

function useRegisterEmail(register: UseFormRegister<NewsletterFormFields>) {
    const { dispatch } = useNewsletterContext();

    return register("email", {
        required: "Email is required",
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Valid email required",
        },
        onChange: (e) => dispatch({ type: "set_email", email: e.target.value }),
    });
}

function Message({ children }: { children: ReactNode }) {
    return (
        <span className="text-xs font-bold text-[hsl(4,100%,67%)]">
            {children}
        </span>
    );
}

export default function NewsletterForm() {
    const { email, dispatch } = useNewsletterContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewsletterFormFields>({
        defaultValues: {
            email: email,
        },
    });

    return (
        <form
            className="mt-10"
            onSubmit={handleSubmit(() => dispatch({ type: "submit" }))}
        >
            <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                    <Label htmlFor="email">Email address</Label>

                    {errors.email && <Message>{errors.email.message}</Message>}
                </div>
                <Input
                    type="email"
                    id="email"
                    placeholder="email@company.com"
                    isError={!!errors.email}
                    {...useRegisterEmail(register)}
                />
            </div>

            <div className="mt-6 flex flex-col mb-10">
                <Button>Subscribe to monthly newsletter</Button>
            </div>
        </form>
    );
}
