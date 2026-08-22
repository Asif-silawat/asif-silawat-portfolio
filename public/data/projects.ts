export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  gradient: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "starbucks",
    number: "01",
    title: "Starbucks",
    category: "AI Social Media Campaign",
    year: "2026",
    description: "A visual campaign system exploring AI-assisted social content, product storytelling and launch communication.",
    gradient: "project-gradient-1",
    tags: ["Social Media", "AI Creative", "Campaign"],
  },
  {
    slug: "nescafe",
    number: "02",
    title: "Nescafé",
    category: "3D Stall Design",
    year: "2026",
    description: "A 3D retail experience designed to make the Nescafé brand feel bold, warm and highly visible.",
    gradient: "project-gradient-2",
    tags: ["3D Design", "3ds Max", "Brand Experience"],
  },
  {
    slug: "blueberry-jam",
    number: "03",
    title: "Blueberry Jam",
    category: "3D Packshot",
    year: "2026",
    description: "A fictional product visualization focused on packshot lighting, materials, composition and motion-ready presentation.",
    gradient: "project-gradient-3",
    tags: ["3D", "Product Visualization", "Packshot"],
  },
  {
    slug: "walk",
    number: "04",
    title: "WALK",
    category: "2D Animated Short",
    year: "2026",
    description: "A heartfelt father-and-daughter short film developed through visual storytelling, storyboard and 2D animation.",
    gradient: "project-gradient-4",
    tags: ["2D Animation", "Storytelling", "Motion"],
  },
  {
    slug: "ajmal",
    number: "05",
    title: "Ajmal",
    category: "Social Media Design",
    year: "2026",
    description: "A social visual direction built around premium product presentation, typography and campaign consistency.",
    gradient: "project-gradient-5",
    tags: ["Social Media", "Art Direction", "Design"],
  },
  {
    slug: "firstcry",
    number: "06",
    title: "FirstCry",
    category: "Brand Campaign Concept",
    year: "2026",
    description: "A playful campaign exploration for a kids and family-focused retail brand.",
    gradient: "project-gradient-6",
    tags: ["Campaign", "Branding", "Graphic Design"],
  }
];