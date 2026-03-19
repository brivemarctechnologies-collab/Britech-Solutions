import React, { useState } from "react";
import dashboardImages from "../data/dashboardImages.json";

type DashboardItem = {
  id: number;
  title: string;
  imgSrc: string;
};

const DashboardShowcase: React.FC = () => {
  const dashboards: DashboardItem[] = dashboardImages as DashboardItem[];

  // Lightbox state
  const [selectedImage, setSelectedImage] = useState<DashboardItem | null>(
    null,
  );

  const openModal = (item: DashboardItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-deep-black py-16 relative">
      <div className="section-container">
        <h2 className="text-4xl font-serif font-bold text-white text-center mb-12">
          Our <span className="gradient-text">Dashboard Interfaces</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dashboards.map((item: DashboardItem) => (
            <div
              key={item.id}
              className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer"
              onClick={() => openModal(item)}
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold text-lg text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-deep-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the modal itself
          >
            <button
              className="absolute top-2 right-2 text-gold-400 hover:text-gold-300 text-2xl font-bold z-50"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage.imgSrc}
              alt={selectedImage.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-white text-2xl font-semibold">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DashboardShowcase;
