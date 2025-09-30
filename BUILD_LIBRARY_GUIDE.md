# Building and Publishing Your Component Library

## Overview

This guide shows how to convert your component library into a distributable npm package that can be used in any React project.

---

## 📦 Option 1: Publish to npm (Public/Private)

### Step 1: Update package.json

```json
{
  "name": "@your-username/ui-components",
  "version": "1.0.0",
  "description": "Production-ready React component library",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./digital-health": {
      "import": "./dist/digital-health/index.mjs",
      "require": "./dist/digital-health/index.js",
      "types": "./dist/digital-health/index.d.ts"
    },
    "./payment": {
      "import": "./dist/payment/index.mjs",
      "require": "./dist/payment/index.js",
      "types": "./dist/payment/index.d.ts"
    }
  },
  "files": [
    "dist",
    "README.md"
  ],
  "keywords": [
    "react",
    "components",
    "typescript",
    "tailwind",
    "ui-library",
    "healthcare",
    "dashboard"
  ],
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  },
  "dependencies": {
    "chart.js": "^4.5.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "typescript": "^5.2.2",
    "tsup": "^8.0.0"
  },
  "scripts": {
    "build:lib": "tsup",
    "prepublishOnly": "npm run build:lib"
  }
}
```

### Step 2: Create tsup.config.ts

```typescript
// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'index': 'ui/index.ts',
    'digital-health/index': 'ui/components/digital-health/index.ts',
    'payment/index': 'ui/components/payment/index.ts',
    'dashboard-sidebar/index': 'ui/components/dashboard-sidebar/index.ts',
    'defi-earn/index': 'ui/components/defi-earn/index.ts',
    // Add other domains as needed
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
});
```

### Step 3: Create ui/index.ts (main barrel export)

```typescript
// ui/index.ts
export * from './components/digital-health';
export * from './components/payment';
export * from './components/dashboard-sidebar';
export * from './components/defi-earn';
// Add other domains
```

### Step 4: Install tsup

```bash
npm install -D tsup
```

### Step 5: Build the library

```bash
npm run build:lib
```

This creates:
```
dist/
├── index.js
├── index.mjs
├── index.d.ts
├── digital-health/
│   ├── index.js
│   ├── index.mjs
│   └── index.d.ts
└── payment/
    ├── index.js
    ├── index.mjs
    └── index.d.ts
```

### Step 6: Test locally before publishing

```bash
# In component library
npm link

# In your test project
npm link @your-username/ui-components
```

### Step 7: Publish to npm

```bash
# Login to npm (first time only)
npm login

# Publish
npm publish --access public  # for scoped packages
```

---

## 📦 Option 2: GitHub Packages (Private/Team)

### Step 1: Update package.json

```json
{
  "name": "@Calel33/project-componets",
  "version": "1.0.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/Calel33/project-componets.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### Step 2: Create .npmrc in project root

```
@Calel33:registry=https://npm.pkg.github.com
```

### Step 3: Authenticate with GitHub

```bash
# Generate a Personal Access Token on GitHub
# Settings → Developer settings → Personal access tokens → Generate new token
# Select: write:packages, read:packages, delete:packages

npm login --registry=https://npm.pkg.github.com
# Username: your-github-username
# Password: your-personal-access-token
# Email: your-email
```

### Step 4: Build and Publish

```bash
npm run build:lib
npm publish
```

### Step 5: Use in other projects

```bash
# Create .npmrc in consuming project
echo "@Calel33:registry=https://npm.pkg.github.com" > .npmrc

# Install
npm install @Calel33/project-componets
```

---

## 🎯 Usage in Consumer Projects

### Install the package

```bash
npm install @your-username/ui-components
# or
npm install @Calel33/project-componets
```

### Configure Tailwind

Consumer projects need to include your components in Tailwind's content:

```javascript
// tailwind.config.js in consumer project
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@your-username/ui-components/dist/**/*.{js,mjs}',
  ],
  // Rest of config
};
```

### Import and use components

```tsx
// Full import
import { 
  DoctorCard, 
  GlucoseChartCard,
  HealthDashboardGrid 
} from '@your-username/ui-components/digital-health';

// Or namespace import
import * as DigitalHealth from '@your-username/ui-components/digital-health';

function MyHealthDashboard() {
  return (
    <DigitalHealth.HealthDashboardGrid>
      <DigitalHealth.DoctorCard
        name="Dr. Smith"
        specialty="Cardiologist"
        image="/doctor.jpg"
      />
      <DigitalHealth.GlucoseChartCard
        title="Weekly Glucose"
        data={glucoseData}
        targetRange={{ min: 80, max: 130, description: "Target range" }}
      />
    </DigitalHealth.HealthDashboardGrid>
  );
}
```

---

## 🎨 Design System Setup in Consumer Projects

### Required CSS

Consumer projects need your animations and design tokens:

```css
/* In consumer project's global CSS */
@import '@your-username/ui-components/styles.css';

/* Or copy animations manually */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Required dependencies

Make sure consumer projects have peer dependencies:

```bash
npm install react react-dom chart.js lucide-react
```

---

## 📝 Version Management

### Semantic Versioning

```bash
# Patch (bug fixes): 1.0.0 → 1.0.1
npm version patch

# Minor (new features): 1.0.0 → 1.1.0
npm version minor

# Major (breaking changes): 1.0.0 → 2.0.0
npm version major

# Publish new version
npm publish
```

---

## 🔄 Continuous Updates

### In consumer projects

```bash
# Update to latest version
npm update @your-username/ui-components

# Or specific version
npm install @your-username/ui-components@1.2.0
```

---

## 🧪 Testing the Package Locally

### Method 1: npm link

```bash
# In component library
npm link

# In consumer project
npm link @your-username/ui-components
```

### Method 2: Local file path

```json
// package.json in consumer project
{
  "dependencies": {
    "@your-username/ui-components": "file:../project-componets"
  }
}
```

---

## 📚 Documentation for Consumers

Create a separate README for npm:

```markdown
# @your-username/ui-components

Production-ready React component library with TypeScript and Tailwind CSS.

## Installation

\`\`\`bash
npm install @your-username/ui-components chart.js lucide-react
\`\`\`

## Quick Start

\`\`\`tsx
import { DoctorCard } from '@your-username/ui-components/digital-health';

<DoctorCard name="Dr. Smith" specialty="Cardiologist" image="/doctor.jpg" />
\`\`\`

## Components

- **digital-health**: 11 healthcare dashboard components
- **payment**: Payment forms and completion flows
- **dashboard-sidebar**: Dashboard navigation components
- **defi-earn**: DeFi dashboard components

[Full Documentation →](https://github.com/Calel33/project-componets)
```

---

## 🚀 Recommended Workflow

1. **Develop** in this repo with live demos
2. **Build** library with `npm run build:lib`
3. **Test** locally with `npm link`
4. **Version** with `npm version patch/minor/major`
5. **Publish** to npm or GitHub Packages
6. **Install** in consumer projects
7. **Update** consumers when you release new versions

---

## ⚠️ Important Notes

### Tree Shaking

Use named exports to enable tree shaking:

```tsx
// ✅ Good - tree shakeable
import { DoctorCard } from '@your-username/ui-components/digital-health';

// ❌ Bad - imports everything
import * as Components from '@your-username/ui-components';
```

### Tailwind Classes

Components use Tailwind classes. Consumer projects MUST:
1. Have Tailwind installed
2. Include your package in `content` array
3. Have compatible Tailwind config

### CSS-in-JS Not Supported

These components rely on Tailwind utility classes, not CSS-in-JS.

### TypeScript Support

Types are automatically included. No `@types` package needed.

---

## 🔗 Resources

- [tsup documentation](https://tsup.egoist.dev/)
- [npm publishing guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [GitHub Packages guide](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
