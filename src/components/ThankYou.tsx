import useNewsletterContext from "../hooks/useNewsLetterContext";
import Button from "./Button";
import Container from "./Container";
import Heading from "./Heading";
import { SuccessIcon } from "./icons";

export default function ThankYou() {
    const { email, dispatch } = useNewsletterContext();

    return (
        <Container>
            <div className="md:flex md:justify-center">
                <div className="flex min-h-screen md:min-h-[unset] flex-col pt-36 md:p-12 bg-white rounded-3xl md:w-1/2">
                    <SuccessIcon />
                    <Heading className="mt-10">Thanks for subscribing!</Heading>
                    <p className="mt-6">
                        A confirmation email has been sent to{" "}
                        <span className="font-bold">{email}</span>. Please open it
                        and click the button inside to confirm your subscription.
                    </p>
                    <form
                        className="mb-10 md:mb-0 mt-auto md:mt-10 flex flex-col"
                        onSubmit={(e) => {
                            e.preventDefault();
                            dispatch({ type: "dismiss" });
                        }}
                    >
                        <Button>Dismiss message</Button>
                    </form>
                </div>
            </div>
        </Container>
    );
}
