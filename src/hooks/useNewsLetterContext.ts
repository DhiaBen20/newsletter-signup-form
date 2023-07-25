import { useContext } from "react";
import NewsletterContext from "../contexts/NewsletterContext";

export default function useNewsletterContext() {
    const value = useContext(NewsletterContext);

    if (!value) {
        throw new Error(
            `useNewsletterContext should be called only inside NewsletterProvider`
        );
    }

    return value;
}
