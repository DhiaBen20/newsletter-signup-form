import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return <div className="px-6 md:px-10">{children}</div>;
}
