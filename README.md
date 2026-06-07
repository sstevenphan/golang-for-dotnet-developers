# Go for .NET Engineers

Static tutorial site about learning Go from a senior .NET developer perspective.

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static file server.

Example:

```powershell
python -m http.server 8080
```

Then browse to `http://localhost:8080`.

## Project structure

```text
.
|-- index.html
|-- lesson-01-foundations.html
|-- ...
|-- lesson-12-deployment-performance-roadmap.html
|-- styles.css
|-- app.js
`-- .github/workflows/deploy-pages.yml
```

## GitHub Pages deployment

This repository is configured to deploy automatically with GitHub Actions when you push to the `main` branch.

### One-time GitHub setup

1. Create a new GitHub repository.
2. Push this local repository to the new remote.
3. In GitHub, go to `Settings -> Pages`.
4. Under **Build and deployment**, set **Source** to `GitHub Actions`.
5. Make sure the repository visibility matches your Pages plan.

### Push commands

Replace the URL below with your own repository:

```powershell
git remote add origin https://github.com/<your-account>/<your-repo>.git
git push -u origin main
```

After the first push, GitHub Actions will run the workflow in `.github/workflows/deploy-pages.yml`.

## Notes

- For personal GitHub Free accounts, GitHub Pages is available for public repositories.
- If you later add assets such as images, fonts, or subfolders, they can stay in this repository root and will be deployed with the site.
