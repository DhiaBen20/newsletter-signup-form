import Signup from "./components/Signup";
import ThankYou from "./components/ThankYou";
import useNewsletterContext from "./hooks/useNewsLetterContext";

function App() {
    const { isSubmitted, isDismissed } = useNewsletterContext();

    return (
        <div className="text-[hsl(235,18%,26%)] md:bg-[#36384D] md:min-h-screen md:flex md:items-center md:justify-center">
            {(!isSubmitted || isDismissed) && <Signup />}

            {isSubmitted && !isDismissed && <ThankYou />}
        </div>
    );
}

export default App;
