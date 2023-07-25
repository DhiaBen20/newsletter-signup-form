export function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
            className="h-5 w-5 shrink-0"
        >
            <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                    stroke="#FFF"
                    strokeWidth="2"
                    d="M6 11.381 8.735 14 15 8"
                />
            </g>
        </svg>
    );
}

export function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="h-16 w-16"
        >
            <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6A3A" />
                    <stop offset="100%" stopColor="#FF527B" />
                </linearGradient>
            </defs>
            <g fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#a)" />
                <path
                    stroke="#FFF"
                    strokeWidth="4"
                    d="m18.286 34.686 8.334 7.98 19.094-18.285"
                />
            </g>
        </svg>
    );
}
