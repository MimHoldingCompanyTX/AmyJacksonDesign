#!/bin/bash

echo "Testing Amy Jackson Design installation..."
echo "=========================================="

# Clean any previous builds
echo "1. Cleaning previous builds..."
rm -rf .next node_modules 2>/dev/null || true

# Install dependencies
echo "2. Installing dependencies..."
npm install

# Check for installation errors
if [ $? -ne 0 ]; then
    echo "ERROR: npm install failed"
    exit 1
fi

# Try building
echo "3. Testing build..."
npm run build

if [ $? -ne 0 ]; then
    echo "ERROR: Build failed"
    exit 1
fi

echo "=========================================="
echo "✅ Installation and build successful!"
echo ""
echo "To start the dev server on port 3001:"
echo "  npm run dev"
echo ""
echo "Note: The dev server may use significant"
echo "resources. Monitor with 'htop' or similar."
echo "If it crashes, try building first then"
echo "running 'npm start' for production mode."