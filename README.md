# Yash Rai - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Welcome to my personal portfolio website built with Next.js! This project showcases my work, skills, and experience as a developer.

## 🚀 Features

- **Modern UI/UX** - Clean, responsive design built with modern web technologies
- **Performance Optimized** - Fast loading times and smooth animations
- **Project Showcase** - Detailed view of my projects with case studies
- **Blog Section** - Technical articles and tutorials
## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Type Checking**: TypeScript
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: Lucide Icons
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- bun
- docker (locally)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yasshrai/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   bun install
   ```

3. Run the development server
   ```bash
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Docker Deployment

To build and run the application using Docker:

1. Build the Docker image:
   ```bash
   docker build -t portfolio .
   ```

2. Run the Docker container:
   ```bash
   docker run --env-file .env.local -p 3000:3000 portfolio
   ```

## Required Environment Variables

The following environment variables must be set in your `.env.local` file for the application to function properly:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
- `NEXT_PUBLIC_ADMIN_UID`
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `NEXT_PUBLIC_BASE_URL`
- `UPLOADTHING_TOKEN`
- `MONGODB_URI`

These keys are required for Firebase, Resend, MongoDB, and other integrations. Obtain the values from your respective service providers and add them to `.env.local`.

## 🤝 Connect with Me

- [GitHub](https://github.com/yasshrai)
- [LinkedIn](https://linkedin.com/in/yasshrai)
- [Twitter](https://x.com/yasshraii)
- Email: yash2154rai@gmail.com

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by Yash Rai