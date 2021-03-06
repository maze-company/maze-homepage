#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# add .nojekyll to bypass GitHub Page’s default behavior
touch .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git branch -m main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/maze-company/maze-company.github.io.git main
git push -f https://github.com/maze-company/maze-company-landing.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/maze-company/maze-homepage.git main:gh-pages

cd -