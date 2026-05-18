import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (

        <nav className="
            bg-black
            text-white
            px-8
            py-5
            shadow-lg
            border-b
            border-gray-800
        ">

            <div className="
                max-w-6xl
                mx-auto
                flex
                items-center
                justify-between
            ">

                {/* Logo */}
                <div className="
                    text-3xl
                    font-bold
                    text-blue-500
                    tracking-wide
                ">
                      <img
        src="https://cdn-icons-png.flaticon.com/128/942/942748.png"
        alt="logo"
        className="h-10 w-10"
    />
                </div>

                {/* Nav Links */}
                <div className="
                    flex
                    gap-8
                    text-lg
                    font-medium
                ">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `
                            transition-all
                            duration-200
                            hover:text-blue-400
                            ${isActive ? "text-blue-500" : "text-gray-300"}
                            `
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/pastes"
                        className={({ isActive }) =>
                            `
                            transition-all
                            duration-200
                            hover:text-blue-400
                            ${isActive ? "text-blue-500" : "text-gray-300"}
                            `
                        }
                    >
                        Pastes
                    </NavLink>

                </div>

            </div>

        </nav>
    )
}

export default Navbar