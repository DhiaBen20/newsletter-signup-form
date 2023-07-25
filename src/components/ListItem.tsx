import { ReactNode } from "react";

export default function ListItem({ children }: { children: ReactNode }) {
    return <li className="flex item-start gap-4">{children}</li>;
}
