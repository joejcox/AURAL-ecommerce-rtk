import ButtonLink from "core/ButtonLink"
import NavbarLink from "core/Layout/Header/Navbar/NavbarLink"
import { Link } from "react-router-dom"
import { ShoppingBagIcon, SearchIcon } from "@heroicons/react/solid"
import MobileMenu from "components/MobileMenu"
import MobileMenuHamburger from "components/MobileMenu/MobileMenuHamburger"
import useToggleOpen from "hooks/useToggleOpen"
import useAuth from "hooks/useAuth"
import useCart from "hooks/useCart"
import CartPreview from "components/Cart/CartPreview"

const Navbar = () => {
  const { user, signout } = useAuth()
  const { cartQuantity } = useCart()

  const { isOpen, toggleOpen } = useToggleOpen(false)

  return (
    <>
      <nav className="hidden lg:block ml-6" role="navigation">
        <NavbarLink path="/">Home</NavbarLink>
        <NavbarLink path="/shop">Shop</NavbarLink>
        <NavbarLink path="/shop/vinyl">Vinyl</NavbarLink>
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
          <Link to="/cart" className="ml-3 relative">
            <span className="absolute -top-1 -right-1 rounded-full w-[1.1rem] h-[1.1rem] flex items-center justify-center bg-main-400 text-white font-primary font-extrabold text-xs">
              {cartQuantity}
            </span>
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
