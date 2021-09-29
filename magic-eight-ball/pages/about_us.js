import Link from 'next/link'

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl">About Us Page Coming Soon!</h1>
            <Link href="/">
                <a className="p-4 m-4 text-2xl">Back to Home Page</a>
            </Link>
        </div>
    )
}