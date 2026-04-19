export interface Agent {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: string;
  experience: string;
  yearsExp: string;
  bio: string;
  phone: string;
  email: string;
  specialties: string[];
  awards: { year: string; title: string }[];
  testimonial: string;
}

export const agents: Agent[] = [
  {
    id: "jeremy-dupont",
    name: "Jeremy Dupont",
    role: "Real Estate Director",
    image: "/jeremy-dupont-real-estate-director.jpg",
    rating: "4.9",
    yearsExp: "20",
    experience: "20 years of experience the many strands place lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore et magna.",
    bio: "Real estate development, or property development, is business process, and encompassing activities that range from the renovation and re-lease of existing buildings to the purchase of raw land and the sale of developed land or parcels to others.\n\nReal estate developers are the people and companies who for an coordinate all of these for activities, converting ideas from paper to real estate property.",
    phone: "123 456 7890",
    email: "jeremy@property.com",
    specialties: [
      "Property management",
      "Real estate development",
      "Real estate appraising",
      "Retail leasing",
      "Commercial shop and office",
      "Residential tenement and flat",
      "Waterfront and downtown",
      "Beacon hill and boston"
    ],
    awards: [
      { year: "2016", title: "Best executive real estate agent awward, London" },
      { year: "2018", title: "Super real estate agent awward, England" },
      { year: "2021", title: "Real estate agent of the year awward, California" }
    ],
    testimonial: "I've purchased several themes over the years and this theme, by far is absolutely amazing. It's built extremely well the back end was well thought out the design options are endless."
  },
  {
    id: "jessica-kerr",
    name: "Jessica Kerr",
    role: "Real Estate Manager",
    image: "/jessica-kerr-real-estate-manager.jpg",
    rating: "4.8",
    yearsExp: "15",
    experience: "15 years of experience leading teams and managing premium portfolios across the country. Specialized in residential complexes.",
    bio: "Jessica Kerr leads our management team with a focus on operational excellence and tenant satisfaction. With 15 years in the industry, she has managed some of the city's most prestigious residential developments. Her expertise lies in property optimization and maintaining high occupancy rates through superior service.",
    phone: "234 567 8901",
    email: "jessica@property.com",
    specialties: [
      "Property management",
      "Residential complexes",
      "Portfolio optimization",
      "Tenant relations"
    ],
    awards: [
      { year: "2019", title: "Manager of the Year, NY" }
    ],
    testimonial: "Jessica's attention to detail is unmatched. She managed our portfolio with incredible professionalism and results."
  },
  {
    id: "john-parker",
    name: "Matthew Taylor",
    role: "Real Estate Agent",
    image: "/matthew-taylor-real-estate-agent.jpg",
    rating: "4.9",
    yearsExp: "10",
    experience: "10 years of helping families find their perfect homes in suburban and urban environments. Expert in local market analysis.",
    bio: "John Parker is dedicated to helping individuals and families find their dream homes. With a decade of experience, John has developed a reputation for his patient, client-first approach and his encyclopedic knowledge of local neighborhoods.",
    phone: "345 678 9012",
    email: "john@property.com",
    specialties: [
      "Residential sales",
      "First-time buyers",
      "Market analysis",
      "Suburban properties"
    ],
    awards: [
      { year: "2020", title: "Rising Star Award" }
    ],
    testimonial: "John made finding our first home a breeze. He was patient and truly listened to what we needed."
  },
  {
    id: "matthew-taylor",
    name: "Matthew Taylor",
    role: "Real Estate Agent",
    image: "/matthew-taylor-real-estate-agent.jpg",
    rating: "4.9",
    yearsExp: "12",
    experience: "12 years of specialized experience in commercial real estate and luxury condominiums. Known for aggressive negotiation.",
    bio: "Matthew Taylor specializes in high-stakes commercial real estate and luxury condo sales. His 12 years in the field have been marked by a series of record-breaking deals.",
    phone: "456 789 0123",
    email: "matthew@property.com",
    specialties: [
      "Commercial real estate",
      "Luxury condominiums",
      "Negotiation",
      "Investment properties"
    ],
    awards: [
      { year: "2022", title: "Top Negotiator Award" }
    ],
    testimonial: "Matthew is a closer. He got us a deal we didn't think was possible on our commercial space."
  }
];

export interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  tag: "SELL" | "RENT";
  type: "Apartment" | "Condominium" | "Home" | "Office" | "Shop";
  beds: string;
  baths: string;
  sqft: string;
  agentId: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Ranch style in Illinois",
    location: "4403 Pick street pleasant view",
    price: "$6,00,000",
    image: "/ranch-style-home-illinois.jpg",
    tag: "SELL",
    type: "Home",
    beds: "03", baths: "05", sqft: "250",
    agentId: "jeremy-dupont"
  },
  {
    id: 2,
    name: "Modern villa in Oregon",
    location: "1261 Sampson street senver",
    price: "$8,50,000",
    image: "/modern-villa-denver-colorado.jpg",
    tag: "RENT",
    type: "Home",
    beds: "05", baths: "05", sqft: "780",
    agentId: "jessica-kerr"
  },
  {
    id: 3,
    name: "Luxury villa in Texas",
    location: "982 Monroe ave, rochester",
    price: "$6,89,000",
    image: "/luxury-villa-rochester-texas.jpg",
    tag: "SELL",
    type: "Home",
    beds: "04", baths: "05", sqft: "360",
    agentId: "john-parker"
  },
  {
    id: 4,
    name: "Ranch style in Florida",
    location: "2814 Hampton meadows",
    price: "$6,50,000",
    image: "/hampton-meadows-ranch-florida.jpg",
    tag: "SELL",
    type: "Home",
    beds: "04", baths: "04", sqft: "700",
    agentId: "matthew-taylor"
  },
  {
    id: 5,
    name: "Cottage in Oklahoma",
    location: "1151 Bungalow road norfolk",
    price: "$5,50,000",
    image: "/cottage-bungalow-norfolk-oklahoma.jpg",
    tag: "RENT",
    type: "Home",
    beds: "03", baths: "03", sqft: "300",
    agentId: "jeremy-dupont"
  },
  {
    id: 6,
    name: "Modern house in Texas",
    location: "3259 Filbert street bethlehem",
    price: "$6,95,000",
    image: "/woodland-modern-house-los-angeles.jpg",
    tag: "SELL",
    type: "Home",
    beds: "04", baths: "04", sqft: "620",
    agentId: "jessica-kerr"
  },
  {
    id: 7,
    name: "Luxury Apartment in NY",
    location: "5th Ave, Manhattan",
    price: "$2,500/mo",
    image: "/modern-villa-exterior-view.jpg",
    tag: "RENT",
    type: "Apartment",
    beds: "02", baths: "02", sqft: "120",
    agentId: "john-parker"
  },
  {
    id: 8,
    name: "Modern Office Space",
    location: "Downtown Chicago",
    price: "$5,000/mo",
    image: "/crafto-office-building-about-hero.webp",
    tag: "RENT",
    type: "Office",
    beds: "00", baths: "02", sqft: "1500",
    agentId: "matthew-taylor"
  },
  {
    id: 9,
    name: "Retail Shop Front",
    location: "Main Street, Austin",
    price: "$3,500/mo",
    image: "/modern-mansion-park-avenue-new-york.jpg",
    tag: "RENT",
    type: "Shop",
    beds: "00", baths: "01", sqft: "800",
    agentId: "jeremy-dupont"
  },
  {
    id: 10,
    name: "Penthouse Condominium",
    location: "Ocean Drive, Miami",
    price: "$4,200/mo",
    image: "/luxury-villa-mountain-view-boulder.jpg",
    tag: "RENT",
    type: "Condominium",
    beds: "03", baths: "03", sqft: "450",
    agentId: "jessica-kerr"
  }
];
