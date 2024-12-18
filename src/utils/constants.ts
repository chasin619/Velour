import { imageOptimizer } from "next/dist/server/image-optimizer";

export const BASE_URL = "https://velourweb-admin.vercel.app";

export const navList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Service",
    href: "/",
    targetAtr: "service",
  },
  {
    name: "Success Stories",
    href: "/",
    targetAtr: "review",
  },
  {
    name: "Portfolio",
    href: "/",
    targetAtr: "portfolio",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact us",
    href: "/",
    targetAtr: "contact-us",
  },
];

export const serviceData = [
  {
    content: "Custom Website Design and Hosting",
  },
  {
    content: "On-Page SEO (Search Engine Optimization) ",
  },
  {
    content: "Local SEO (Google Maps Optimization): We work with only one vendor per location to ensure there’s no competition among our clients.",
  },
  {
    content: "Facebook Marketing",
  },
];

export const portfolioData = [
  {
    imageUrl: "/portfolio-1.webp",
    title: "Wedding Florists website",
    headline: "Stunning websites for the art of floristry.",
    description:
      "Your floral designs are more than arrangements—they’re works of art that transform weddings into unforgettable experiences. At Velour Web, we specialize in crafting custom websites for wedding florists that showcase your unique style and creativity. ",
    
  },
  {
    imageUrl: "/portfolio-2.webp",
    title: "Wedding Planners website",
    headline: "Websites that showcase your perfect events.",
    description:
      "As a wedding planner, you create magical moments that couples will treasure forever. Your website should reflect the same level of elegance and professionalism that you bring to every event. At Velour Web, we design custom websites for wedding planners that capture your expertise and inspire trust in your clients.",
    direction: "row-reverse",
  },
  {
    imageUrl: "/portfolio-3.webp",
    title: "Wedding Venues website",
    headline: "Elegant websites to showcase your venue's charm.",
    description:
      "Your venue sets the stage for one of the most important days in a couple's life. At Velour Web, we create stunning websites for wedding venues that capture the beauty, elegance, and uniqueness of your space. A professionally designed website ensures your venue stands out and becomes the dream location for weddings and special events.",
  },
  {
    imageUrl: "/portfolio-4.webp",
    title: "Hair and Makeup Artists websites",
    headline: "Build trust with an elegant, professional website.",
    description:
      "Your artistry brings confidence and beauty to life’s most memorable moments. Whether it’s a bride’s big day or a glamorous event, your website should reflect your expertise and unique style. At Velour Web, we create stunning websites for hair and makeup artists that highlight your talent, build trust, and attract the clients you want.",
    direction: "row-reverse",
  },
];

export const blogData = [
  {
    title: "Should I study abroad?",
    slug: "should-i-study-abroad",
    content:
      "Learn the pros and cons of studying abroad and see how it can enrich your education, expand your horizons, and ignite new adventures...",
    author: "by Interstride",
    createdAt: "November 18, 2024",
    image: "https://picsum.photos/2000/2000?random=1",
  },
  {
    title: "The Benefits of Learning a New Language",
    slug: "the-benefits-of-learning-a-new-language",
    content:
      "Discover how learning a new language can boost your career, improve cognitive abilities, and connect you with new cultures.",
    author: "by Language Experts",
    createdAt: "November 12, 2024",
    image: "https://picsum.photos/2000/2000?random=2",
  },
  {
    title: "Top 10 Travel Destinations for Students",
    slug: "top-10-travel-destinations-for-students",
    content:
      "Explore the top travel destinations for students that offer affordability, fun activities, and unforgettable experiences.",
    author: "by Wanderlust",
    createdAt: "November 5, 2024",
    image: "https://picsum.photos/2000/2000?random=3",
  },
  {
    title: "How to Balance Studies and Work",
    slug: "how-to-balance-studies-and-work",
    content:
      "Learn practical tips to effectively manage your time and excel at both your studies and part-time job.",
    author: "by CareerCoach",
    createdAt: "October 30, 2024",
    image: "https://picsum.photos/2000/2000?random=4",
  },
  {
    title: "Scholarships for International Students",
    slug: "scholarships-for-international-students",
    content:
      "Find out about the best scholarships available for international students and how to apply for them.",
    author: "by Scholarship Finder",
    createdAt: "October 20, 2024",
    image: "https://picsum.photos/2000/2000?random=5",
  },
  {
    title: "Networking Tips for College Students",
    slug: "networking-tips-for-college-students",
    content:
      "Learn how to build a strong network during college that will benefit your future career and personal growth.",
    author: "by Networking Pro",
    createdAt: "October 10, 2024",
    image: "https://picsum.photos/2000/2000?random=6",
  },
  {
    title: "Understanding Cultural Differences",
    slug: "understanding-cultural-differences",
    content:
      "Discover how understanding and respecting cultural differences can enhance your personal and professional relationships.",
    author: "by Global Citizens",
    createdAt: "October 1, 2024",
    image: "https://picsum.photos/2000/2000?random=7",
  },
  {
    title: "How to Save Money While Studying Abroad",
    slug: "how-to-save-money-while-studying-abroad",
    content:
      "Explore practical tips on budgeting, finding discounts, and saving money as an international student.",
    author: "by Finance Gurus",
    createdAt: "September 25, 2024",
    image: "https://picsum.photos/2000/2000?random=8",
  },
];

export const reviews = [
  {
    text: "This platform has transformed our event planning process, making it incredibly efficient and visually appealing. From the intuitive interface to the exceptional customer support, everything has been thoughtfully designed to cater to our needs as wedding planners. The ease of use allows us to focus more on creative aspects without worrying about logistical complexities. https://arielchiu.com/",
    author: "Ariel Chiu",
    rating: 5,
    image: "/review-1.webp",
  },
  {
    text: "As a veteran in the wedding industry, I find the design and functionality of this website to be top-notch and very intuitive. The attention to detail is apparent, and the ability to customize various elements ensures that each event we plan is unique and memorable. Moreover, the responsive design means we can operate efficiently from any device, which is a huge benefit in our fast-paced environment.",
    author: "Samantha Lee",
    rating: 4,
    image: "/review-2.webp",
  },
  {
    text: "Excellent website https://www.scarletevents.com/ with great layout and easy navigation. It truly highlights our floral arrangements with elegance, bringing out the vibrant colors and intricate designs of our products. The high-resolution image gallery enhances the visual appeal, providing our clients with a realistic preview of what they can expect on their special day. Additionally, the SEO optimization has significantly increased our online visibility, attracting more customers to our business.",
    author: "Scarlet",
    rating: 5,
    image: "/review-3.webp",
  },
];
