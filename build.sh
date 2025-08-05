#!/usr/bin/bash
cd portfolio
npm run build
mv -r build/* ..
cd ..