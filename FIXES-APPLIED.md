# Amy Jackson Design Website Fixes

## Root Cause Analysis
The website was causing multiple Node.js instances to spin up and crash the machine due to several compatibility and configuration issues.

## Problems Identified & Fixed

### 1. **Turbopack Configuration Issue** (CRITICAL)
- **Problem**: Absolute path in Turbopack config (`root: path.resolve(__dirname)`) caused infinite recompilation
- **Fix**: Removed problematic Turbopack configuration from `next.config.ts`

### 2. **Tailwind CSS v4 Compatibility** (MAJOR)
- **Problem**: Tailwind CSS v4 with `@tailwindcss/postcss` is very new and has compatibility issues with Next.js 16
- **Fix**: Downgraded to stable Tailwind CSS v3.4.0 with standard `postcss` + `autoprefixer`

### 3. **Client/Server Component Mismatch** 
- **Problem**: Main page (`app/page.tsx`) was marked `"use client"` but should be a server component
- **Fix**: Removed `"use client"` directive

### 4. **Duplicate Font Loading**
- **Problem**: Fonts were loaded twice (via `next/font/google` AND `<link>` tags)
- **Fix**: Removed duplicate `<link>` tags from `layout.tsx`

### 5. **Memory Limit Configuration**
- **Problem**: No memory limits set for Node.js processes
- **Fix**: Added `.env` file with `NODE_OPTIONS=--max-old-space-size=4096`

## Files Modified
1. `package.json` - Updated dependencies
2. `next.config.ts` - Removed Turbopack config
3. `app/page.tsx` - Removed "use client" directive
4. `app/layout.tsx` - Removed duplicate font loading
5. `app/globals.css` - Updated for Tailwind v3
6. `postcss.config.js` - Updated for Tailwind v3 + autoprefixer
7. `tailwind.config.js` - Created new config for v3
8. `.env` - Added memory limits
9. `package-backup.json` - Backup of original package.json

## How to Test

### Option 1: Clean Install (Recommended)
```bash
cd ~/.openclaw/workspace/amy-jackson-design
chmod +x test-install.sh
./test-install.sh
```

### Option 2: Manual Steps
```bash
cd ~/.openclaw/workspace/amy-jackson-design

# Clean previous builds
rm -rf .next node_modules

# Install dependencies
npm install

# Build the project
npm run build

# Start dev server (port 3001)
npm run dev

# Or start production server
npm start
```

## Expected Outcome
- Dev server should start on port 3001 without spawning multiple Node.js instances
- No memory leaks or infinite recompilation
- Website should load properly at http://localhost:3001

## If Problems Persist
1. **Disable Turbopack**: Uncomment `TURBOPACK=0` in `.env`
2. **Increase memory**: Change `--max-old-space-size=4096` to `8192`
3. **Check logs**: Uncomment `DEBUG=next:*` in `.env` for verbose logging
4. **Use production mode**: Build first with `npm run build`, then run `npm start`