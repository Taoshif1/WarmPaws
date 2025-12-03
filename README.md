# 🐾 WarmPaws - Pet Care in Winter

A cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe & healthy during the cold season.

## 🌐 Live URL
[Live Demo](https://warmpaws-e19b8.web.app/)

## 📋 Project Purpose
WarmPaws is a comprehensive web application that helps pet owners access winter care services for their pets. Users can explore various services including winter clothing, grooming, nutrition plans, emergency care & more. The platform features user authentication, service booking & profile management with a beautiful, responsive UI.

## ✨ Key Features

### 1. **Complete Authentication System**
   - Email/Password registration & login with validation
   - Google Sign-In integration for quick access
   - Password validation (uppercase, lowercase, minimum 6 characters)
   - Forgot password functionality with email reset
   - Password visibility toggle (eye icon) for better UX
   - Protected routes with automatic redirection to login
   - Seamless navigation back to intended page after authentication

### 2. **Service Management**
   - Browse 6+ winter pet care services with real images
   - Detailed service pages showing all information:
     - Service name, category & description
     - Provider name & contact email
     - Price, rating & available slots
   - Protected service details (login required)
   - Booking system with pre-filled user information
   - Real-time toast notifications for all actions
   - Category-based service organization

### 3. **User Profile Management**
   - View personal information dashboard
   - Update profile name & photo URL (Challenge requirement ✅)
   - Account statistics display
   - Protected profile access with authentication
   - Beautiful profile update form with validation

### 4. **Interactive UI/UX**
   - Fully responsive design (mobile, tablet, desktop)
   - Hero slider with auto-play and navigation (Swiper.js)
   - Smooth scroll animations throughout the site (AOS)
   - Modern minimalist winter-themed design
   - Sticky navigation bar for easy access
   - Beautiful 404 error page with navigation options
   - Loading spinners for better user experience

### 5. **Additional Content Sections**
   - **Winter Care Tips**: 4 essential tips for pet winter care
   - **Expert Vets Showcase**: 3 professional veterinarians
   - **Customer Testimonials**: Real reviews from pet owners
   - **Call-to-Action Sections**: Encouraging user engagement
   - **Contact Information**: Easy access to support

## 📦 NPM Packages Used

- **react-router-dom** (v7.9.4) - Client-side routing & navigation
- **firebase** (v12.4.0) - Authentication & backend services
- **react-hot-toast** (v2.6.0) - Beautiful toast notifications ✅
- **swiper** (v12.0.3) - Touch slider/carousel for hero section ✅
- **aos** (v2.3.4) - Animate On Scroll library ✅
- **react-icons** (v5.5.0) - Comprehensive icon library
- **tailwindcss** (v4.1.16) - Utility-first CSS framework
- **daisyui** (v5.3.8) - Tailwind CSS component library

*Note: 3+ required packages out of 5 from the challenge list are used (marked with ✅)*

## 🛠️ Technologies & Tools

- **Frontend Framework**: React.js 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.16 + DaisyUI 5.3.8
- **Authentication**: Firebase Auth 12.4.0
- **Routing**: React Router v7.9.4
- **State Management**: React Context API
- **Package Manager**: npm
- **Version Control**: Git & GitHub
- **Deployment**: Firebase Hosting & Netlify

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account (free tier)
- Git for version control

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/programming-hero-web-course2/b12-a9-firesheild-Taoshif1
cd warmpaws
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file in root directory**
```env
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id
```

4. **Run development server**
```bash
npm run dev
```
Visit: `http://localhost:5173`

5. **Build for production**
```bash
npm run build
```

## 📱 Features in Detail

### Authentication Flow
- Users can register with email/password or Google Sign-In
- Password validation enforces:
  - Minimum 6 characters
  - At least one uppercase letter
  - At least one lowercase letter
- Forgot password feature:
  - Sends reset email to user's inbox
  - Pre-fills email if entered on login page
  - Redirects to Gmail after sending
- Protected routes automatically redirect to login
- After login, users return to their intended destination

### Service Booking System
- Only logged-in users can view service details
- Booking form features:
  - Pre-filled name from user profile
  - Pre-filled email from user account
  - Simple Name + Email submission
  - Success toast notification on booking
  - Form clears automatically after submission
  - No backend required (frontend validation only)

### Profile Management (Challenge Feature ✅)
- View current profile information:
  - Profile photo
  - Display name
  - Email address
  - Account statistics
- Update functionality:
  - Change display name
  - Update profile photo URL
  - Email cannot be changed (Firebase restriction)
  - Uses Firebase `updateProfile()` method
  - Success notification on update
  - Page refresh to show new data

## 🔒 Security Features
- Environment variables for sensitive Firebase configuration
- Protected routes with authentication middleware
- Secure password validation on client and server side
- Firebase security rules for backend protection
- No sensitive data exposed in client code

## 📱 Responsive Design
- **Mobile** (320px - 768px): Single column layout, hamburger menu
- **Tablet** (768px - 1024px): Two-column grid, optimized spacing
- **Desktop** (1024px+): Full multi-column layout, enhanced features
- Sticky navigation bar on all screen sizes
- Touch-friendly buttons and interactions
- Optimized images for all devices

## 🎨 Design Philosophy
- **Minimalist**: Clean, uncluttered interface
- **Modern**: Contemporary design patterns
- **Winter Theme**: Cozy blue and purple color palette
- **Accessible**: High contrast, readable fonts
- **Interactive**: Smooth animations and hover effects
- **User-Friendly**: Intuitive navigation and clear CTAs

## 🌟 Challenge Requirements Met

✅ **Update Profile** - Functional profile update with `updateProfile()` method  
✅ **Forgot Password** - Working password reset with email pre-fill  
✅ **Gmail Redirect** - Opens Gmail after password reset  
✅ **Password Toggle** - Eye icon in login/register forms  
✅ **3+ NPM Packages** - react-hot-toast, swiper, AOS (all from required list)

## 🚢 Deployment Guide

### Firebase Hosting
```bash
npm run build
firebase init hosting
firebase deploy
```

### Netlify Deployment
1. Build: `npm run build`
2. Deploy `dist` folder to Netlify
3. Add `_redirects` file in `public/`:
   ```
   /*    /index.html   200
   ```
4. Add Netlify domain to Firebase authorized domains

### Post-Deployment Checklist
- ✅ Test all authentication flows
- ✅ Verify protected routes work
- ✅ Check all service links
- ✅ Test profile update
- ✅ Confirm toast notifications appear
- ✅ Validate responsive design
- ✅ Test on multiple browsers

## 📊 Project Statistics
- **Total Components**: 15+
- **Total Pages**: 7
- **Services Available**: 6+
- **Authentication Methods**: 2 (Email/Password, Google)
- **Responsive Breakpoints**: 3 (Mobile, Tablet, Desktop)
- **Animations**: 10+ (AOS + CSS)

## 🐛 Known Limitations
- Profile photo updates require page refresh
- Email cannot be changed after registration (Firebase limitation)
- Booking data is not stored (no backend implementation)
- Real-time updates not implemented (would require WebSockets)

## 🔮 Future Enhancements
- Add backend API for service bookings
- Implement real-time chat support
- Add payment gateway integration
- Create admin dashboard for service management
- Add booking history for users
- Implement email notifications
- Add review and rating system

## 📄 License
This is a private project created for educational purposes as part of the Programming Hero Web Development Course & not listed under MITs Open Source Code.

## 👨‍💻 Developer
**Gazi Taoshif**
- GitHub: [@Taoshif1](https://github.com/Taoshif1)
- Project Repository: [WarmPaws on GitHub](https://github.com/programming-hero-web-course2/b12-a9-firesheild-Taoshif1)

## 🙏 Acknowledgments
- **Programming Hero** for the comprehensive assignment requirements
- **Firebase** for authentication services and hosting
- **Unsplash** for high-quality pet images
- **React Community** for excellent documentation
- **DaisyUI** for beautiful component library

---

**Made with ❤️ for pets and their owners**  
© 2025 WarmPaws. All rights reserved.