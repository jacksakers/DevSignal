# DevSignal (v0.1.0-alpha)

The Open Source Discovery Engine. > A gamified platform connecting developers seeking experience with maintainers seeking contributors.

## 💻 The Concept

DevSource is a web platform designed to feel like home—specifically, your IDE. It acts as a social layer on top of GitHub, allowing developers to:

- Discover Projects: Find "Help Wanted" issues and projects formatted like code cards.

- Gain Experience: Track contributions (likes, suggestions, PRs) to build a verified "Experience Resume."

- Onboard Faster: Read "Human" READMEs optimized for getting you running locally.

The UI is strictly Desktop-First and modeled after the VS Code Dark+ theme. We believe the context switch between coding and finding work should be seamless.

## 🛠 Tech Stack

- Core: React + TypeScript

- Build Tool: Vite

- Styling: Tailwind CSS (Custom "Syntax Highlight" Theme)

- Backend/Auth: Firebase (Auth, Firestore, Hosting)

## 🚀 Getting Started

Follow these instructions to get the project running on your local machine.

1. Prerequisites

- Node.js (v18+)

- npm or yarn

- A Firebase Project (Free Tier)

2. Installation
```
# Clone the repository
git clone [https://github.com/your-username/devsource.git](https://github.com/your-username/devsource.git)

# Navigate into the directory
cd devsource

# Install dependencies
npm install
```

3. Environment Configuration

- You must configure Firebase for the app to run.

- Create a file named .env.local in the root directory.

- Paste the following configuration (replace with your Firebase keys):
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Running Locally
```
# Start the development server
npm run dev
```

Open http://localhost:5173 in your browser.

## 🏗 Architecture & Guidelines

We follow a strict "One Function Per File" architecture to maintain modularity.

### Directory Structure

src/
├── features/               # Large feature domains (Feed, Profile)
│   ├── feed/
│   │   ├── components/     # UI Components (One per file)
│   │   ├── logic/          # Pure logic functions
│   │   └── hooks/          # React Hooks
├── shared/                 # Reusable atoms (Buttons, Utilities)
└── services/               # External API Interactions (Firebase, GitHub)


### The "Atomic Rule"

Do not create utility "kitchen sink" files (e.g., no utils.ts).

If you need a function to format a date, create src/shared/utils/date/formatDate.ts.

### Documentation: Every exported function MUST have a JSDoc comment explaining inputs and outputs.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

- Check the Issues tab for "Good First Issues."

- Fork the repository.

- Create a feature branch (git checkout -b feature/AmazingFeature).

- Commit your changes (git commit -m 'feat: Add some AmazingFeature').

- Push to the branch (git push origin feature/AmazingFeature).

- Open a Pull Request.

## 📄 License

Distributed under the MIT License. See LICENSE for more information.
