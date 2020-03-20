# Build the apps
cd ./apps/service-a  && rm -rf .next/ && yarn build
cd ../../
cd ./apps/service-b  && rm -rf .next/ && yarn build

# Copy built assets to the assets folder used by the CDN.
cd ../../
rm -rfv ./cdn/.next/*
mkdir -p ./cdn/.next

cp -a ./apps/service-a/.next/. ./cdn/.next/
cp -a ./apps/service-b/.next/. ./cdn/.next/