# Tembea360 Frontend

A modern, responsive travel and tour booking platform built with React, Vite, and Tailwind CSS.

## 🌟 Features

### Core Features
- **Modern UI/UX**: Clean, responsive design with dark/light theme support
- **User Authentication**: Login, signup, and protected routes
- **Tour Discovery**: Browse and filter tours by category, price, and location
- **Booking System**: Multi-step booking process with payment integration
- **Professional Profiles**: Tour guide registration and profile management
- **Interactive Components**: Image galleries, search filters, and dynamic content

### Pages & Components
- **Homepage**: Hero section, featured tours, services, testimonials
- **Tours**: Comprehensive tour listing with advanced filtering
- **Tour Details**: Detailed tour information with booking functionality
- **Booking**: Multi-step booking process with guest and payment details
- **Profile**: User profile management and booking history
- **Professional Setup**: Tour guide onboarding and profile creation
- **Authentication**: Login and signup with form validation

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/afyacare/Tembea360-frontend.git
   cd Tembea360-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── Components/           # Main page components
│   ├── auth/            # Authentication components
│   ├── About.jsx        # About page
│   ├── Booking.jsx      # Booking process
│   ├── Contact.jsx      # Contact page
│   ├── Explore.jsx      # Tour exploration
│   ├── Homepage.jsx     # Landing page
│   ├── Payment.jsx      # Payment processing
│   ├── Profile.jsx      # User profile
│   ├── Tours.jsx        # Tour listings
│   └── ...
├── components/          # Reusable UI components
│   ├── HeroSection.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── context/             # React Context providers
│   ├── AuthContext.jsx  # Authentication state
│   └── ThemeContext.jsx # Theme management
├── App.jsx              # Main app component
└── main.jsx            # App entry point
```

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### Theme Support
- Light and dark mode toggle
- Consistent color schemes
- Smooth theme transitions

### Interactive Elements
- Image carousels and galleries
- Advanced search and filtering
- Real-time form validation
- Loading states and animations

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling with custom configurations:
- Custom color palette
- Extended spacing and typography
- Responsive breakpoints

### Environment Setup
Create a `.env` file for environment variables:
```env
VITE_API_URL=your_api_url
VITE_STRIPE_KEY=your_stripe_key
```

## 📱 Key Components

### Authentication System
- JWT-based authentication
- Protected routes
- User session management
- Form validation

### Booking Flow
1. Tour selection and date picking
2. Guest information collection
3. Payment processing
4. Confirmation and receipt

### Professional Dashboard
- Guide profile creation
- Portfolio management
- Availability scheduling
- Booking management

## 🌐 API Integration Ready

The frontend is structured to easily integrate with backend APIs:
- Centralized API service layer
- Error handling and loading states
- Mock data for development
- Authentication token management

## 🚀 Deployment

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

### Deployment Platforms
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern travel platforms
- Icons by Lucide React
- Images from Unsplash
- Built with React and Vite

## 📞 Support

For support and questions:
- Email: support@tembea360.com
- GitHub Issues: [Create an issue](https://github.com/afyacare/Tembea360-frontend/issues)

---

**Tembea360** - Discover Amazing Adventures 🌍