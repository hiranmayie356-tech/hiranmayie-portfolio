import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FiAward, FiExternalLink, FiCalendar, FiBriefcase } from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
  color: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      name: 'AWS Certification',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Cloud Path',
      credentialId: 'AWS-LEARNER-VALIDATED',
      link: 'https://aws.amazon.com/',
      color: 'from-[#FF9900]/10 to-[#FF9900]/5 border-[#FF9900]/25 text-[#FF9900]',
    },
    {
      name: 'AI Aware Badge',
      issuer: 'AI For All (CBSE & Intel)',
      date: '2025',
      credentialId: 'INTEL-AI-AWARE-BADGE',
      link: 'https://www.intel.in/',
      color: 'from-[#0071C5]/10 to-[#0071C5]/5 border-[#0071C5]/25 text-[#0071C5]',
    },
    {
      name: 'Industrial Internet of Things',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      date: '2025',
      credentialId: 'NPTEL-IIOT-COURSE',
      link: 'https://nptel.ac.in/',
      color: 'from-[#A78BFA]/10 to-[#A78BFA]/5 border-[#A78BFA]/25 text-[#A78BFA]',
    },
    {
      name: 'Blockchain and Its Applications',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      date: '2025',
      credentialId: 'NPTEL-BLOCKCHAIN-COURSE',
      link: 'https://nptel.ac.in/',
      color: 'from-[#10B981]/10 to-[#10B981]/5 border-[#10B981]/25 text-[#10B981]',
    },
    {
      name: 'Python Foundation Certification',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      credentialId: 'CISCO-PYTHON-FOUNDATION',
      link: 'https://www.netacad.com/',
      color: 'from-[#00b4d8]/10 to-[#00b4d8]/5 border-[#00b4d8]/25 text-[#00b4d8]',
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-[#03030C] relative overflow-hidden">
      {/* Background stardust accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#A78BFA]/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#38BDF8]/5 blur-3xl pointer-events-none z-0" />

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
            Certifications & Badges
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="text-text-secondary text-sm sm:text-base">
            Professional milestones, course completions, and cloud badges validating my technology expertise.
          </p>
        </div>

        {/* Carousel Swiper Container */}
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
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="certifications-swiper !pb-14"
          >
            {certifications.map((cert, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div
                  className={`h-full flex flex-col justify-between glass-card p-6 sm:p-8 rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group bg-gradient-to-tr ${cert.color.split(' ').slice(0, 2).join(' ')} ${cert.color.split(' ').slice(2, 3).join(' ')}`}
                >
                  {/* Glowing background decor */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors duration-300" />
                  
                  <div className="text-left">
                    {/* Header badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-sm text-text-secondary group-hover:bg-white/15 group-hover:text-accent transition-all duration-300">
                        <FiAward className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-text-secondary bg-white/5 border border-white/5 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {cert.date}
                      </span>
                    </div>

                    {/* Cert Title */}
                    <h3 className="text-lg font-bold text-white font-display mb-3 group-hover:text-accent transition-colors duration-300">
                      {cert.name}
                    </h3>

                    {/* Issuer */}
                    <p className="text-xs font-semibold text-text-secondary mb-3 flex items-center gap-2">
                      <FiBriefcase className="w-4 h-4 text-accent" />
                      {cert.issuer}
                    </p>

                    {/* Credential ID */}
                    <p className="text-[10px] text-text-secondary font-mono mb-6 bg-white/5 border border-white/5 rounded px-2.5 py-1 w-fit">
                      ID: {cert.credentialId}
                    </p>
                  </div>

                  {/* Action Link Button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:text-white text-white rounded-lg font-semibold text-sm transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    Verify Credential
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
