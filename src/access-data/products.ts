export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const apiGetProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
};

export const getProducts = async ({
  page = 1,
  limit = 8,
}: {
  page?: number;
  limit?: number;
} = {}) => {
  try {
    const products = await apiGetProducts();
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    return {
      data: paginatedProducts as Product[],
      pagination: {
        total: products.length,
        currentPage: page,
        totalPages: Math.ceil(products.length / limit),
        hasMore: endIndex < products.length,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProduct = async (id: number) => {
  const products = await apiGetProducts();
  const found = products.find(
    (product: { id: number }) => id === product["id"],
  );
  return found;
};
