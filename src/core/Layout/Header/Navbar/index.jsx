import ButtonLink from "core/ButtonLink"
import NavbarLink from "core/Layout/Header/Navbar/NavbarLink"
import { Link } from "react-router-dom"
import { ShoppingBagIcon, SearchIcon } from "@heroicons/react/solid"
import MobileMenu from "components/MobileMenu"
import MobileMenuHamburger from "components/MobileMenu/MobileMenuHamburger"
import useToggleOpen from "hooks/useToggleOpen"
import useAuth from "hooks/useAuth"
import CartPreview from "components/Cart/CartPreview"

const Navbar = () => {
  const { user, signout } = useAuth()

  const { isOpen, toggleOpen } = useToggleOpen(false)

  return (
    <>
      <nav className="hidden lg:block ml-6" role="navigation">
        <NavbarLink path="/">Home</NavbarLink>
        <NavbarLink path="/shop">All Products</NavbarLink>
        <NavbarLink path="/shop/vinyl">Shop Vinyl</NavbarLink>
      </nav>
      <div className="ml-auto flex items-center relative">
        <CartPreview />
        <div className="hidden lg:inline-block">
          {user ? (
            <button
              className="text-white bg-black inline-block py-2 px-4 uppercase font-primary font-extrabold hover:bg-gray-800"
              onClick={signout}
            >
              Sign Out
            </button>
          ) : (
            <ButtonLink classes="bg-black hover:bg-gray-800" path="/sign-in">
              Sign In
            </ButtonLink>
          )}
        </div>
        <div className="lg:ml-6 flex items-center">
          <button>
            <SearchIcon className="w-6" />
          </button>
          <Link to="/cart" className="ml-3">
            <ShoppingBagIcon className="w-6" />
          </Link>
          <MobileMenuHamburger isOpen={isOpen} toggleOpen={toggleOpen} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  )
}

export default Navbar
