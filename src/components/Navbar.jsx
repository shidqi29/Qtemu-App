import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navigation = [
    { name: "Create Meetup", to: "/create" },
    { name: "Explore", to: "/explore" },
    { name: "Login", to: "/login" },
  ];
  return (
    <nav className="container navbar mx-auto mb-6 mt-2 h-8 max-w-[520px] rounded-xl bg-base-300 px-4 shadow shadow-slate-400">
      <div className="flex-auto">
        <NavLink
          className="btn btn-ghost text-2xl font-bold normal-case"
          to="/"
        >
          Qtemu
        </NavLink>
        <div className="drawer drawer-end flex justify-end">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar w-full bg-base-300">
              <div className="flex-none md:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            
            <ul className="menu min-h-full w-80 gap-2 bg-base-200">
            <div className="flex-none md:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </label>
              </div>
              <NavLink
                className="btn btn-ghost pb-5 text-2xl font-bold normal-case"
                to="/"
              >
                Qtemu
              </NavLink>
              {navigation.map((item) => (
                <li key={item.name} className="border-b">
                  <NavLink to={item.to} className="btn btn-ghost">
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden flex-auto justify-around font-medium md:flex">
        <ul className="menu menu-horizontal gap-8 p-0 ">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
