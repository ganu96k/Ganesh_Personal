# Ganesh_Personal

This is a Vite React portfolio site. The repository is prepared for GitHub Pages deployment.

How to connect this local project to GitHub and deploy:

1. Create a new repository on GitHub (private or public).

2. In your local project root, add the remote (replace USER/REPO):

```bash
git remote add origin git@github.com:USER/REPO.git
# or HTTPS
git remote add origin https://github.com/USER/REPO.git
git branch -M main
git push -u origin main
```

3. The included GitHub Actions workflow (.github/workflows/deploy.yml) will run on push to `main` and publish the built `dist` folder to GitHub Pages using the `GITHUB_TOKEN`.

4. After the workflow completes, enable GitHub Pages in the repository settings (if not automatically set) and point it to the `gh-pages` branch.

If you'd like, I can attempt to create the remote repository for you (requires a GitHub token or `gh` CLI). Otherwise run the commands above to push and trigger the deployment.

