# WaterMe Monorepo

This repository contains the multi-platform WaterMe hydration tracker. The project is organised as a monorepo with Expo for the mobile client, dedicated watch applications, and Firebase infrastructure.

## Structure

```
apps/
  mobile/        # React Native + Expo application for iOS and Android
  wearos/        # Kotlin + Jetpack Compose Wear OS app
  watchos/       # SwiftUI Apple Watch app
packages/
  shared-types/  # Shared TypeScript types published via workspace
  shared-design/ # Shared design tokens and assets
infra/
  firebase/      # Firebase configuration, functions and rules
```

## Getting started

1. Install dependencies:
   ```bash
   npm install
   npm install --prefix apps/mobile
   ```
2. Run the Expo development server:
   ```bash
   npm run dev --workspace apps/mobile
   ```

Additional setup instructions are documented within each app directory.
