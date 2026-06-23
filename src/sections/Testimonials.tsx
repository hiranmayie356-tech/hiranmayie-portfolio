import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiMessageSquare, FiUser } from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  organization: string;
  avatarBg: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "Hiranmayie is one of the most proactive and intellectually curious CS students I have mentored. Her specialized focus on AWS cloud architecture, paired with her strong algorithms foundation, makes her a standout developer.",
      name: "Dr. Rajesh Kumar",
      role: "Head of Computer Science & Engineering",
      organization: "Academic Faculty Board",
      avatarBg: "bg-blue-100 text-blue-700",
    },
    {
      quote: "Coordinating our campus AWS Bootcamps alongside Hiranmayie was fantastic. She explains complex networking, Route53, and IAM roles elegantly, making hands-on labs fun and highly accessible for over a hundred students.",
      name: "Sneha Gupta",
      role: "Senior Student Partner & GDG Coordinator",
      organization: "Google Developer Groups On-Campus",
      avatarBg: "bg-green-100 text-green-700",
    },
    {
      quote: "Hiranmayie's capacity to architect and deploy cloud backends under tight hackathon pressure is outstanding. She single-handedly built our serverless EHR ledger on AWS, helping us win 1st place in the hackathon finals.",
      name: "Anirudh Sharma",
      role: "Full-Stack Dev & Teammate",
      organization: "Smart India Hackathon Winning Team",
      avatarBg: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold font-display text-secondary mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Recommendations
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="text-text-secondary">
            Feedback and commendations from university faculty, developer group leads, and hackathon engineering team members.
          </p>
        </div>

        {/* Swiper Slider */}
        <motion.div
          className="max-w-4xl mx-auto px-2 py-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="testimonials-swiper !pb-14"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="h-full glass-card p-8 sm:p-10 rounded-3xl border border-primary/10 shadow-sm relative text-center flex flex-col items-center justify-between cursor-grab active:cursor-grabbing">
                  {/* Glowing quote bubble decor */}
                  <div className="absolute top-6 left-6 text-primary/15 pointer-events-none">
                    <FiMessageSquare className="w-16 h-16 fill-current" />
                  </div>
                  
                  {/* Quote Body */}
                  <p className="text-base sm:text-lg italic text-text-primary leading-relaxed relative z-10 mb-8 max-w-2xl">
                    "{t.quote}"
                  </p>

                  {/* Profile info block */}
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${t.avatarBg} flex items-center justify-center shadow-sm border border-white/50 text-xl font-bold`}>
                      {t.name.split(' ').pop()?.[0] || <FiUser className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-secondary font-display">
                        {t.name}
                      </h4>
                      <p className="text-xs font-semibold text-accent">
                        {t.role} — <span className="text-text-secondary font-medium">{t.organization}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
