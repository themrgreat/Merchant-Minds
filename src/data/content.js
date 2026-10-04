export const company = {
  name: 'Merchant Minds Inc',
  tagline: 'Simplifying Global Sourcing, Seamlessly',
  description:
    'Your trusted buying agent and sourcing partner, bridging global manufacturers with fast-growing brands and international retailers.',
  email: 'info@merchantminds.in',
  phone: '+91 98765 43210',
  address: 'New Delhi, India',
  founded: '2024',
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'What We Source', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'How We Work', path: '/#how-we-work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const footerLinks = [
  ...navLinks,
  { label: 'For Sourcing Agencies', path: '/sourcing-agencies' },
];

export const heroStats = [
  { value: '200+', label: 'Suppliers Network' },
  { value: '20+', label: 'Countries Served' },
  // { value: '10K+', label: 'Orders Completed' },
  { value: '24%', label: 'Client Satisfaction' },
];

export const services = [
  {
    id: 1,
    icon: '🔍',
    title: 'Strategic Product Sourcing',
    description:
      "We identify right-fit manufacturers aligned with your product category, quality benchmarks, and target margins — not just any factory.",
  },
  {
    id: 2,
    icon: '💬',
    title: 'Supplier Negotiations',
    description:
      'Our experienced professionals negotiate tightly with vendors to unlock savings without compromising on materials or finish.',
  },
  {
    id: 3,
    icon: '✅',
    title: 'Quality Control & Inspection',
    description:
      'Digital inspection tools, QR/barcode scanning, and cloud-based checklists ensure every shipment meets your quality standards.',
  },
  {
    id: 4,
    icon: '🤝',
    title: 'Supplier Coordination',
    description:
      'We act as your eyes and ears on the ground — managing communication, sampling approvals, and production timelines.',
  },
  {
    id: 5,
    icon: '🚢',
    title: 'Logistics & Export Support',
    description:
      'End-to-end shipment planning and execution. We ensure on-time delivery so you never miss a seasonal launch or deadline.',
  },
  {
    id: 6,
    icon: '🌿',
    title: 'Sustainable Sourcing',
    description:
      'Blockchain and IoT-enabled traceability for ethical sourcing, reduced carbon footprints, and compliance with international environmental standards.',
  },
];

export const whyUs = [
  {
    title: 'Curated Supplier Network',
    description:
      'Verified, high-quality manufacturers across Asia and beyond, pre-screened for quality and reliability.',
  },
  {
    title: 'End-to-End Management',
    description:
      'From product development to final delivery — negotiations, sampling, quality checks, and logistics all handled.',
  },
  {
    title: 'Cost Optimization',
    description:
      'Competitive pricing through tight negotiations without compromising quality or timelines.',
  },
  {
    title: 'Tech-Driven Communication',
    description:
      'Real-time updates and clear coordination reduce delays and misunderstandings across borders.',
  },
  {
    title: 'On-Time Shipments',
    description:
      'Our process avoids last-minute surprises so you meet seasonal launches and deadlines every time.',
  },
  {
    title: 'AI Trend Forecasting',
    description:
      'AI-driven tools (WGSN, Edited) help you source on-trend products earlier and avoid seasonal misses.',
  },
];

export const productCategories = [
  {
    id: 1,
    name: 'Furniture',
    description:
      'Handcrafted and factory-produced furniture sourced from verified Asian manufacturers, from solid wood to upholstered collections.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    tags: ['Accent Furniture', 'Occasional Tables', 'Chairs & Seating', 'Cabinets & Storage', 'Outdoor Furniture', 'Upholstered Furniture'],
  },
  {
    id: 2,
    name: 'Home Décor',
    description:
      'Statement décor pieces crafted with premium materials for global retail brands.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    tags: ['Decorative Objects', 'Vases & Planters', 'Sculptures', 'Wall Décor', 'Trays & Bowls', 'Candleholders & Votives', 'Mirrors'],
  },
  {
    id: 3,
    name: 'Tabletop & Kitchen',
    description:
      'Tableware, serveware and kitchen products in metal, wood and stainless steel for hospitality and retail.',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&q=80',
    tags: ['Tableware', 'Serveware', 'Kitchenware', 'Barware', 'Stainless Steel', 'Wood & Metal Products'],
  },
  {
    id: 4,
    name: 'Lighting',
    description:
      'Decorative and functional lighting developed to your design and compliance requirements.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
    tags: ['Table Lamps', 'Pendant Lights', 'Floor Lamps', 'Lanterns', 'Decorative Lighting'],
  },
  {
    id: 5,
    name: 'Textiles',
    description:
      'Home textiles from certified ethical mills across South Asia.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tags: ['Cushions', 'Throws', 'Rugs', 'Bed Linen', 'Table Linen', 'Upholstery'],
  },
  {
    id: 6,
    name: 'Gifting & Lifestyle',
    description:
      'Giftware, seasonal and corporate gifting ranges made for lifestyle retail.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80',
    tags: ['Giftware', 'Seasonal Products', 'Corporate Gifting', 'Lifestyle Accessories'],
  },
];

export const categoryNote = {
  title: "Don't see your category?",
  text: 'We source beyond our core categories based on your product brief.',
};

export const processSteps = [
  { step: '01', title: 'Product Development', description: 'Turn your concept, reference or tech pack into a production-ready product.' },
  { step: '02', title: 'Supplier Discovery', description: 'We identify and vet manufacturers suited to your category, quality and target cost.' },
  { step: '03', title: 'Sampling & Negotiation', description: 'Manage sampling, costing, materials, specifications and commercial negotiations.' },
  { step: '04', title: 'Production Management', description: 'Monitor production, timelines, quality and corrective actions.' },
  { step: '05', title: 'Quality Control', description: 'Inspection before shipment with documented reporting.' },
  { step: '06', title: 'Export & Logistics', description: 'Coordinate shipment execution from factory to destination.' },
];

export const agencyServices = [
  'Supplier discovery',
  'Product development',
  'Sampling',
  'Costing',
  'Factory negotiation',
  'Production follow-up',
  'QC',
  'Documentation',
  'Shipment coordination',
];

export const differentiators = [
  {
    icon: '🏭',
    title: 'Quality Control & Compliance',
    points: [
      'Digital inspection tools & QR/barcode scanning',
      'Cloud-based checklists and remote approvals',
      'Photo upload and inspection report tracking',
    ],
  },
  {
    icon: '🌱',
    title: 'Sustainable Sourcing',
    points: [
      'Blockchain & IoT raw material traceability',
      'Ethical labor practices throughout the chain',
      'Compliance with international environmental standards',
    ],
  },
  {
    icon: '📈',
    title: 'Faster Trend Adaptation',
    points: [
      'AI-driven forecasting via WGSN & Edited',
      'Source on-trend products weeks earlier',
      'Avoid costly seasonal misses for your business',
    ],
  },
];

export const missionVision = {
  mission:
    'To simplify global sourcing for international brands and retailers by acting as a reliable, tech-enabled buying agent that delivers quality, speed, and transparency at every step of the supply chain.',
  vision:
    'To become the most trusted sourcing partner for fast-growing brands worldwide — making global trade smarter, faster, and more sustainable.',
};
