import Link from 'next/link';

interface CTAButtonProps {
    text: string;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    onClick?: () => void;
}

export default function CTAButton({ text, href, variant = 'primary', onClick }: CTAButtonProps) {
    const baseClasses = "px-8 py-3 rounded-md font-semibold transition-all duration-300 inline-block text-center";

    const variantClasses = {
        primary: "bg-forest-green text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl",
        secondary: "bg-ocean-blue text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl",
        outline: "border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white"
    };

    const classes = `${baseClasses} ${variantClasses[variant]}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {text}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {text}
        </button>
    );
}
