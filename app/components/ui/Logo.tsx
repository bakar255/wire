import Link from "next/link";


export default function Logo() {

    
    return (
        <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-green-400 flex items-center justify-center">
                <span className="text-black font-bold text-lg">W</span>
            </div>
            Wire
        </Link>
    );
}