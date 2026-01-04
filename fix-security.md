# Fix Next.js Security Vulnerability (CVE-2025-66478)

## Option 1: Use Official Next.js Fix Tool (Recommended)

Next.js provides an official tool to fix this vulnerability:

```bash
npx fix-react2shell-next
```

This tool will:
- Check your current Next.js version
- Automatically update to the correct patched version (15.2.6)
- Update your package.json and package-lock.json

## Option 2: Manual Update

If you prefer to update manually:

```bash
# Delete lock file and node_modules
rm package-lock.json
rm -rf node_modules

# Install with the patched version
npm install

# Commit and push
git add .
git commit -m "Fix Next.js security vulnerability CVE-2025-66478"
git push
```

## After Deployment

Once your app is deployed successfully, **rotate all your environment variables and secrets** as recommended by Next.js security advisory.

## Verification

After updating, your package.json should show:
- `"next": "15.2.6"` (or higher)
- `"eslint-config-next": "15.2.6"` (or higher)

The Vercel deployment should then succeed without the security error!