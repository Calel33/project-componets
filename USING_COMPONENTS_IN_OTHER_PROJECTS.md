# Using Your Components in Other Projects

Quick guide to reuse your component library across different projects.

---

## 🎯 Choose Your Method

### Method 1: Copy & Paste (Quickest)
**Use when**: You need components for a single project

```bash
# Copy entire digital-health domain
cp -r ui/components/digital-health /path/to/project/src/components/
cp ui/components/types/digital-health.types.ts /path/to/project/src/types/

# Use it
import { DoctorCard } from '@/components/digital-health';
```

**Pros**: Immediate, no setup  
**Cons**: No updates, duplication

---

### Method 2: NPM Package (Recommended)
**Use when**: Multiple projects need these components

#### Quick Setup (5 minutes)

```bash
# 1. Install build tool
npm install -D tsup

# 2. Run setup script
bash setup-npm-package.sh

# 3. Update package name
# Edit package.json: "name": "@your-username/ui-components"

# 4. Publish to npm
npm login
npm publish --access public
```

#### Use in Any Project

```bash
npm install @your-username/ui-components
```

```tsx
import { DoctorCard, GlucoseChartCard } from '@your-username/ui-components/digital-health';
import { PaymentDashboard } from '@your-username/ui-components/payment';

function MyApp() {
  return (
    <DoctorCard name="Dr. Smith" specialty="Cardiology" image="/doc.jpg" />
  );
}
```

**Pros**: Centralized updates, version control, professional  
**Cons**: Initial setup required

---

### Method 3: Git Submodule (Team Sharing)
**Use when**: Working with a team, want synced source code

```bash
# In your new project
git submodule add https://github.com/Calel33/project-componets.git src/ui-library

# Use components
import { DoctorCard } from '@/ui-library/ui/components/digital-health';
```

**Update submodule**:
```bash
git submodule update --remote
```

**Pros**: Always in sync, no build step  
**Cons**: Submodule management complexity

---

### Method 4: NPM Link (Local Testing)
**Use when**: Developing library and testing in another project simultaneously

```bash
# In component library (this repo)
npm link

# In your test project
npm link project-componets

# Use it
import { DoctorCard } from 'project-componets/ui/components/digital-health';
```

**Pros**: Real-time changes, perfect for development  
**Cons**: Not for production, only local

---

### Method 5: GitHub Packages (Private Sharing)
**Use when**: Want npm-style distribution but keep it private

```bash
# Setup (one time)
# Edit package.json
{
  "name": "@Calel33/project-componets",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}

# Publish
npm publish

# Install in other projects
# Create .npmrc: @Calel33:registry=https://npm.pkg.github.com
npm install @Calel33/project-componets
```

**Pros**: Private, free for public repos, npm workflow  
**Cons**: Requires GitHub authentication

---

## 🎨 Required Setup in Consumer Projects

### 1. Install Peer Dependencies

```bash
npm install react react-dom chart.js lucide-react
```

### 2. Configure Tailwind

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@your-username/ui-components/dist/**/*.{js,mjs}',
  ],
  // ... rest of config
};
```

### 3. Add Animations (if using digital-health)

```css
/* src/index.css */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 📝 Example: Full Setup in New Project

```bash
# 1. Create new React project
npx create-vite my-health-app --template react-ts

# 2. Install dependencies
cd my-health-app
npm install
npm install @your-username/ui-components chart.js lucide-react

# 3. Configure Tailwind (if not already)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Update tailwind.config.js content array
# (see step 2 above)

# 5. Add animations to src/index.css
# (see step 3 above)

# 6. Use components
```

```tsx
// src/App.tsx
import { 
  HealthDashboardGrid,
  DoctorCard,
  GlucoseChartCard 
} from '@your-username/ui-components/digital-health';

const glucoseData = [
  { day: 'Mon', value: 112 },
  { day: 'Tue', value: 125 },
  // ...
];

function App() {
  return (
    <div className="dark min-h-screen bg-neutral-900">
      <HealthDashboardGrid>
        <DoctorCard
          name="Dr. Jane Smith"
          specialty="Endocrinologist"
          image="https://example.com/doctor.jpg"
        />
        <GlucoseChartCard
          title="Weekly Glucose Trend"
          data={glucoseData}
          targetRange={{ min: 80, max: 130, description: "Target: 80-130 mg/dL" }}
        />
      </HealthDashboardGrid>
    </div>
  );
}

export default App;
```

```bash
# 7. Run the app
npm run dev
```

---

## 🚀 Recommended Approach

**For most users**: Use **Method 2 (NPM Package)**

1. Run `bash setup-npm-package.sh`
2. Update package name
3. Publish to npm
4. Install in any project

This gives you:
- ✅ Version control
- ✅ Easy updates
- ✅ Professional workflow
- ✅ Works anywhere

---

## 📚 Detailed Guides

- **Full setup**: See `BUILD_LIBRARY_GUIDE.md`
- **Publishing**: See npm/GitHub Packages sections in guide
- **TypeScript**: Types are included automatically
- **Troubleshooting**: Check Tailwind content paths

---

## 💡 Pro Tips

### Tree Shaking

Import specific components for smaller bundles:

```tsx
// ✅ Good - only imports what you need
import { DoctorCard } from '@your-username/ui-components/digital-health';

// ❌ Bad - imports entire library
import * as UI from '@your-username/ui-components';
```

### Dark Mode

Most components work best in dark mode:

```tsx
<div className="dark">
  <HealthDashboardGrid>
    {/* components */}
  </HealthDashboardGrid>
</div>
```

### Custom Styling

Components use Tailwind classes. Override with:

```tsx
<DoctorCard 
  className="custom-class"  // if component accepts className
  // or wrap in container
/>
```

---

## 🆘 Common Issues

### "Module not found"
- Check package is installed: `npm list @your-username/ui-components`
- Verify import path matches exports in package.json

### "Styles not working"
- Ensure Tailwind content includes your package
- Check animations are added to CSS

### "Chart.js errors"
- Install: `npm install chart.js`
- Verify Chart.js version matches (4.5.0+)

### "Type errors"
- Types are included, no @types package needed
- Ensure TypeScript version 5.0+

---

## 📞 Need Help?

1. Check `BUILD_LIBRARY_GUIDE.md` for detailed instructions
2. See component READMEs in `ui/components/[domain]/README.md`
3. Review demo implementations in `src/*Demo.tsx`

---

**Quick Start**: `bash setup-npm-package.sh` → publish → install → use! 🎉
