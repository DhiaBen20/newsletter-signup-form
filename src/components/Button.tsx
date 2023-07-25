import { ComponentPropsWithoutRef, ReactNode } from "react";

export default function Button({
    children,
}: { children: ReactNode } & ComponentPropsWithoutRef<"button">) {
    return (
        <button className="text-white bg-[#232742] py-5 rounded-md font-bold">
            {children}
        </button>
    );
}
