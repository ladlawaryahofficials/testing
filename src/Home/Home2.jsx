import React from "react";

const Home2 = () => {
  // Dummy data for cards
  const cards = [
    {
      id: 1,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above $100.",
      icon: "🚚", // You can replace this with an icon or image
    },
    {
      id: 2,
      title: "14 Days Return",
      description: "Not satisfied? Return within 14 days for a full refund.",
      icon: "🔄", // You can replace this with an icon or image
    },
    {
      id: 3,
      title: "Secure Payment",
      description: "100% secure payment options for your safety.",
      icon: "🔒", // You can replace this with an icon or image
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gap above the cards (as per screenshot) */}
        <div className="mb-16"></div> {/* Adjust the margin as needed */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center"
              style={{ height: "250px", width: "300px" }} // Adjust height and width as per screenshot
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{card.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>

              {/* Description */}
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home2;