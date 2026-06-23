import { motion } from 'framer-motion';
import { FiCheckCircle, FiPlay, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { DiAws } from 'react-icons/di';

interface RoadmapNode {
  id: number;
  title: string;
  status: 'completed' | 'active' | 'planned';
  statusLabel: string;
  skills: string[];
  services: string[];
  description: string;
}

export default function CloudJourney() {
  const nodes: RoadmapNode[] = [
    {
      id: 1,
      title: 'Cloud Foundations',
      status: 'completed',
      statusLabel: 'Completed',
      description: 'Understanding virtualization, cloud deployment strategies, pricing fundamentals, and the AWS Shared Responsibility Model.',
      skills: ['Cloud Economics', 'Security Basics', 'IAM IAM Principles'],
      services: ['AWS IAM', 'AWS Cost Explorer'],
    },
    {
      id: 2,
      title: 'AWS Core Services',
      status: 'completed',
      statusLabel: 'Completed',
      description: 'Provisioning virtual machines, configuring block & object storage systems, and launching relational and serverless computing modules.',
      skills: ['Compute Scaling', 'Object Storage Lifecycles', 'Serverless execution'],
      services: ['Amazon EC2', 'Amazon S3', 'Amazon RDS', 'AWS Lambda'],
    },
    {
      id: 3,
      title: 'Networking & Content Delivery',
      status: 'completed',
      statusLabel: 'Completed',
      description: 'Designing secure subnets, configuring internet and NAT gateways, managing public DNS domains, and accelerating global file deliveries.',
      skills: ['VPC Architecture', 'Subnet Partitioning', 'DNS Routing', 'CDN Caching'],
      services: ['Amazon VPC', 'Route 53', 'Amazon CloudFront', 'Application Load Balancers (ALB)'],
    },
    {
      id: 4,
      title: 'Security & Governance',
      status: 'active',
      statusLabel: 'Active Learning',
      description: 'Implementing least-privilege security policies, key encryptions, secrets storage, and central compliance monitoring.',
      skills: ['Infrastructure Encryption', 'Secrets Rotation', 'Compliance Logs Audit'],
      services: ['AWS KMS', 'Secrets Manager', 'AWS CloudTrail', 'AWS GuardDuty'],
    },
    {
      id: 5,
      title: 'DevOps & Infrastructure as Code (IaC)',
      status: 'active',
      statusLabel: 'Active Learning',
      description: 'Automating standard resource deployments, scripting CI/CD pipeline triggers, and managing docker containers in scalable clusters.',
      skills: ['CI/CD Orchestration', 'Declarative Infrastructure', 'Containerization'],
      services: ['AWS CodePipeline', 'AWS CodeBuild', 'Terraform / CloudFormation', 'Docker'],
    },
    {
      id: 6,
      title: 'Advanced Cloud Architectures',
      status: 'planned',
      statusLabel: 'Planned Next Step',
      description: 'Designing globally distributed, serverless, microservices architectures utilizing event-driven queues, caching, and streaming nodes.',
      skills: ['Event-Driven Microservices', 'Global DB Replication', 'Message Broker Queuing'],
      services: ['AWS ECS / Fargate', 'Amazon DynamoDB', 'Amazon EventBridge', 'Amazon SQS / SNS'],
    },
  ];

  return (
    <section id="cloud-journey" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Dynamic Background decor */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF9900]/10 text-[#FF9900] font-semibold text-xs rounded-full uppercase tracking-wider mb-4">
            <DiAws className="w-5 h-5" />
            AWS Specialization Path
          </div>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold font-display text-secondary mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Cloud Journey
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="text-text-secondary">
            A visual roadmap detailing my step-by-step progress and specialized goals as an aspiring Cloud Engineer.
          </p>
        </div>

        {/* Roadmap Roadmap Timeline Structure */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Central Vertical Connector Spine */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 z-0" />

          {/* Node items */}
          <div className="space-y-12">
            {nodes.map((node, idx) => {
              const isEven = idx % 2 === 0;
              const isCompleted = node.status === 'completed';
              const isActive = node.status === 'active';
              
              return (
                <div
                  key={node.id}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } relative z-10`}
                >
                  
                  {/* Central Node Badge Dot */}
                  <div
                    className={`absolute left-6 md:left-1/2 w-8 h-8 rounded-full flex items-center justify-center -translate-x-1/2 shadow-sm border-2 z-20 ${
                      isCompleted
                        ? 'bg-[#FF9900] border-[#FF9900] text-white'
                        : isActive
                        ? 'bg-white border-[#FF9900] text-[#FF9900] animate-[pulse_2s_infinite]'
                        : 'bg-white border-slate-300 text-slate-400'
                    }`}
                  >
                    {isCompleted ? (
                      <FiCheckCircle className="w-4 h-4" />
                    ) : isActive ? (
                      <FiPlay className="w-3.5 h-3.5 fill-current" />
                    ) : (
                      <FiCalendar className="w-3.5 h-3.5" />
                    )}
                  </div>

                  {/* Left Column Spacer for desktop symmetry */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content card Column */}
                  <motion.div
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left"
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 75, damping: 14 }}
                  >
                    <div className="glass-card p-6 sm:p-8 rounded-2xl border border-primary/10 shadow-sm relative group hover:border-[#FF9900]/30 transition-colors duration-300">
                      
                      {/* Step Indicator */}
                      <span className="text-[10px] font-extrabold text-[#FF9900] uppercase tracking-widest block mb-2 font-mono">
                        Step 0{node.id}
                      </span>

                      {/* Header Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-secondary font-display group-hover:text-[#FF9900] transition-colors duration-300">
                          {node.title}
                        </h3>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border ${
                            isCompleted
                              ? 'bg-green-50 border-green-200 text-green-700'
                              : isActive
                              ? 'bg-[#FF9900]/10 border-[#FF9900]/20 text-[#FF9900]'
                              : 'bg-slate-50 border-slate-200 text-slate-500'
                          }`}
                        >
                          {node.statusLabel}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {node.description}
                      </p>

                      {/* Core Skills section */}
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                          Core Competencies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {node.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-semibold bg-white border border-slate-100 px-2 py-0.5 rounded shadow-sm text-text-secondary"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* AWS Services focus */}
                      <div>
                        <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1">
                          Services Target
                          <FiArrowRight className="w-3 h-3 text-[#FF9900]" />
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {node.services.map((service, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-bold bg-[#FF9900]/5 text-[#FF9900] border border-[#FF9900]/10 px-2 py-0.5 rounded"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
