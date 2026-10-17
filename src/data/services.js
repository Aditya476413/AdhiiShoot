export const CATEGORIES = [
  "All Services",
  "Events and Celebrations",
  "Invitations",
  "Reels and Editing",
  "Business Promotions"
];

export const SERVICES = [
  {
    id: "car-delivery",
    title: "Car Delivery Video",
    category: "Events and Celebrations",
    price: 2199,
    formattedPrice: "₹2,199",
    description: "Capture your new car unveiling moment with cinematic 4K gimbal rollouts, ribbon unveilings, emotional family smiles, and aggressive exhaust sound bites.",
    image: "/assets/images/car_delivery.jpg",
    badge: "Popular Shoot",
    requiresEventDetails: true,
    features: [
      "Showroom delivery & keys handover",
      "Gimbal 4K 60FPS slow-motion",
      "1 Viral 9:16 Reel + 1 Landscape cut",
      "Engine rev & music sound design",
      "48-hour express delivery"
    ]
  },
  {
    id: "wedding-videos",
    title: "Wedding Videos",
    category: "Events and Celebrations",
    price: 2499,
    formattedPrice: "₹2,499",
    description: "Cinematic wedding teaser and emotional highlight reel capturing romantic glances, pheras, guest joy, and sparkler moments.",
    image: "/assets/images/wedding.jpg",
    badge: "Cinematic Pick",
    requiresEventDetails: true,
    features: [
      "Ceremony highlight coverage",
      "Cinematic color grading & LUTs",
      "Romantic slow-motion footage",
      "High-fidelity audio mixing",
      "Vertical reel + full-HD cut"
    ]
  },
  {
    id: "housewarming-video",
    title: "Housewarming Video",
    category: "Events and Celebrations",
    price: 1499,
    formattedPrice: "₹1,499",
    description: "Heartwarming documentation of your Gruhapravesam pooja, new home walkthrough, family blessings, and celebratory memories.",
    image: "/assets/images/house_warming.jpg",
    badge: "Family Favorite",
    requiresEventDetails: true,
    features: [
      "Pooja ritual coverage",
      "Architectural walkthrough angles",
      "Family gathering candid shots",
      "Warm, graceful background score",
      "Quick shareable highlight reel"
    ]
  },
  {
    id: "bike-delivery",
    title: "Bike Delivery Video",
    category: "Events and Celebrations",
    price: 1899,
    formattedPrice: "₹1,899",
    description: "Superbike or motorcycle delivery video featuring exhaust sound design, key handover, showroom rollout, and high-octane edits.",
    image: "/assets/images/bike_delivery.jpg?v=2",
    badge: "Biker Special",
    requiresEventDetails: true,
    features: [
      "Aggressive speed ramp edits",
      "Cold exhaust start sound design",
      "Showroom unveil & key handover",
      "Dynamic rolling shots",
      "Instagram Reel ready (9:16)"
    ]
  },
  {
    id: "birthday-video-reel",
    title: "Birthday Video / Reel Edit",
    category: "Events and Celebrations",
    price: 1799,
    formattedPrice: "₹1,799",
    description: "Vibrant party coverage, cake-cutting excitement, candid smile captures, and high-energy music synchronization.",
    image: "/assets/images/birthday.jpg",
    badge: "Party Hit",
    requiresEventDetails: true,
    features: [
      "Cake cutting & sparkler moments",
      "Candid guest & family smiles",
      "Fast beat-synced transitions",
      "Color grading & light enhancements",
      "Ready-to-post vertical reel"
    ]
  },
  {
    id: "birthday-invitation",
    title: "Birthday Invitation",
    category: "Invitations",
    price: 999,
    formattedPrice: "₹999",
    description: "Animated motion graphic video invitation customized with your theme, venue details, photos, and catchy background score.",
    image: "/assets/images/birthday_invitation.jpg",
    badge: "Digital Invite",
    requiresEventDetails: false,
    features: [
      "Custom theme & typography",
      "Photo animations & transitions",
      "WhatsApp-optimized file size",
      "Map location details card",
      "Delivered within 24–48 hours"
    ]
  },
  {
    id: "wedding-invitation-card",
    title: "Wedding Invitation Card",
    category: "Invitations",
    price: 399,
    formattedPrice: "₹399",
    description: "Royal digital wedding e-card / motion invite designed with exquisite typography, auspicious motifs, and event itinerary.",
    image: "/assets/images/wedding_invitation.jpg",
    badge: "Budget Friendly",
    requiresEventDetails: false,
    features: [
      "Royal aesthetic typography",
      "Clickable Google Maps QR link",
      "High-res PDF & JPG formats",
      "Multi-function timeline cards",
      "Fast 24-hour turnaround"
    ]
  },
  {
    id: "shoot-and-reel-edit",
    title: "Shoot and Reel Edit",
    category: "Reels and Editing",
    price: 999,
    formattedPrice: "₹999",
    description: "On-location shoot with professional creator direction followed by viral-paced editing, color grade, and sound effects.",
    image: "/assets/images/shoot_and_edit.jpg",
    badge: "Creator Choice",
    requiresEventDetails: true,
    features: [
      "Creative posing & scene direction",
      "High-res shoot on gimbal rig",
      "Hook-optimized reel structure",
      "Trending music beat synchronization",
      "Sound design & cinematic LUTs"
    ]
  },
  {
    id: "only-reel-edit",
    title: "Only Reel Edit",
    category: "Reels and Editing",
    price: 499,
    formattedPrice: "₹499",
    description: "Send us your raw footage; we cut it with speed ramps, seamless transitions, beat matching, and aesthetic color grading.",
    image: "/assets/images/shoot_and_reel_edit.jpg",
    badge: "Express Edit",
    requiresEventDetails: false,
    features: [
      "Raw footage cutting & culling",
      "Seamless whip/zoom transitions",
      "Color grading & contrast pop",
      "Beat-matched cuts & pacing",
      "Express 24-hour delivery"
    ]
  },
  {
    id: "ai-reel-edit",
    title: "AI Reel Edit",
    category: "Reels and Editing",
    price: 699,
    formattedPrice: "₹699",
    description: "Next-gen AI enhanced reels featuring smart dynamic captions, viral auto-zooms, AI voice accents, sound enhancements, and visual effects.",
    image: "/assets/images/ai_reel_edit.jpg",
    badge: "AI Powered 🔥",
    requiresEventDetails: false,
    features: [
      "Animated karaoke-style captions",
      "AI audio noise removal & voice boost",
      "Smart auto-framing & dynamic zoom",
      "B-roll insertion & sound effects",
      "Viral retention optimization"
    ]
  },
  {
    id: "shop-video-edit",
    title: "Shop Video Edit",
    category: "Business Promotions",
    price: 399,
    formattedPrice: "₹399",
    description: "Professional edit of your existing store or product footage highlighting interior ambiance, customer experience, and offers.",
    image: "/assets/images/shop_edit.jpg",
    badge: "Retail Boost",
    requiresEventDetails: false,
    features: [
      "Footage clean-up & pacing",
      "Discount & offer lower thirds",
      "Brand logo watermark & CTA",
      "Licensed background music",
      "9:16 Instagram & Ad ready"
    ]
  },
  {
    id: "website-creation",
    title: "Website Creation",
    category: "Business Promotions",
    price: 3999,
    formattedPrice: "₹3,999",
    description: "Create a professional website for your brand to showcase your brand and business.",
    image: "/assets/images/website.jpg",
    badge: "High ROI",
    requiresEventDetails: false,
    features: [
      "One-Page Website",
      "Responsive Design",
      "Custom Content",
      "Social Media Integration",
      "24/7 Availability"
    ]
  }
];
