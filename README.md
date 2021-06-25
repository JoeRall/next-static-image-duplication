This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To See Issue


```bash
npm run build
# or
yarn build
```

Then look inside the `.next` folder and you'll see the same `quarry` image twice.

   * Server: `.next\server\chunks\static\image\components\quarry.766f8eca427db5482ce887e319fcde80.png`
   * Static: `.next\static\image\components\quarry.766f8eca427db5482ce887e319fcde80.png`


## Problem 

The images referenced inside the Server subdirectory aren't used. Images are referenced using the `.next\static` path. But it gets worse. For people using `Vercel` to deploy their next apps, the static images can quickly add up and you'll be larger then the 50MB Compressed / 250MB uncompressed requirements as it appears to bundle any image that's used on a `SSG` page into the `.next\server\chunks...` location. 


## Solution

   * **A** - Ensure that the webpack 5 bundler uses the `.next\static` route for image assets.
   * **B** - Provide a flag or configuration parameter to allow user to decide where all image assets go. 
   * **C** - Something else?