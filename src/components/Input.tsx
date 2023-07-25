import { ComponentPropsWithoutRef, forwardRef } from "react";

const defaultClasses =
    "rounded-md border px-6 py-4 focus:outline-none focus:ring ring-offset-2";
const errorClasses =
    "border-[hsl(4,100%,67%)] bg-[hsl(4,100%,67%)]/20 text-[hsl(4,100%,67%)]";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
    isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function (
    { isError = false, ...props },
    ref
) {
    return (
        <input
            className={`${defaultClasses} ${isError ? errorClasses : ""}`}
            {...props}
            ref={ref}
        />
    );
});

export default Input;
