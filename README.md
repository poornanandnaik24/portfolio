# 🧠 Poornanand's Portfolio – Medical Imaging & Deep Learning

> A stunning, fully responsive personal portfolio website built with React.js, Framer Motion, and modern CSS — tailored for a Medical Imaging & Deep Learning researcher.

---

## ✨ Features

- **Animated Hero Section** – Custom typewriter effect, animated SVG brain visualization with neural network, particle effects, and floating tech badges
- **About Section** – Bio card with animated avatar ring + interactive career timeline
- **Skills Section** – Tabbed skill categories with animated progress bars (Deep Learning, Medical Imaging, Computer Vision, Tools)
- **Research Areas** – 6 curated research domains with color-coded metric cards and technique tags
- **Projects Section** – 6 real medical AI projects with category filters, GitHub/demo links, and performance metrics
- **Publications Section** – Peer-reviewed papers with citation counts, journal impact factors, DOI & arXiv links
- **Contact Section** – Functional contact form with social links
- **Premium UI** – Custom cursor, glassmorphism cards, animated grid background, scroll-triggered animations
- **Fully Responsive** – Optimized for all screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React.js 19 |
| Animations | Framer Motion |
| Styling | Vanilla CSS (CSS Variables) |
| Fonts | Space Grotesk, Inter, JetBrains Mono |
| Observer | react-intersection-observer |
| Deployment | GitHub Pages (`gh-pages`) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Run Locally

```bash
# Clone the repo
git clone https://github.com/poornanand/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📦 Deploy to GitHub Pages

1. **Update `homepage`** in `package.json` with your actual GitHub username:
   ```json
   "homepage": "https://<your-github-username>.github.io/portfolio"
   ```

2. **Push your code to GitHub**, then run:
   ```bash
   npm run deploy
   ```

3. In your GitHub repo: **Settings → Pages → Source → gh-pages branch**

---

## 📁 Project Structure

```
src/
├── components/
│   ├── CustomCursor.js     # Animated dual-ring cursor
│   ├── Navbar.js / .css    # Sticky glassmorphism navbar
│   ├── Hero.js / .css      # Landing + animated brain SVG
│   ├── About.js / .css     # Bio card + career timeline
│   ├── Skills.js / .css    # Tabbed animated skill bars
│   ├── Research.js / .css  # Research area cards
│   ├── Projects.js / .css  # Filterable project grid
│   ├── Publications.js/.css# Academic publications list
│   ├── Contact.js / .css   # Contact form + social cards
│   └── Footer.js / .css    # Site footer
├── App.js / App.css        # Root + animated loader
└── index.css               # Global design tokens
```

---

## 🎨 Customization Guide

- **Your Info**: Update all placeholder text (name, email, org names, GitHub/LinkedIn URLs) across component files
- **Colors**: Modify `--accent-cyan`, `--accent-purple`, etc. in `src/index.css`
- **Content Data**: Edit the data arrays at the top of `Skills.js`, `Projects.js`, `Publications.js`, `Research.js`
- **Resume**: Replace `/public/resume.pdf` with your actual resume PDF
- **Contact Form**: Integrate [EmailJS](https://emailjs.com/) or [Formspree](https://formspree.io/) in `Contact.js`

---

## 📬 Contact

**Poornanand** — Medical Imaging & Deep Learning Researcher  
📧 poornanand@example.com | [LinkedIn](https://linkedin.com/) | [Google Scholar](https://scholar.google.com/)

---

<p align="center">Built with ♥ using React & Framer Motion</p>
