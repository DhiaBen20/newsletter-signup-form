import { Dispatch, createContext } from "react";
import {
    NewsletterActions,
    NewsletterState,
} from "../components/NewsletterProvider";

interface NewsletterContextValue extends NewsletterState {
    dispatch: Dispatch<NewsletterActions>;
}

const NewsletterContext = createContext<NewsletterContextValue | null>(null);

export default NewsletterContext;
