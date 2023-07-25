import { ReactNode, useReducer } from "react";
import NewsletterContext from "../contexts/NewsletterContext";
import { NewsletterFormFields } from "./NewsletterForm";

interface DismissAction {
    type: "dismiss";
}

interface SubmitAction {
    type: "submit";
}

interface SetEamilAction {
    type: "set_email";
    email: string;
}

export type NewsletterActions = DismissAction | SubmitAction | SetEamilAction;

export interface NewsletterState extends NewsletterFormFields {
    isSubmitted: boolean;
    isDismissed: boolean;
}

function reducer(
    state: NewsletterState,
    action: NewsletterActions
): NewsletterState {
    switch (action.type) {
        case "dismiss":
            return { ...state, isDismissed: true };
        case "submit":
            return { ...state, isSubmitted: true };
        case "set_email":
            return { ...state, email: action.email };
    }
}

export default function NewsletterProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [state, dispatch] = useReducer(reducer, {
        isDismissed: false,
        isSubmitted: false,
        email: "",
    });

    return (
        <NewsletterContext.Provider value={{ ...state, dispatch }}>
            {children}
        </NewsletterContext.Provider>
    );
}
