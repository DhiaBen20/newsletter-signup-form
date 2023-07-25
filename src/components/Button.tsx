import { ComponentPropsWithoutRef, ReactNode } from "react";

export default function Button({
    children,
}: { children: ReactNode } & ComponentPropsWithoutRef<"button">) {
    return (
        <button className="text-white bg-[#232742] py-5 rounded-md font-bold hover:bg-gradient-to-r from-[hsl(347,100%,66%)] to-[hsl(4,100%,67%)]">
            {children}
        </button>
    );
}
