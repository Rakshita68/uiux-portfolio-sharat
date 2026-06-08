import { Icons } from "@/components/icons";
import {
  PenTool,
  Bot,
  Globe,
  Search,
  MessageSquare,
  Network,
  Workflow,
  PencilRuler,
  Layers,
  ClipboardCheck,
  MousePointerClick,
  HomeIcon,
  NotebookIcon
}from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Sharat Naik",
  initials: "SN",
  location: "Banglore, 560102 ",
  url: "https://tinyurl.com/sharatportfolio",
  description:
    " Hi, I'm Sharat Naik, a UI/UX Designer with 2+ years of experience crafting user-centered digital experiences.",
  summary:
    "  I specialize in UX research, user flows, wireframing, prototyping, and high-fidelity interface design using Figma. By combining AI tools like Claude with modern design workflows, I accelerate ideation, problem-solving, and product innovation. I also build responsive websites and prototypes using Framer and WordPress.My approach is rooted in research, clarity, and usability—ensuring every design decision solves real user problems while supporting business goals. I enjoy creating products that are intuitive, accessible, and impactful from the first interaction to the final experience.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Figma", icon: PenTool },
{ name: "Claude AI", icon: Bot },
{ name: "Framer", icon: PenTool },
{ name: "WordPress", icon: Globe },
{ name: "UX Research", icon: Search },
{ name: "User Interviews", icon: MessageSquare },
{ name: "Information Architecture", icon: Network },
{ name: "User Flows", icon: Workflow },
{ name: "Wireframing", icon: PencilRuler },
{ name: "Prototyping", icon: PenTool },
{ name: "Design Systems", icon: Layers },
{ name: "Usability Testing", icon: ClipboardCheck },
{ name: "Responsive Design", icon: Globe },
{ name: "Interaction Design", icon: MousePointerClick },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
   
  ],
  contact: {
    email: "sharatrnk7@gmail.com",
    tel: "+91 8197708677",
    social: {
      Figma: {
        name: "Portfolio",
        url: "https://tinyurl.com/sharatportfolio",
        icon: Icons.figma,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sharatnaik7",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      
      Github: {
        name: "Github",
        url: "https://github.com/Sharatnk7",
        icon: Icons.github,

        navbar: true,
      },
     
      email: {
        name: "Send Email",
        url: "mailto:sharatnk7@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ADPCX",
      href: "https://www.linkedin.com/company/adpcx/",
      badges: [],
      location: "Bengaluru, Karnataka ",
      title: "UI/UX Designer",
      logoUrl: "/atomic.png",
      start: "September 2025",
      end: "Present",
      description:
        "Designed end-to-end user experience and user interface solutions for enterprise AI and legal-tech platforms. Created sketches, wireframes, high-fidelity mockups, prototypes, and written design specifications.Verified user interface designs through reviews, validations, and formal usability testing with end users. Collaborated with product owners and engineering teams using Agile / Lean UX methodologies.",
    },
    {
      company: "Atal & Daughters LLP",
      badges: [],
      href: "https://www.linkedin.com/company/aadllp/",
      location: "Bengaluru, Karnataka ",
      title: "User Experience Designer",
      logoUrl: "/shopify.png",
      start: "September 2024",
      end: " September 2025",
      description:
        " Designed enterprise UX for a B2B digital signage platform. Conducted verification of user interface designs through UX reviews and usability testing.",
    },
    {
      company: "MIS Champ",
      href: "https://www.linkedin.com/company/mis-champ/",
      badges: [],
      location: "Bengaluru, Karnataka",
      title: "User Experience designer Intern",
      logoUrl: "/nvidia.png",
      start: "May 2024",
      end: "September 2024",
      description:
        " Designed interaction flows, wireframes, mockups, and prototypes for web-based products. Supported UX validation and design reviews with development teams.",
    },
    {
      company: "Institution IQ",
      href: "#",
      badges: [],
      location: "Bengaluru, Karnataka",
      title: "UX Intern",
      logoUrl: "#",
      start: "November 2023",
      end: "April 2024",
      description:
        " Designed UX solutions for enterprise education platforms. Supported usability testing with end users.",
    },
    
  ],
  education: [
    {
      school: "Alva's Institute of Engineering and Technology",
      href: "#",
      degree: "Bachelor of Engineering - Computer Science and Engineering",
      logoUrl: "/buildspace.jpg",
      start: "September 2020",
      end: "May 2024",
    },
    {
      school: "Aspira Design Institution",
      href: "#",
      degree: "UI/UX Design Program",
      logoUrl: "/waterloo.png",
      start: "June 2024",
      end: "October 2024",
    },
    
  ],
  projects: [
    {
      title: "ProCare Customer Service Platform",
      href: "/projects/videos/procare.mp4",
      dates: "Jan 2026 - Feb 2026",
      active: true,
      description:
    "Designed a modern customer service and support platform focused on improving customer engagement, service accessibility, and support efficiency. The platform provides users with seamless access to assistance, service management, issue resolution, and customer communication through an intuitive and user-centered experience.",
      technologies: [
        "Figma",
        "UX Research",
        "Wireframing",
        "Prototyping",
        "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/procare.jpg",
      video:
        "",
    },
    {
      title: "Dietary Preference Food Delivery App",
      href: "/projects/videos/food.mp4",
      dates: "Oct 2025 - Nov 2025",
      active: true,
      description:
        "Designed a food delivery application focused on dietary preferences, enabling users to discover meals based on their nutritional goals and eating habits. The app provides personalized recommendations, healthy meal exploration, dietary filters, and a seamless food ordering experience.",
      technologies: [
        "Figma",
        "UX Research",
        "User Flows",
        "Wireframing",
        "Prototyping",
        "Mobile UI Design",
        "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "c",
          icon: <Icons.figma className="size-3" />,
        },
        
      ],
      image: "/projects/covers/food.jpg",
      video: "",
    },
    {
      title: "Novatio – AI-Powered Business Solutions Landing Page",
      href: "/projects/videos/novatio.mp4",
      dates: "Sep 2025 - Oct 2025",
      active: true,
      description:
            "Designed a modern landing page for Novatio, an AI-powered business transformation platform. The design focuses on showcasing AI solutions, building trust through partner credibility, and driving user engagement with clear call-to-actions and conversion-focused layouts.",

      technologies: [
         "Figma",
         "Landing Page Design",
         "UX Research",
         "Wireframing",
         "Prototyping",
         "Responsive Design",
         "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
        
      ],
      image: "/projects/covers/novatio.jpg",
      video: "",
    },
    {
      title: "LeapScholar – Study Abroad Recommendation Platform",
      href: "/projects/videos/leap.mp4",
      dates: "Aug 2025 - Sep 2025",
      active: true,
      description:
    "Designed an AI-powered study abroad platform that helps students discover suitable universities based on their academic profile, preferences, and career goals. The platform simplifies the university selection process through personalized recommendations and an intuitive user experience.",
      technologies: [
        "Figma",
      "UX Research",
    "User Flows",
    "Wireframing",
    "Prototyping",
    "Responsive Design",
    "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/leap.jpg",
      video:
        "",
    },
    {
      title: "Juicy – Interactive Juice Brand Landing Page",
      href: "/projects/videos/juicy.mp4",
      dates: "July 2025 - Aug 2025",
      active: true,
      description:
                "Designed a vibrant and engaging landing page for a juice brand featuring playful hover interactions, smooth animations, and visually appealing product showcases. The experience focuses on creating an immersive and memorable brand presence while encouraging user engagement through dynamic micro-interactions.",

      technologies: [
         "Figma",
    "UI Design",
    "Landing Page Design",
    "Interaction Design",
    "Hover Animations",
    "Prototyping",
    "Responsive Design",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
        
      ],
      image: "/projects/covers/juicy.jpg",
      video: "",
    },
    {
      title: "PayApp – Digital Payment & Money Transfer App",
      href: "/projects/videos/payapp.mp4",
      dates: "Jun 2025 - jul 2025",
      active: true,
      description:
    "Designed a secure and user-friendly digital payment application that enables seamless money transfers, bill payments, transaction tracking, and financial management. The design focuses on simplicity, trust, and accessibility to provide users with a smooth and reliable payment experience.",
      technologies: [
         "Figma",
    "UX Research",
    "Mobile UI Design",
    "User Flows",
    "Wireframing",
    "Prototyping",
    "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/payapp.jpg",
      video:
        "",
    },

    {
      title: "Myntra Mobile App Redesign",
      href: "/projects/videos/myntra.mp4",
      dates: "May 2025 - jun 2025",
      active: true,
      description:
    "Redesigned the Myntra mobile shopping experience to improve product discovery, browsing, and user engagement. The design focuses on intuitive navigation, category-based filtering, seamless shopping flows, and visually appealing product presentations to create a modern and enjoyable fashion shopping experience.",
      technologies: [
        "Figma",
    "UX Research",
    "Mobile UI Design",
    "User Flows",
    "Wireframing",
    "Prototyping",
    "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/myntra.jpg",
      video:
        "",
    },

    {
      title: "Flipkart Mobile App Redesign",
      href: "/projects/videos/flip.mp4",
      dates: "Apr 2025 - May 2025",
      active: true,
      description:
    "Redesigned the Flipkart mobile shopping experience to enhance product discovery, search efficiency, and checkout usability. The design focuses on streamlined navigation, personalized recommendations, intuitive filtering options, and a seamless purchasing journey to improve user satisfaction and engagement.",
      technologies: [
         "Figma",
    "UX Research",
    "Mobile UI Design",
    "User Flows",
    "Wireframing",
    "Prototyping",
    "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/flip.jpg",
      video:
        "",
    },
    
    {
      title: "AR/VR Experience Landing Page",
      href: "/projects/videos/arvr.mp4",
      dates: "Mar 2025 - Apr 2025",
      active: true,
      description:
    "Designed a modern and immersive landing page for an AR/VR platform, showcasing virtual experiences, interactive features, and next-generation technology. The design emphasizes engaging visuals, smooth user journeys, and clear call-to-actions to effectively capture user interest and drive conversions.",
      technologies: [
          "Figma",
    "UX Research",
    "Landing Page Design",
    "Wireframing",
    "Prototyping",
    "Visual Design",
    "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/arvr.jpg",
      video:
        "",
    },

    {
      title: "GitHub Landing Page Redesign",
      href: "/projects/videos/ghub.mp4",
      dates: "Feb 2025 - Mar 2025",
      active: true,
      description:
    "Redesigned GitHub's landing page to create a more engaging and developer-focused experience. The design improves content hierarchy, highlights collaboration features, and presents GitHub's tools and services through a modern, visually appealing interface that enhances user engagement and product discovery.",
      technologies: [
         "Figma",
    "UX Research",
    "Landing Page Design",
    "Wireframing",
    "Prototyping",
    "Visual Design",
    "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/ghub.jpg",
      video:
        "",
    },

    {
      title: "FitLife – Fitness & Wellness E-Commerce Store",
      href: "/projects/videos/fit.mp4",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
    "Designed a modern fitness and wellness e-commerce platform that enables users to discover and purchase health-focused products, supplements, fitness equipment, and wellness essentials. The design emphasizes intuitive product browsing, personalized shopping experiences, and a seamless checkout journey to promote healthy lifestyles.",
      technologies: [
         "Figma",
    "UX Research",
    "E-Commerce Design",
    "User Flows",
    "Wireframing",
    "Prototyping",
    "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/fit.jpg",
      video:
        "",
    },

    {
      title: "EduGlobal – Revolutionizing International Studies with a Unified Digital Ecosystem",
      href: "/projects/videos/int.mp4",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
    "Designed a comprehensive digital platform that streamlines the international education journey by connecting students, universities, consultants, and support services within a unified ecosystem. The platform simplifies study-abroad planning through centralized access to university discovery, application tracking, document management, and student support services.",
      technologies: [
         "Figma",
    "UX Research",
    "EdTech Design",
    "User Flows",
    "Wireframing",
    "Prototyping",
    "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/int.jpg",
      video:
        "",
    },

     {
      title: "Dashboard Design",
      href: "/projects/videos/dash.mp4",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
    "Designed a comprehensive B2B dashboard that enables organizations to manage operations, monitor business performance, track key metrics, and streamline workflows through a centralized platform. The interface prioritizes usability, scalability, and efficient business management.",
      technologies: [
             "Figma",
    "B2B Product Design",
    "Dashboard Design",
    "Data Visualization",
    "User Flows",
    "Wireframing",
    "Design System",

      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/dash.jpg",
      video:
        "",
    },

    {
      title: "Business Card Design Collection",
      href: "/projects/videos/bcards.mp4",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
    "Designed professional business cards for multiple brands including TrendBiz, MIS Champ, SR Industrial Essentials, and ITAS. The designs focused on creating strong brand identities through effective typography, visual hierarchy, color systems, and professional layouts that enhance brand recognition and communication.",
      technologies: [
             "Figma",
    "Brand Identity Design",
    "Graphic Design",
    "Typography",
    "Visual Design",
    "Print Design",

      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/bcards.jpg",
      video:
        "",
    },

    {
      title: "Creative Advertisement Design Collection",
      href: "/projects/videos/ad.mp4",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
    "Designed a collection of high-impact creative advertisements for digital marketing campaigns across various industries. The designs focused on capturing audience attention through compelling visuals, persuasive messaging, strong branding, and conversion-driven layouts optimized for social media and online platforms.",
      technologies: [
             "Figma",
    "Graphic Design",
    "Advertising Design",
    "Social Media Design",
    "Visual Design",
    "Branding",
    "Creative Strategy",

      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/ad.jpg",
      video:
        "",
    },

     {
      title: "Corporate Brochure Design Collection",
      href: "/projects/videos/broch.mp4",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
    "Designed professional corporate brochures that effectively communicate brand identity, services, and key business information through visually engaging layouts. The designs focused on clear information hierarchy, strong visual storytelling, brand consistency, and print-ready presentation for marketing and business communication.",
      technologies: [
             "Figma",
    "Brochure Design",
    "Graphic Design",
    "Typography",
    "Brand Identity",
    "Print Design",
    "Visual Communication",

      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/broch.jpg",
      video:
        "",
    },

    {
      title: "Corporate Business Profile Design Collection",
      href: "/projects/videos/bpro.mp4",
      dates: "Jul 2024 - Aug 2024",
      active: true,
      description:
    "Designed professional business profiles for organizations across multiple industries, showcasing company vision, services, achievements, capabilities, and brand identity through visually engaging layouts. The profiles were created to strengthen corporate presence, support business development efforts, and communicate value propositions effectively to clients and stakeholders.",
      technologies: [
             "Figma",
    "Business Profile Design",
    "Corporate Branding",
    "Graphic Design",
    "Typography",
    "Layout Design",
    "Visual Communication",

      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/bpro.jpg",
      video:
        "",
    },

     {
      title: "Form Builder Dashboard",
      href: "/projects/videos/formdash.mp4",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
    "Designed a comprehensive form builder dashboard that enables users to create, customize, manage, and analyze forms through an intuitive drag-and-drop interface. The platform streamlines form creation workflows, response management, and data collection while providing powerful analytics and user-friendly controls.",
      technologies: [
              "Figma",
    "Dashboard Design",
    "SaaS Product Design",
    "UX Research",
    "User Flows",
    "Wireframing",
    "Prototyping",
    "Design System",

      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/formdash.jpg",
      video:
        "",
    },

     {
      title: "Authentication & Login Experience Design Collection",
      href: "/projects/videos/login.mp4",
      dates: "May 2024 - Jun 2024",
      active: true,
      description:
    "Designed a collection of modern authentication experiences including login, signup, password recovery, OTP verification, and social sign-in flows. The designs focus on usability, accessibility, security, and seamless onboarding to create frictionless user experiences across web and mobile platforms.",
      technologies: [
              "Figma",
    "UI Design",
    "UX Research",
    "Authentication Design",
    "User Flows",
    "Wireframing",
    "Prototyping",
    "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/login.jpg",
      video:
        "",
    },

     {
      title: "Homepage Design Collection",
      href: "/projects/videos/home.mp4",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
    "Designed a collection of modern homepage experiences for websites and digital products across various industries. The designs focus on creating strong first impressions through engaging visuals, clear information hierarchy, intuitive navigation, and conversion-focused user experiences that effectively communicate brand value.",
      technologies: [
              "Figma",
    "UI Design",
    "UX Research",
    "Landing Page Design",
    "Visual Design",
    "Wireframing",
    "Prototyping",
    "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/home.jpg",
      video:
        "",
    },

     {
      title: "Corporate Website Design",
      href: "/projects/videos/web.mp4",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
    "Designed a modern and responsive business website focused on delivering a seamless user experience and strong brand presence. The design emphasizes clear navigation, structured content presentation, visual consistency, and conversion-driven layouts to effectively communicate services and engage visitors.",
      technologies: [
             "Figma",
    "UI Design",
    "UX Research",
    "Website Design",
    "Wireframing",
    "Prototyping",
    "Responsive Design",
    "Design System",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/web.jpg",
      video:
        "",
    },

    {
      title: "TrendBiz Brand Book Design",
      href: "/projects/videos/brand.mp4",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description:
    "Designed a comprehensive brand book for TrendBiz, establishing clear brand guidelines and visual standards to ensure consistency across digital and print communications. The project included logo usage guidelines, color systems, typography rules, brand applications, visual identity standards, and marketing collateral guidelines to strengthen brand recognition and maintain a cohesive brand experience.",
      technologies: [
             "Figma",
    "Brand Identity Design",
    "Brand Strategy",
    "Visual Design",
    "Typography",
    "Color Systems",
    "Graphic Design",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/brand.jpg",
      video:
        "",
    },

    {
      title: "TrendBiz Corporate Portfolio Design",
      href: "/projects/videos/trpro.mp4",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
    "Designed a professional corporate portfolio for TrendBiz to showcase the company's services, expertise, achievements, and business capabilities. The portfolio was crafted to strengthen brand credibility, communicate value propositions effectively, and create a compelling presentation for potential clients, partners, and stakeholders through structured layouts and engaging visual storytelling.",
      technologies: [
             "Figma",
    "Corporate Portfolio Design",
    "Brand Identity Design",
    "Graphic Design",
    "Typography",
    "Layout Design",
    "Visual Communication",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/trpro.jpg",
      video:
        "",
    },

    {
      title: "Instagram Post Design Collection",
      href: "/projects/videos/insta.mp4",
      dates: "Dec 2023 - Jan 2024",
      active: true,
      description:
    "Designed a collection of engaging Instagram posts for brands across various industries, focusing on visual storytelling, audience engagement, and brand consistency. The designs were created to strengthen social media presence, promote products and services, increase brand awareness, and drive user interaction through creative and impactful content.",
      technologies: [
             "Figma",
    "Social Media Design",
    "Graphic Design",
    "Brand Identity",
    "Visual Design",
    "Content Marketing",
    "Creative Strategy",
      ],
      links: [
        {
          type: "Figma",
          href: "https://tinyurl.com/sharatportfolio",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/projects/covers/insta.jpg",
      video:
        "",
    },
  ],
  hackathons: []
    
  
} as const;
