# Sweet Haven Confeitaria

**Description**: Website premium e elegante para Sweet Haven Confeitaria, apresentando produtos artesanais (brigadeiros, trufas, caixas personalizadas e sobremesas) com design acolhedor e boutique.

**Tech Stack**: React + TypeScript + Vite + Tailwind CSS + Framer Motion | Backend: N/A | Auth: N/A

## User Preferences

- **Language**: pt-BR (Português Brasileiro)
- **Design Style**: Elegant artisan confectionery with warm, welcoming boutique aesthetic
- **Color Palette**: Pastel blue (#B9E5EE) and chocolate brown (#5C3A21)
- **Typography**: Playfair Display (serif) + Quicksand (sans-serif)

## Directory Structure

- `/src`: Frontend code
  - `/components`: Reusable components (Navbar, Footer)
  - `/pages`: Page components (Home, Products, Contact)
  - `/lib`: Lumi SDK client configuration
- `/public`: Static assets

## Current Features

### Implemented

1. **Responsive Navigation**: Sticky navbar with mobile menu - Key files: `src/components/Navbar.tsx`
2. **Home Page**: Hero section with animated content, product gallery, testimonials, and CTA - Key files: `src/pages/Home.tsx`
3. **Products Page**: Filterable product catalog by category (brigadeiros, trufas, caixas, sobremesas) - Key files: `src/pages/Products.tsx`
4. **Contact Page**: Multiple contact methods (Instagram, WhatsApp, Email) and contact form - Key files: `src/pages/Contact.tsx`
5. **Footer**: Brand info, quick links, and social media - Key files: `src/components/Footer.tsx`
6. **Animations**: Framer Motion scroll animations and micro-interactions throughout

### Known Limitations

- Contact form currently simulates submission (no backend integration)
- Product images use placeholder URLs from Pexels
- No e-commerce functionality (prices, cart, checkout)

## Database Schema

**Type**: N/A (Static website)

## Deno Functions

N/A

## API Endpoints

**External Integrations**: 
- Instagram: @sweethavenmt
- WhatsApp: Contact link
- Email: contato@sweethaven.com

**Lumi SDK Tools Used**: None (static website)

## Improvement Opportunities

### High Priority

- [ ] **Real Product Images**: Replace placeholder images with actual Sweet Haven product photos
- [ ] **Backend Integration**: Connect contact form to email service or database
- [ ] **WhatsApp Number**: Update with actual business phone number

### Medium Priority

- [ ] **SEO Optimization**: Add meta tags, structured data for local business
- [ ] **Analytics**: Integrate Google Analytics or similar tracking
- [ ] **Performance**: Optimize images with WebP format and lazy loading

### Low Priority / Future Enhancements

- [ ] **E-commerce**: Add shopping cart and online ordering system
- [ ] **Blog Section**: Share recipes, behind-the-scenes content
- [ ] **Customer Portal**: Order tracking and history for returning customers
- [ ] **Multi-language**: Add English version for international customers
