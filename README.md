This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm run dev
# or
yarn dev
``` 

 
  
  
  
add .env file with variable: 

```bash
NEXT_PUBLIC_BASE_URL=https://api.tvmaze.com 
```

 

 
run jest tests
 
  ```bash
pnpm jest
``` 


 
run e2e tests (playwright)
```bash 
npx playwright test
```

estimates: 

```
project start - 3h
the main work: - api creation and connection 1h
           - creation of pages 6h
           - adaptation to the mobile 3h
           - adding image preloader 1h
           - creation of pagination 1h
installation and setting the test configuration - 1h
testing - 3h
  ```
  
  notes and peculiarities:
  
  ```
  According to the task: "The first layout should use the “Schedule” API" 
  (https://www.tvmaze.com/api#schedule) which doesn't provide any 
  appropriate info to implement pagination as it should. We are not
  aware of pages for the current endpoint or its total number of items. 
  The scheduled shows date was chosen as a pagination unit to implement
  the Home page pagination.
  ```





Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

[https://nada-tv.vercel.app/](https://nada-tv.vercel.app/)