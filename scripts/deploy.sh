#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

# echo 'vapperjs.org' > CNAME

git init
git config user.name 'juzisang'
git config user.email 'juziexe@gmail.com'
git add -A
git commit -m 'deploy'

git push -f git@github.com:JuZiSang/vapperjs.org.git master:gh-pages

cd -

pwd

rm -rf docs/.vuepress/dist