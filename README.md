# Post Labs - Building the Future of Canadian Digital Media

A modern, responsive website for Post Labs, showcasing their mission to revolutionize Canadian digital media through innovative technology and sustainable journalism.

## 🚀 About Post Labs

Post Labs is rethinking how digital media works for Canadians. Our mission is simple: make journalism profitable, sustainable, and trusted – built for Canadians, by Canadians.

At its core is PostOS, our made-in-Canada publishing engine that connects local voices, communities, and trusted journalism in one seamless digital experience.

## ✨ Features

- *Modern Hero Section* - Interactive cursor effects and dynamic animations
- *Scroll-Triggered Animations* - GSAP-powered card animations with staggered reveals
- *Responsive Design* - Edge-to-edge layout optimized for all devices
- *Video Sections* - Dynamic video backgrounds with scroll-triggered effects
- *Interactive Elements* - Hover effects, custom cursors, and smooth transitions
- *Color Text Animation* - Progressive text color reveal on scroll
- *Floating Navigation* - Fixed bottom navigation with smooth animations
- *Marquee Banner* - Animated scrolling text with hover pause functionality

## 🛠 Tech Stack

- *Framework*: Next.js 14 (App Router)
- *Styling*: Tailwind CSS
- *Animations*: GSAP (GreenSock) + ScrollTrigger
- *Fonts*: Geist (Sans & Mono)
- *Images*: Next.js Image Optimization
- *Icons*: Custom SVG icons and PNG assets

## 🎨 Design Features

- *Edge-to-Edge Layout* - Full-width responsive design
- *Custom Cursor* - Interactive glow effect on desktop
- *Smooth Animations* - GSAP-powered scroll triggers and transitions
- *Modern Typography* - Responsive text scaling with Geist font
- *Dark/Light Sections* - Contrasting backgrounds for visual hierarchy

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
bash
git clone <repository-url>
cd post-labs


2. Install dependencies:
bash
npm install
# or
yarn install
# or
pnpm install


3. Run the development server:
bash
npm run dev
# or
yarn dev
# or
pnpm dev


4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure


src/
├── app/
│   ├── components/
│   │   ├── button.tsx          # Floating navigation buttons
│   │   ├── card.tsx            # Animated cards with GSAP
│   │   ├── colortext.tsx       # Scroll-triggered text animation
│   │   ├── footer.tsx          # Site footer
│   │   ├── hero.tsx            # Hero section with custom cursor
│   │   ├── marquee.tsx         # Animated scrolling banner
│   │   ├── video.tsx           # Video section with scroll effects
│   │   └── video-second.tsx    # Second video section
│   ├── globals.css             # Global styles and Tailwind
│   ├── layout.tsx              # Root layout with fonts
│   └── page.tsx                # Main page component
├── public/                     # Static assets (images, videos, icons)
└── ...


## 🎯 Key Components

### Hero Section (hero.tsx)
- Interactive custom cursor with glow effect
- Responsive typography scaling
- Arrow animation with GSAP

### Cards (card.tsx)
- Scroll-triggered stacked animation
- Fan-out effect with staggered timing
- Responsive grid layout

### Color Text (colortext.tsx)
- Progressive text color reveal
- Scroll-based animation triggers
- Word-by-word color transitions

### Floating Buttons (button.tsx)
- Fixed bottom navigation
- GSAP hover effects
- Scroll-triggered visibility

## 🎨 Customization

### Colors
The project uses a custom color palette defined in Tailwind config:
- Primary: Black (#000000)
- Background: Off-white (#fafaf5, #f9f9f5)
- Accent: Yellow gradient effects

### Animations
All animations are powered by GSAP and can be customized in their respective component files. Key animation features:
- ScrollTrigger for scroll-based animations
- Staggered timing for sequential reveals
- Custom easing functions for smooth motion

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Post Labs. All rights reserved.

## 📞 Contact

- *For Investors*: invest@postlabs.com
- *For Careers*: careers@postlabs.com
- *Website*: [postlabs.com](https://postlabs.com)

---

Built with ❤ for the future of Canadian media.