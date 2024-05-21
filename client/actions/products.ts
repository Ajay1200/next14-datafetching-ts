"use server"

export async function getProducts() {
  const res = await fetch("https://products-api.ajay-singh.workers.dev/products")
  const products = await res.json()

  return products
}
