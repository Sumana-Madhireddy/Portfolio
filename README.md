# 💼 Portfolio Website (React)

This is my personal **portfolio website** built with **React** using Create React App.  
It showcases my projects, skills, and experience, and is deployed using **GitHub Pages**.

---

## 🚀 Tech Stack
- React (Create React App)
- JavaScript (ES6+)
- HTML5 & CSS3
- GitHub Pages for deployment

---

## 📂 Project Setup

### ✅ Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or later recommended)
- **npm** (comes with Node.js)

Check versions:
```bash
node -v
npm -v
```
## 🛠️ Install Dependencies

Clone the repository and install dependencies:
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
```
▶️ Run Locally (Development)

To start the development server:
```bash
npm start
```
Opens automatically at:
👉 http://localhost:3000

🧪 Run Tests

To launch tests in watch mode:
```bash
npm test
```
Runs all available test files
Press q to exit watch mode

🏗️ Build for Production

Create an optimized production build:
```bash
npm run build
```
Output is generated in the build/ folder
Code is minified and optimized
Ready for deployment

🌍 Deploy to GitHub Pages
✅ One-time Setup

Install gh-pages:
```bash
npm install gh-pages --save-dev
```
Add the following to package.json:
```bash
"homepage": "https://<your-github-username>.github.io/<repo-name>"
```
Add deployment scripts:
```bash
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

🚀 Deploy Latest Changes
```bash
npm run deploy
```

This will:

Build the app

Push the build folder to the gh-pages branch

Publish the site automatically

🔁 Updating the Live Site

Whenever you make changes:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

📄 License

This project is for personal use and learning purposes.


---

If you want, I can:
- Personalize this with **your name + live site link**
- Add **project screenshots**
- Make a **super recruiter-friendly README** (short + flashy)

Just say the word 👌
