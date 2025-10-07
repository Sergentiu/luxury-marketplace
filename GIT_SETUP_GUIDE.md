# 🔧 Git Setup Guide for @Sergentiu

## **Current Issue:** Git command not recognized in PowerShell

## **Solutions (Try in order):**

### **Solution 1: Restart Computer** ⭐ (Recommended)
1. **Restart your computer** completely
2. Open PowerShell again
3. Try: `git --version`

### **Solution 2: Use Git Bash**
1. Press `Windows Key + R`
2. Type: `git-bash.exe`
3. Press Enter
4. Use Git Bash instead of PowerShell

### **Solution 3: Add Git to PATH manually**
1. Find where Git was installed (usually `C:\Program Files\Git\bin`)
2. Add it to Windows PATH:
   - Right-click "This PC" → Properties
   - Advanced System Settings → Environment Variables
   - Edit PATH → Add Git bin folder

### **Solution 4: Reinstall Git**
1. Download Git again: https://git-scm.com/download/win
2. During installation, select "Use Git from the command line and also from 3rd-party software"
3. Restart computer after installation

## **Once Git Works, Run These Commands:**

```bash
# Navigate to your project
cd luxury-marketplace

# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Luxury marketplace with auth and payments"

# Connect to your GitHub account
git remote add origin https://github.com/Sergentiu/luxury-marketplace.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## **Alternative: Manual GitHub Upload**

If Git continues to have issues, you can:

1. Go to https://github.com/Sergentiu
2. Click "New Repository"
3. Name: "luxury-marketplace"
4. Click "Create Repository"
5. Upload your files manually using GitHub's web interface

## **Quick Test:**
Open Command Prompt (not PowerShell) and try:
```
git --version
```

If this works, use Command Prompt instead of PowerShell for Git commands.
