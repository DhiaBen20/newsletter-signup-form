import { ComponentPropsWithoutRef, ReactNode } from "react";

export default function Heading({
    children,
    className,
    ...props
}: { children: ReactNode } & ComponentPropsWithoutRef<"h1">) {
    return (
        <h1
            {...props}
            className={
                "text-[2.56rem] font-bold leading-[2.56rem] text-[hsl(234,29%,20%)] md:text-[3.375rem] " +
                className
            }
        >
            {children}
        </h1>
    );
}
