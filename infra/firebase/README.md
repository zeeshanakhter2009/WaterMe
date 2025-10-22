# Firebase Infrastructure

This directory contains the Firebase configuration for WaterMe, including Cloud Functions, Firestore security rules, and project metadata.

## Functions

- `onUserCreate`: Seeds a new profile with default settings when a Firebase Auth user is created.
- `onHydrationUpdate`: Updates the user's streak summary when a daily hydration document crosses the goal threshold.

Use `npm install` within the `functions` directory to bootstrap the TypeScript Cloud Functions project.
