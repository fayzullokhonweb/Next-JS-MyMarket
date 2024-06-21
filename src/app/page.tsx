import Link from "next/link";
import { CgDetailsMore } from "react-icons/cg";

const request = async (url: string) => {
  const req = await fetch(url);
  const data = await req.json();
  return data;
};

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  price: number;
}

async function Home() {
  const data = await request("https://dummyjson.com/products");
  console.log(data);
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:font-[sans-serif] p-4 mx-auto lg:max-w-7xl md:max-w-3xl max-w-lg">
      {data &&
        data.products.map((product: Product) => (
          <li
            className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative"
            key={product.id}
          >
            <div className="">
              <div className="bg-gray-50 p-4 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="line-clamp-1 text-lg font-bold text-gray-800">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between mt-6">
                  <Link
                    href={`/product/${product.id}`}
                    className="p-3 rounded-full text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300"
                  >
                    <CgDetailsMore />
                  </Link>
                  <h4 className="text-lg text-gray-800 font-bold">
                    ${Math.round(product.price)}
                  </h4>
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default Home;
