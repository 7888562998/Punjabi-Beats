import { NextResponse } from "next/server";

const avatarList = [
  {
    image: "/images/avatar/avatar_1.jpg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/avatar/avatar_2.jpg",
    title: "Olivia Miller",
  },
  {
    image: "/images/avatar/avatar_3.jpg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/avatar/avatar_4.jpg",
    title: "Isabella Clark",
  },
];

const statsFactData = {
  number: "01",
  name: "Stats & facts",
  heading: "High-Quality Video Upload Solutions You Can Trust.",
  description:
    "When choosing a platform to share your video songs, it's essential to consider reliability, user support, and features that fit your creative goals.",
  scoreData: [
    {
      number: 40,
      numberValue: "K",
      scoreDescp: "Creators who’ve shared their video songs with the world",
    },
    {
      number: 238,
      scoreDescp: "Experts available to support your creative journey",
    },
    {
      number: 3,
      numberValue: "M",
      scoreDescp:
        "Messages and live consultations delivered to help you succeed",
    },
  ],
};

const servicesData = {
  number: "03",
  name: "Services",
  heading: "What we do",
  description:
    "A glimpse into our creative platform—empowering artists to upload, share, and release original video songs. From upload to playlist release, we support you every step of the way.",
  data: [
    {
      id: 1,
      image: "/images/home/services/services_1.png",
      heading: "Video Song Upload",
      descp:
        "Easily upload your original video songs to our platform with just a few clicks.",
    },
    {
      id: 2,
      image: "/images/home/services/services_2.png",
      heading: "Content Review & Verification",
      descp:
        "Once uploaded, our team carefully reviews each submission within 14 days to ensure it meets quality and originality standards.",
    },
    {
      id: 3,
      image: "/images/home/services/services_3.png",
      heading: "Playlist Curation & Song Release",
      descp:
        "If your video is approved, it will be featured in one of our curated playlists—helping you reach new audiences and gain visibility.",
    },
    {
      id: 4,
      image: "/images/home/services/services_4.png",
      heading: "Artist Branding Support",
      descp:
        "We help emerging artists build their identity with customized artist pages and promotional tips.",
    },
    {
      id: 5,
      image: "/images/home/services/services_4.png",
      heading: "Performance Insights",
      descp:
        "Track views, likes, and engagement on your released songs with real-time analytics.",
    },
  ],
};

const testimonialData = {
  data_1: {
    preTitle: "Hear from them",
    title:
      "Our website redesign was flawless. They understood our vision perfectly!",
    author: "Albert Flores",
    company: "MasterCard",
  },
  data_2: {
    preTitle: "Hear from them",
    title:
      "From concept to execution, they delivered outstanding results. Highly recommend their expertise!",
    author: "Robert Fox",
    company: "Mitsubishi",
  },
  data_3: {
    preTitle: "Hear from them",
    title: "Super smooth process with incredible results. highly recommend!",
    author: "Jenny Wilson",
    company: "Pizza Hut",
  },
};

const teamData = {
  number: "06",
  data: [
    {
      image: "/images/home/team/team-img-1.png",
      name: "Martha Finley",
      position: "Creative Director",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
    {
      image: "/images/home/team/team-img-2.png",
      name: "Floyd Miles",
      position: "Marketing Strategist",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
    {
      image: "/images/home/team/team-img-3.png",
      name: "Glenna Snyder",
      position: "Lead Designer",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
    {
      image: "/images/home/team/team-img-4.png",
      name: "Albert Flores",
      position: "UX/UI Developer",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
  ],
};

const pricingData = {
  data: [
    {
      planName: "Basic Plan",
      planPrice: "$699",
      planDescp:
        "Perfect for new artists or small teams starting their journey.",
      planIncludes: [
        " Upload up to 20 video songs per month",
        "4-day content review by our expert team",
        "Eligibility for playlist placement after approval",
        "Artist profile setup & branding support",
        "Basic performance analytics (views, likes, shares)",
        "Email & live chat support",
      ],
    },
    {
      planName: "Medium Plan",
      planPrice: "$1,699",
      planDescp:
        "Great for growing creators or small labels looking to expand their reach.",
      planIncludes: [
        "Upload up to 60 video songs per month",
        "Priority 2-day content review",
        "Guaranteed consideration for featured playlists",
        " Advanced artist branding tools",
        "Full analytics dashboard (views, likes, watch time, engagement)",
        "Priority support via email & live chat",
      ],
    },
    {
      planName: "High Plan",
      planPrice: "$3,499",
      planDescp:
        "Ideal for professional artists, agencies, or labels with high-volume content needs.",
      planIncludes: [
        "Upload up to 120 video songs per month",
        "Fast-track 7-day content review",
        "Featured placement in top playlists",
        "Dedicated artist success manager",
        "Custom branding and promotional support",
        "Advanced performance analytics + monthly reports",
        "24/7 premium support",
      ],
    },    
  ],
  partnerLogo: [
    {
      light: "/images/home/pricing/partner-1.svg",
      dark: "/images/home/pricing/partner-dark-1.svg",
    },
    {
      light: "/images/home/pricing/partner-2.svg",
      dark: "/images/home/pricing/partner-dark-2.svg",
    },
    {
      light: "/images/home/pricing/partner-3.svg",
      dark: "/images/home/pricing/partner-dark-3.svg",
    },
    {
      light: "/images/home/pricing/partner-4.svg",
      dark: "/images/home/pricing/partner-dark-4.svg",
    },
    {
      light: "/images/home/pricing/partner-5.svg",
      dark: "/images/home/pricing/partner-dark-5.svg",
    },
  ],
};

const faqData = {
  data: [
    {
      faq_que: "What services does your agency offer?",
      faq_ans:
        "Yes, we offer a complete video song upload and release service—from secure uploads and quality review to playlist promotion and artist support.",
    },
    {
      faq_que: "How long does a typical project take?",
      faq_ans:
        "A typical project—from video upload to final approval and playlist release—takes up to 14 days, depending on content quality and review volume.",
    },
    {
      faq_que: "What’s the cost of a project?",
      faq_ans:
        "Upload your first video free — then pay per upload or get the Basic Plan with 20 videos/month.",
    },
  ],
};
const contactData = {
  keypoint: ["Always-On Customer Support", "Service Across the Globe"],
  managerProfile: {
    image: "/images/avatar/avatar_1.jpg",
    name: "Courtney Henry",
    position: "Onboarding & Success Manager",
  },
};

const aboutusStats = [
  {
    number: 45,
    postfix: "+",
    title: "Presence in global markets",
    descp:
      "Expanding reach across international regions with localized expertise and worldwide impact.",
  },
  {
    number: 15,
    prefix: "$",
    postfix: "M",
    title: "In strategic investments",
    descp:
      "Driving growth with curated partnerships and high-performing, audience-driven initiatives.",
  },
  {
    number: 158,
    postfix: "+",
    title: "Trusted brand collaborations",
    descp:
      "Shaping industry conversations through innovation, creativity, and lasting influence.",
  },
];

const servicesSliderData = [
  "Branding",
  "Web development",
  "Agency",
  "Content creation",
  "SaaS",
  "Motion & 3d modeling",
  "Photography",
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    statsFactData,
    servicesData,
    testimonialData,
    teamData,
    pricingData,
    faqData,
    contactData,
    aboutusStats,
    servicesSliderData,
  });
};
