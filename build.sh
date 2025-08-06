#!/usr/bin/bash
rm -rf static favicon.ico index.html *.png *.json robots.txt
cd portfolio
rm -rf build
npm run build
mv build/* ..
rm -rf build
cd ..