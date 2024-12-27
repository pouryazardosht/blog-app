import { IoCreateOutline, IoHomeOutline } from "react-icons/io5"
import { Link } from "react-router"

function Navbar() {
    return (
        <>
            <div className="btm-nav md:hidden">
                <Link to='/blogs'>
                    <button className="flex flex-col items-center">
                        <IoHomeOutline size="20" />
                        <span className="btm-nav-label">Home</span>
                    </button>
                </Link>
                <Link to='/blogs/create'>
                    <button className="flex flex-col items-center">
                        <IoCreateOutline size="20" />
                        <span className="btm-nav-label">Create</span>
                    </button>
                </Link>

            </div>
            <div className="hidden md:flex navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/blogs' className="btn btn-ghost text-xl">Blog App</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/blogs'>Home</Link>
                        </li>
                        <li>
                            <Link to='/create'>Create</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar