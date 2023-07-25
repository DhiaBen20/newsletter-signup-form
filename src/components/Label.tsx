import { ComponentPropsWithoutRef } from "react";

export default function Label({ ...props }: ComponentPropsWithoutRef<"label">) {
    return <label className="text-xs font-bold" {...props} />;
}
