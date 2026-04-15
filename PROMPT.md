# Artisanal Gallery Web Application Prompt

To reproduce this application, use the following comprehensive prompt. It captures the design philosophy, technical stack, and specific feature set built for this project.

---

### **Core Identity & Tech Stack**
Create a high-end, responsive Single Page Application (SPA) for an artwork trading business called **"Artisanal Gallery"**. Use **React (Vite)**, **Tailwind CSS 4**, **Framer Motion**, and **shadcn/ui**.

### **Design Philosophy**
*   **Aesthetic**: Elegant, flat, minimalistic, and simple. Use light lines (1px borders) and strong typography to divide content instead of heavy shadows or containers.
*   **Grid**: Implement a strict **12-column grid system** for all layouts.
*   **Color Palette**: Strictly black and white primary. Use **Burgundy (`#8B2252`)** exclusively for accent highlights, notification labels (e.g., "Hot", "New"), and small UI cues.
*   **Typography**: Use **Inter** for all headings/titles and the **native system font stack** (San Francisco/Segoe UI) for body text.
*   **UI Elements**: Buttons and cards must have a **2px border radius**. Use **Lucide React** for outline-style icons only.

### **Navigation & Layout**
*   **Global Header**: Minimalist main navigation with a mobile hamburger menu.
*   **Sidebar Navigation**: Implement a second-level navigation as a left-hand sidebar for category-heavy pages (Artworks, About, Trading). This sidebar must collapse into a clean mobile-friendly horizontal scroll or drawer on small screens.

### **Page Specifications**
1.  **Homepage**: A cinematic hero section with a grayscale featured image, followed by a "Featured Works" grid and a minimalist CTA.
2.  **Artworks Collection**: A filterable gallery divided into "Masterpieces", "Contemporary", and "On Fair". Include a dedicated "Artist Search" section with a clean search input.
3.  **Artwork Detail**: A high-focus layout featuring the artwork image, price range, a "Story" accordion, and a "Certificate of Authenticity" section. Include a small artist bio card at the bottom.
4.  **Artist Detail**: A profile page showing the artist's bio and a grid of their available works.
5.  **Trading Services**: A text-heavy but elegantly spaced page detailing "Historical Value", "Logistics", and an exclusive "Artwork Club".
6.  **News & Insights**: An editorial-style feed of art market updates with large grayscale images and bold headlines.
7.  **About**: Sections for "Mission", "Partners" (logo grid), "Advisors", and a "Contact" form.

### **Advanced Features**
*   **SEO**: Integrate `react-helmet-async`. Every route must dynamically update the document `<title>`, `<meta name="description">`, and Open Graph tags (`og:title`, `og:image`) based on the specific artwork or artist being viewed.
*   **Animations**: Use `motion` for subtle staggered entrances, grayscale-to-color hover effects on images, and smooth page transitions.
*   **Data**: Use a centralized `data.ts` file to manage mock artwork and artist objects, ensuring consistent IDs for dynamic routing (e.g., `/artwork/:id`).
