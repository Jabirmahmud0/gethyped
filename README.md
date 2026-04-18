# Get Hyped 🚀

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 

A high-performance, pixel-present, and visually striking marketing portal built with modern web technologies. This project demonstrates responsive layouts, complex interactions like fanned cards, scroll-driven animations, and a seamless smooth scrolling experience.

### 🔗 **[Live Demo](https://gethyped-ecru.vercel.app/)**

---

## ✨ Features

- **Pixel-Perfect Responsive Design**: Fluid UI that scales and adapts elegantly from mobile devices up to large desktop monitors.
- **Advanced Micro-Interactions**: Fanned card overlays, smooth tilt button hover-states, and custom sticky sections.
- **Lenis Smooth Scrolling**: Implementing native-feeling buttery smooth scroll with `lenis` to enhance the luxury feel of the application.
- **Modular Component Architecture**: Maintainable React project structure with discrete, reusable sections (Hero, Expertises, ClientMarquee, SelectedWork, Results, Footer).
- **Tailwind CSS v4 Integration**: Styling utilizing the newest version of Tailwind CSS for unmatched speed, flexibility, and minimal bundle sizes.

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animation/Scrolling**: Lenis (Smooth Scrolling)
- **Linting**: ESLint

---

## 📂 Project Structure
```text
src/
├── components/
│   ├── Hero/             # Introductory animated section and fanned cards layout
│   ├── Expertises/       # Sticky and layered expertise showcase
│   ├── ClientMarquee/    # Auto-scrolling logo banner
│   ├── SelectedWork/     # Project gallery and highlights
│   ├── Results/          # Metrics and impact summary
│   ├── Navigation/       # Responsive Navbar & full-screen mobile menu
│   └── Footer/           # Comprehensive links and CTA
```

---

## 🚀 Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Ensure you have Node.js and a package manager (like `npm`, `yarn`, or `pnpm`) installed.

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/gethyped.git
   ```

2. **Navigate into the directory:**
   ```sh
   cd gethyped
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Build for production:**
   ```sh
   npm run build
   ```

---

## 🎨 Design Achievements

* **The Mobile Menu Experience**: Overcame contextual styling defaults to create a full-screen, vibrant overlay using React Portals to guarantee z-index parity.
* **Complex Overlaps**: Utilized fine-tuned negative margins and interaction triggers to make cards "fan out" organically on hover.
* **Performant Marquee**: Engineered a CSS-driven infinite loop client marquee emphasizing 60fps performance without JavaScript overhead.

---

## 📄 License & Credits

Designed for visual impact and technical demonstration purposes.
