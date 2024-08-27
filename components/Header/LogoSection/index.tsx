import Link from "next/link"

export const LogoSection = () => {
    return (
        <div className="flex-1">
            <Link href="/">
            <h1 className="font-semibold hover:underline hover:text-blue-500 dark:hover:text-blue-200">Zeitounian</h1>
            </Link>
        </div>
    )
}