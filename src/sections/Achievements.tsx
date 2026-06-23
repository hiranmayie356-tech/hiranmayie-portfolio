import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FiStar, FiUsers, FiCalendar, FiMapPin, FiAward, FiCheck } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface AchievementItem {
  title: string;
  role: string;
  host: string;
  date: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  color: string;
}

export default function Achievements() {
  const items: AchievementItem[] = [
    {
      title: 'Hacktrix 2026',
      role: 'First Runner-Up',
      host: 'Sri Sairam Institute of Science and Technology',
      date: '2026',
      description: 'A highly competitive 24-hour hackathon solving real-world digital challenges.',
      details: [
        'Collaborated with a technical team to develop innovative solutions.',
        'Demonstrated rapid problem-solving and teamwork skills in a time-capped sandbox environment.',
      ],
      icon: <FaTrophy className="w-6 h-6 text-[#F59E0B]" />,
      color: 'from-[#F59E0B]/10 to-[#F59E0B]/5 border-[#F59E0B]/25 text-[#F59E0B]',
    },
    {
      title: 'Hack-On 2026',
      role: 'First Runner-Up',
      host: 'Loyola College, Chennai',
      date: '2026',
      description: 'An intensive 8-hour sprint focusing on rapid ideation and product implementation.',
      details: [
        'Worked on rapid solution development under strict time constraints.',
        'Contributed directly to project ideation, system implementation, and presentation slides.',
      ],
      icon: <FiAward className="w-6 h-6 text-[#38BDF8]" />,
      color: 'from-[#38BDF8]/10 to-[#38BDF8]/5 border-[#38BDF8]/25 text-[#38BDF8]',
    },
    {
      title: 'Executive Member',
      role: 'Campus Life Cultural Club',
      host: 'Easwari Engineering College',
      date: 'Dec 2025 – Feb 2026',
      description: 'Campus leadership role coordinating student engagement initiatives.',
      details: [
        'Assisted in organizing, planning, and executing diverse campus events.',
        'Collaborated with team members to ensure smooth event operations and high participation.',
      ],
      icon: <FiUsers className="w-6 h-6 text-[#A78BFA]" />,
      color: 'from-[#A78BFA]/10 to-[#A78BFA]/5 border-[#A78BFA]/25 text-[#A78BFA]',
    },
    {
      title: 'Genesis Hackathon',
      role: 'Participant',
      host: 'Rotaract Club of Easwari Engineering College',
      date: '2026',
      description: 'A 24-hour innovation hackathon with a focus on community and social impact solutions.',
      details: [
        'Participated in collaborative problem-solving activities with cross-functional peers.',
        'Gained valuable experience working in a competitive innovation environment under pressure.',
      ],
      icon: <FiStar className="w-6 h-6 text-pink-400" />,
      color: 'from-pink-500/10 to-pink-500/5 border-pink-500/25 text-pink-400',
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-[#03030C] relative overflow-hidden">
      {/* Background space accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#A78BFA]/5 rounded-full blur-3xl pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-0 left-12 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold font-display text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Achievements & Leadership
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="text-text-secondary text-sm sm:text-base">
            Showcase of hackathon honors, technical innovation challenges, and campus leadership roles.
          </p>
        </div>

        {/* Carousel Container */}
        <motion.div
          className="relative px-2 py-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="achievements-swiper !pb-14"
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div
                  className={`h-full flex flex-col justify-between glass-card p-6 sm:p-8 rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group bg-gradient-to-tr ${item.color.split(' ').slice(0, 2).join(' ')} ${item.color.split(' ').slice(2, 3).join(' ')}`}
                >
                  {/* Glowing background decor */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors duration-300" />
                  
                  <div className="text-left">
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner group-hover:bg-white/15 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold text-text-secondary bg-white/5 border border-white/5 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>

                    {/* Role / Award Badge */}
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-accent bg-accent/15 px-2.5 py-0.5 rounded-md mb-3 border border-accent/10">
                      {item.role}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-1 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Host */}
                    <p className="text-xs font-semibold text-text-secondary mb-4 flex items-center gap-1.5">
                      <FiMapPin className="w-3.5 h-3.5 text-accent" />
                      Hosted by {item.host}
                    </p>

                    {/* Short description */}
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed border-b border-white/5 pb-3">
                      {item.description}
                    </p>

                    {/* Bullet List Details */}
                    <ul className="space-y-2 text-xs text-text-secondary leading-relaxed">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="p-0.5 bg-accent/10 rounded text-accent mt-0.5 flex-shrink-0">
                            <FiCheck className="w-3 h-3" />
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
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
