import { Link } from "react-router-dom"

const ProductGridItem = ({ product }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-4">
      <div className="w-full md:w-52 md:h-52 relative cursor-pointer mx-auto">
        <Link to={product.id}>
          <img
            src={product.artwork}
            alt={product.album_title}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-md">{product.artist}</h3>
        <h4 className="text-sm text-gray-400">{product.album_title}</h4>
      </div>
    </div>
  )
}

export default ProductGridItem