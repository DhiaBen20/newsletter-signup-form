import Container from "./Container";
import Heading from "./Heading";
import ListItem from "./ListItem";
import NewsletterForm from "./NewsletterForm";
import { CheckIcon } from "./icons";
import DesktopIllustration from "../assets/illustration-sign-up-desktop.svg";
import MobileIllustration from "../assets/illustration-sign-up-mobile.svg";
export default function Signup() {
    return (
        <div>
            <div className="flex h-72 flex-col bg-white shadow-2xl md:h-[unset] md:flex-row-reverse md:gap-6 md:rounded-3xl md:p-6">
                <div className="rounded-ee-2xlxrounded-es-2xl">
                    <img
                        src={MobileIllustration}
                        className="w-full object-cover md:hidden"
                        alt=""
                    />
                    <img
                        src={DesktopIllustration}
                        className="hidden md:block"
                        alt=""
                    />
                </div>
                <Container>
                    <Heading className="mt-9 md:mt-16">Stay updated!</Heading>

                    <p className="mt-5">
                        Join 60,000+ product managers receiving monthly updates
                        on:
                    </p>

                    <ul className="mt-7 space-y-3.5">
                        <ListItem>
                            <CheckIcon />
                            Product discovery and building what matters
                        </ListItem>
                        <ListItem>
                            <CheckIcon />
                            Measuring to ensure updates are a success
                        </ListItem>
                        <ListItem>
                            <CheckIcon />
                            And much more!
                        </ListItem>
                    </ul>

                    <NewsletterForm />
                </Container>
            </div>
        </div>
    );
}
