import { FaRegHandPointLeft, FaRegHandPointUp } from "react-icons/fa6"

export default async function CoursesPage() {
    return (
        <>
            <div className="max-md:hidden mt-24 flex justify-center items-center gap-2 text-2xl text-gray-400">
                <FaRegHandPointLeft />
                <p className="text-xl">Choose a course using the menu to the left</p>
            </div>
            <div className="md:hidden mt-24 flex flex-col justify-center items-center gap-2 text-2xl text-gray-400">
                <FaRegHandPointUp />
                <p className="text-lg text-center">Choose a course using the menu above</p>
            </div>
        </>

    )
}
