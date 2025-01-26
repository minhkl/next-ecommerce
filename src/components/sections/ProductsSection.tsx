"use client";

import { Button } from "@/components/ui/button";
import { Product, getProducts } from "@/access-data/products";
import Image from "next/image";
import { useInfiniteQuery } from "@tanstack/react-query";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <div className="relative flex h-full w-full items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="scale-110 object-contain p-4 mix-blend-multiply duration-200 hover:scale-100"
            sizes="25vw"
          />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium">${product.price}</p>
        </div>
        <Button className="w-full" variant="outline">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

const ProductsSection = ({
  products: initialProducts,
}: {
  products: Product[];
}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      initialPageParam: 1,
      queryFn: async ({ pageParam }) => {
        const response = await getProducts({ page: pageParam, limit: 4 });
        return response;
      },
      getNextPageParam: (lastPage) =>
        lastPage.pagination.hasMore
          ? lastPage.pagination.currentPage + 1
          : undefined,
      initialData: {
        pages: [
          {
            data: initialProducts,
            pagination: {
              currentPage: 1,
              hasMore: true,
              total: 0,
              totalPages: 0,
            },
          },
        ],
        pageParams: [1],
      },
    });

  const allProducts = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Products</h2>
            <p className="text-gray-600">
              Explore our exclusive collection of top-quality items.
            </p>
          </div>
          <Button variant="outline">View all</Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {hasNextPage && (
          <div className="mt-8 text-center">
            <Button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              variant="outline"
              size="lg"
            >
              {isFetchingNextPage ? "Loading more..." : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
