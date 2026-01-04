import Link from "next/link";

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold text-midnight_text">PayFlow</span>
        </Link>
    );
};

export default Logo;
