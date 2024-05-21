import { getProducts } from "@/actions/products"

type Products = {
  id: number
  title: string
  description: string
  price: number
}

const ProductsPage = async () => {
  const products = await getProducts()
  return (
    <div className="flex flex-col items-center w-full">
      {products.map((product: Products) => (
        <>
          <h1 key={product.id}>{product.title}</h1>
          <p>{product.description}</p>
        </>
      ))}
    </div>
  )
}

export default ProductsPage
