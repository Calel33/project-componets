#!/bin/bash

# Setup script to convert component library to npm package

echo "🚀 Setting up component library for npm distribution..."

# 1. Install tsup for building
echo "📦 Installing tsup..."
npm install -D tsup

# 2. Create tsup config
echo "⚙️  Creating tsup.config.ts..."
cat > tsup.config.ts << 'EOF'
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'index': 'ui/index.ts',
    'digital-health/index': 'ui/components/digital-health/index.ts',
    'payment/index': 'ui/components/payment/index.ts',
    'dashboard-sidebar/index': 'ui/components/dashboard-sidebar/index.ts',
    'defi-earn/index': 'ui/components/defi-earn/index.ts',
    'auth/index': 'ui/components/auth/index.ts',
    'childcare/index': 'ui/components/childcare/index.ts',
    'medical/index': 'ui/components/medical/index.ts',
    'web3/index': 'ui/components/web3/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
});
EOF

# 3. Create main barrel export if it doesn't exist
if [ ! -f "ui/index.ts" ]; then
  echo "📄 Creating ui/index.ts..."
  cat > ui/index.ts << 'EOF'
// Main barrel export for the component library
export * from './components/digital-health';
export * from './components/payment';
export * from './components/dashboard-sidebar';
export * from './components/defi-earn';
export * from './components/auth';
export * from './components/childcare';
export * from './components/medical';
export * from './components/web3';
export * from './hooks';
EOF
fi

# 4. Update package.json with library fields
echo "📝 Updating package.json..."
npm pkg set main="./dist/index.js"
npm pkg set module="./dist/index.mjs"
npm pkg set types="./dist/index.d.ts"
npm pkg set files[]="dist"
npm pkg set scripts.build:lib="tsup"
npm pkg set scripts.prepublishOnly="npm run build:lib"

# 5. Build the library
echo "🏗️  Building library..."
npm run build:lib

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update package.json 'name' field to '@your-username/ui-components'"
echo "2. Test locally: npm link"
echo "3. Publish to npm: npm publish --access public"
echo ""
echo "See BUILD_LIBRARY_GUIDE.md for detailed instructions."
