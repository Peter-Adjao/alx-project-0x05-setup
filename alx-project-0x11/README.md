# alx-project-0x09
# 🚀 Advance Image Generation App – 
 
A dynamic image generation app built with **Next.js**, **TypeScript**, and **Tailwind CSS**, leveraging **React Hooks** and GPT-4 API simulation. This project demonstrates how to manage application state with `useState`, handle user input, and structure a scalable frontend for AI-powered image prompts.

---

## 📁 Project Structure
alx-project-0x09/
│
├── components/
│   ├── common/
│   │   └── ImageCard.tsx          # Display generated image and prompt
│   │
│   └── layouts/
│       ├── Header.tsx             # Top navigation
│       ├── Footer.tsx             # Footer section
│       └── Layout.tsx             # Wrapper with header/footer
│
├── interfaces/
│   └── index.ts                   # TypeScript interfaces for props and state
│
├── pages/
│   ├── _app.tsx                   # Global layout application
│   └── index.tsx                  # Home page with image prompt input
│
├── styles/
│   └── globals.css                # Optional global styling
│
└── .env.local                     # Environment variables (GPT API key)



---

## Key Features

- React `useState` Hook for managing user input, loading, and generated content
- GPT-4 simulated image generation with secure API key handling via `.env.local`
- Responsive design with Tailwind CSS
- Modular and reusable component architecture
- Dynamic conditional rendering based on app state

