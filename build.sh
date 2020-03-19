# Build the apps
npm --prefix ./apps/service-a run build
npm --prefix ./apps/service-b run build

# Copy built assets to the assets folder used by the CDN.
rm -rfv ./cdn/.next/*
mkdir -p ./cdn/.next
cp -a ./apps/service-a/.next/. ./cdn/.next/
cp -a ./apps/service-b/.next/. ./cdn/.next/