# Next.js Chat Application

A modern real-time chat application built with Next.js, Firebase, and TypeScript.

## Features

-   💬 Real-time messaging
-   🔒 Firebase authentication
-   💾 Firestore database integration
-   ⚡ Server-side rendering with Next.js
-   🎨 Modern UI components
-   📱 Responsive design

## Tech Stack

-   [Next.js 15](https://nextjs.org/) - React framework
-   [Firebase](https://firebase.google.com/) - Backend and authentication
-   [TypeScript](https://www.typescriptlang.org/) - Type safety
-   [Tailwind CSS](https://tailwindcss.com/) - Styling

## Prerequisites

Before you begin, ensure you have:

-   Node.js 18.x or later
-   A Firebase project set up
-   npm or yarn package manager

## Environment Setup

Create a `.env.local` file in the root directory with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   └── ui/          # UI components
├── lib/             # Utility functions and Firebase setup
└── types/           # TypeScript type definitions
```

## Key Components

-   `chat-row.tsx` - Individual chat message component
-   `chat-messages.tsx` - Chat message container
-   `chatbox.tsx` - Message input component
-   `app-sidebar.tsx` - Application sidebar
-   `firebase.ts` - Firebase configuration and utilities

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Deployment

The application can be easily deployed on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo-name)

For other deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Support

For support, email thuyettvhe186110@fpt.edu.vn or open an issue in the repository.
