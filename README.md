# Nour Safwan Portfolio

This is a modern, multilingual portfolio website built with [Next.js](https://nextjs.org/), featuring advanced UI/UX, 3D globe visualizations, dark/light theme support, and full internationalization (English & Arabic).

## Features

- **Next.js App Router** with server and client components
- **Multilingual**: English & Arabic, with SEO-friendly alternate links
- **3D Globe**: Interactive globe visualization using Three.js and React Three Fiber
- **Animated UI**: Framer Motion, animated tooltips, and smooth transitions
- **Responsive Design**: Fully mobile-friendly and accessible
- **SEO Optimized**: Custom sitemap, Open Graph, and alternate language metadata
- **Performance**: Lazy-loaded heavy components, optimized images with Next.js `<Image />`
- **Analytics**: Integrated with Vercel Analytics and Speed Insights

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `app/[locale]/components/` - All UI components (Hero, Grid, Footer, etc.)
- `app/[locale]/globals.css` - Tailwind CSS and custom styles
- `public/` - Static assets (images, icons, etc.)
- `next-sitemap.config.js` & `app/sitemap.ts` - SEO and sitemap configuration
- `i18n/` - Internationalization and routing logic

## Customization

- **Translations:** Edit translation files in your i18n setup.
- **Projects/Experience:** Update the content in your translation JSON or data files.

## Deployment

Deploy easily on [Vercel](https://vercel.com/) for best performance and global CDN.

## Credits

- [Next.js](https://nextjs.org/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Framer Motion](https://www.framer.com/motion/)
- [next-intl](https://github.com/amannn/next-intl)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Author:** Nour Aldin Safwan  
**Live Demo:** [https://noursafwan.vercel.app](https://noursafwan.vercel.app)
