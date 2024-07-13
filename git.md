# Updating and Deploying your React site to GitHub Pages

Follow these steps to update your site and deploy changes:

1. Make your changes in the React project.

2. Test your changes locally:
   ```
   npm start
   ```

3. Once satisfied with the changes, stage them:
   ```
   git add .
   ```

4. Commit the changes:
   ```
   git commit -m "Description of your changes"
   ```

5. Push the changes to the development branch:
   ```
   git push origin development
   ```

6. Deploy the updated site to GitHub Pages:
   ```
   npm run deploy
   ```

This last step builds your React app and pushes it to the `main` branch, which GitHub Pages serves.

Remember: Always work in the `development` branch and use `npm run deploy` to update the live site.