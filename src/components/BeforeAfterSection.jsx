import React from "react";
import { PlayCircle, Image as ImageIcon } from "lucide-react";

const BeforeAfterSection = ({
  title = "Antes y después de nuestros trabajos",
  subtitle = "Mira cómo transformamos mobiliario real en soluciones más funcionales, cómodas y duraderas.",
  items = [],
  bgClass = "bg-gray-50",
}) => {
  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="p-6 text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  {item.type === "video" ? (
                    <PlayCircle size={28} />
                  ) : (
                    <ImageIcon size={28} />
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
              </div>

              <div className="px-6 pb-4">
                <div className="relative rounded-xl overflow-hidden bg-gray-100">
                  {item.type === "video" ? (
                    <video
                      src={item.media}
                      poster={item.poster || ""}
                      controls
                      className="w-full h-56 object-cover"
                    />
                  ) : (
                    <img
                      src={item.media}
                      alt={item.title}
                      className="w-full h-56 object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="px-6 pb-6">
                <p className="text-orange-700 font-semibold text-lg mb-2">
                  {item.beforeAfter || "Antes → Después"}
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.result && (
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm text-gray-700">
                    <span className="font-semibold text-gray-900">Resultado: </span>
                    {item.result}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
