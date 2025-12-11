import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    id: 1,
    video: "/video/1.mp4",
  },
  {
    id: 2,
    video: "/video/2.mp4",
  },
  {
    id: 3,
    video: "/video/3.mp4",
  },
  {
    id: 4,
    video: "/video/4.mp4",
  },
  {
    id: 5,
    video: "/video/1.mp4",
  },
  {
    id: 6,
    video: "/video/2.mp4",
  },
  {
    id: 7,
    video: "/video/3.mp4",
  },
  {
    id: 8,
    video: "/video/4.mp4",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    swiperRef.current.slideNext();
  };

  const goPrev = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it hear from the businesses we've helped transform.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}     // slick-style multi slides
              loop={true}           // infinite
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bg-card rounded-3xl p-4 border border-border">
                    <video
                      src={item.video}
                      playsInline
                      controls
                      className="w-full bg-black rounded-xl aspect-video md:aspect-[unset] md:min-h-[313px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:border-secondary hover:text-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
  {testimonials.map((_, index) => (
    <button
      key={index}
      onClick={() => swiperRef.current.slideToLoop(index)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        swiperRef.current?.realIndex === index
          ? "bg-secondary w-8"
          : "bg-border hover:bg-muted-foreground"
      }`}
    />
  ))}
</div>

            <button
              onClick={goNext}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:border-secondary hover:text-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
