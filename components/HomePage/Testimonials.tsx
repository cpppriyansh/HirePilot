// components/HomePage/Testimonials.tsx
"use client";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jonas",
    role: "Product Designer @google",
    avatar: "https://avatar.vercel.sh/sarah1.svg?text=SJ",
    review:
      "Empower your product team to make smarter decisions and drive innovation with our advanced analytics platform.",
    timestamp: "3:02 AM",
    date: "Sep 27, 2024",
  },
  {
    id: 2,
    name: "Sarah Jonas",
    role: "Product Designer @google",
    avatar: "https://avatar.vercel.sh/sarah2.svg?text=SJ",
    review:
      "Empower your product team to make smarter decisions and drive innovation with our advanced analytics platform.",
    timestamp: "3:02 AM",
    date: "Sep 27, 2024",
  },
  {
    id: 3,
    name: "Sarah Jonas",
    role: "Product Designer @google",
    avatar: "https://avatar.vercel.sh/sarah3.svg?text=SJ",
    review:
      "Empower your product team to make smarter decisions and drive innovation with our advanced analytics platform.",
    timestamp: "3:02 AM",
    date: "Sep 27, 2024",
  },
  {
    id: 4,
    name: "Sarah Jonas",
    role: "Product Designer @google",
    avatar: "https://avatar.vercel.sh/sarah4.svg?text=SJ",
    review:
      "Empower your product team to make smarter decisions and drive innovation with our advanced analytics platform.",
    timestamp: "3:02 AM",
    date: "Sep 27, 2024",
  },
  {
    id: 5,
    name: "Sarah Jonas",
    role: "Product Designer @google",
    avatar: "https://avatar.vercel.sh/sarah5.svg?text=SJ",
    review:
      "Empower your product team to make smarter decisions and drive innovation with our advanced analytics platform.",
    timestamp: "3:02 AM",
    date: "Sep 27, 2024",
  },
  {
    id: 6,
    name: "Sarah Jonas",
    role: "Product Designer @google",
    avatar: "https://avatar.vercel.sh/sarah6.svg?text=SJ",
    review:
      "Empower your product team to make smarter decisions and drive innovation with our advanced analytics platform.",
    timestamp: "3:02 AM",
    date: "Sep 27, 2024",
  },
];

const stats = [
  {
    id: 1,
    value: "10k+",
    label: "User account active",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
  {
    id: 2,
    value: "97%",
    label: "User active users",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    id: 3,
    value: "22k+",
    label: "User account open",
    bgColor: "bg-teal-50",
    textColor: "text-teal-700",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4 will-change-transform">
      {/* User Info */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full ring-2 ring-gray-100"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-base">
            {testimonial.name}
          </h4>
          <p className="text-emerald-600 text-sm font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {testimonial.review}
      </p>

      {/* Timestamp */}
      <p className="text-gray-400 text-xs">
        {testimonial.timestamp} · {testimonial.date}
      </p>
    </div>
  );
};

export default function Testimonials() {
  // Triple the testimonials for seamless infinite loop
  const column1 = [...testimonials.slice(0, 2), ...testimonials.slice(0, 2), ...testimonials.slice(0, 2)];
  const column2 = [...testimonials.slice(2, 4), ...testimonials.slice(2, 4), ...testimonials.slice(2, 4)];
  const column3 = [...testimonials.slice(4, 6), ...testimonials.slice(4, 6), ...testimonials.slice(4, 6)];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">
            REAL TALK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Review's from our users
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Testimonials that speak louder than words! Our customers share their
            success stories
          </p>
        </div>

        {/* Marquee Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Column 1 */}
          <div className="relative h-[600px] overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

            <div className="marquee-column">
              {column1.map((testimonial, index) => (
                <TestimonialCard
                  key={`col1-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative h-[600px] overflow-hidden hidden md:block">
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

            <div className="marquee-column-2">
              {column2.map((testimonial, index) => (
                <TestimonialCard
                  key={`col2-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div className="relative h-[600px] overflow-hidden hidden lg:block">
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

            <div className="marquee-column-3">
              {column3.map((testimonial, index) => (
                <TestimonialCard
                  key={`col3-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto bg-gray-100 rounded-3xl ">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-5xl font-bold text-gray-800 mb-2">
                <span>{stat.value.replace(/[^0-9]/g, '')}</span>
                {stat.value.includes('+') && <span className="text-gray-900">+</span>}
                {stat.value.includes('%') && <span className="text-gray-900">%</span>}
              </h3>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeVertical {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, -33.333%, 0);
          }
        }

        .marquee-column,
        .marquee-column-2,
        .marquee-column-3 {
          animation: marqueeVertical 30s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .marquee-column-2 {
          animation-duration: 25s;
        }

        .marquee-column-3 {
          animation-duration: 35s;
        }

        .marquee-column:hover,
        .marquee-column-2:hover,
        .marquee-column-3:hover {
          animation-play-state: paused;
        }

        /* Force GPU acceleration */
        .marquee-column > *,
        .marquee-column-2 > *,
        .marquee-column-3 > * {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
