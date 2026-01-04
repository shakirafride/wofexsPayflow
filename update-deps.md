# Update Dependencies for Security Fix

To fix the Next.js security vulnerability and deploy successfully on Vercel, run these commands:

```bash
# Delete the lock file and node_modules
rm package-lock.json
rm -rf node_modules

# Install with the updated Next.js version
npm install

# Commit the changes
git add .
git commit -m "Update Next.js to fix security vulnerability"
git push
```

This will:
1. Remove the old lock file with the vulnerable Next.js version
2. Install the latest secure version (15.2.5)
3. Generate a new package-lock.json with the secure version
4. Push the changes to trigger a new Vercel deployment

After running these commands, your Vercel deployment should succeed!