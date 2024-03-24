import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sites", href: "/sites" },
  { name: "Forum", href: "/forum" },
];

function Nav() {
  return (
    <nav
      className="relative z-50 flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">...</span>
          <img
            className="w-auto h-8"
            src="image.png"
            alt=""
          />
        </a>
      </div>
      <div className="flex lg:hidden"></div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
