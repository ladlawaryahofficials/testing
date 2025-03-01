import React from "react";

const Home3 = () => {
  // Dummy data for products with PNG images
  const products = [
    {
      id: 1,
      name: "Colour Key Ring",
      price: "$50.00",
      image: "/path/to/key-ring.png", // Update with actual PNG image path
    },
    {
      id: 2,
      name: "Mobile Speed",
      price: "$70.00",
      image: "/path/to/mobile-speed.png", // Update with actual PNG image path
    },
    {
      id: 3,
      name: "Car Licence",
      price: "$30.00",
      image: "/path/to/car-licence.png", // Update with actual PNG image path
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Best Sellers</h2>

        {/* Product Grid with PNG Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
              style={{ height: "320px", width: "280px" }} // Adjusted height and width
            >
              {/* Product Image (PNG) */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain p-4" // Use object-contain for PNG images
              />

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.price}</p>
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home3;