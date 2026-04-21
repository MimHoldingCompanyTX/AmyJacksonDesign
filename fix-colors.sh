#!/bin/bash

# Fix color class names in all TypeScript/TSX files
echo "Updating color class names in all components..."

# Update all .tsx files in the components directory
find app/components -name "*.tsx" -type f | while read file; do
  echo "Processing $file..."
  
  # Replace color classes
  sed -i '' 's/bg-neutral/bg-ivory/g' "$file"
  sed -i '' 's/bg-greige/bg-greige/g' "$file"  # This should already be correct
  sed -i '' 's/text-navy/text-navy/g' "$file"  # This should already be correct
  sed -i '' 's/border-accent/border-brass/g' "$file"
  sed -i '' 's/text-accent/text-brass/g' "$file"
  sed -i '' 's/bg-accent/bg-brass/g' "$file"
  sed -i '' 's/from-accent/from-brass/g' "$file"
  sed -i '' 's/to-accent/to-brass/g' "$file"
  sed -i '' 's/via-accent/via-brass/g' "$file"
  sed -i '' 's/border-navy/border-navy/g' "$file"  # This should already be correct
  sed -i '' 's/bg-navy/bg-navy/g' "$file"  # This should already be correct
  sed -i '' 's/text-gray-900/text-navy/g' "$file"
  sed -i '' 's/text-gray-800/text-navy/g' "$file"
  sed -i '' 's/text-gray-700/text-navy\/80/g' "$file"
  sed -i '' 's/text-gray-600/text-navy\/60/g' "$file"
  sed -i '' 's/text-gray-500/text-navy\/50/g' "$file"
  sed -i '' 's/bg-gray-50/bg-ivory/g' "$file"
  sed -i '' 's/bg-gray-100/bg-greige/g' "$file"
done

# Update globals.css to ensure color definitions are correct
echo "Updating globals.css..."
sed -i '' 's/var(--navy)/var(--color-navy)/g' app/globals.css
sed -i '' 's/var(--brass)/var(--color-brass)/g' app/globals.css
sed -i '' 's/var(--greige)/var(--color-greige)/g' app/globals.css
sed -i '' 's/var(--ivory)/var(--color-ivory)/g' app/globals.css
sed -i '' 's/var(--tan)/var(--color-tan)/g' app/globals.css

# Update page.tsx
echo "Updating page.tsx..."
sed -i '' 's/bg-neutral/bg-ivory/g' app/page.tsx
sed -i '' 's/bg-greige/bg-greige/g' app/page.tsx

echo "Done!"