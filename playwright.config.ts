import { defineConfig, devices } from '@playwright/test';
import dotenv from "dotenv"

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({

 // path:'./EnvFiles/.env.dev'
  // path:'./EnvFiles/.env.stg'
 // path:`./EnvFiles/.env.${process.env.TEST_ENV}`

   path:process.env.TEST_ENV? `./EnvFiles/.env.${process.env.TEST_ENV}` : `./EnvFiles/.env.dev`

})
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
 // globalSetup: 'globalsetup.ts',
  testDir: './tests',
//   expect:{

//     toHaveScreenshot:{
    
//       maxDiffPixels:20,
//       maxDiffPixelRatio: 0.1,

//     }
  
// },
 // grep: /UI/,
 //grepInvert: /API/,
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter:[['html',{open:'always'}]],
  //reporter:[['dot'],['list'],['html',{open:'always'}]],
  reporter:[['allure-playwright',{outputFolder:'GoogleAllureResults2' }],['html']],
 // reporter:[['json',{outputFile:'report.json'}]],
  //reporter:[['json',{open:'always', outputFolder: './customfolder'}]],
  timeout: 20000,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   testIdAttribute : 'data-test',// getbytestid method we are configuring here
   //trace: 'on',
   screenshot:'only-on-failure',
   video:'retain-on-failure',
   trace: 'retain-on-failure',
   baseURL:'https://restful-booker.herokuapp.com',
   ignoreHTTPSErrors: true,
   extraHTTPHeaders:{
    //Accept:'application/json',
   //"Content-Type":'application/json',
  // "Authorization":'Basic YWRtaW46cGFzc3dvcmQxMjM='
   },
 //  storageState:'.playwright/auth/auth.json',
   headless:false,
  },
  

  /* Configure projects for major browsers */
  projects: [
   // {

 //     name: "setup",
  //    testMatch: "/.*\.setup\.ts/,"
      //testMatch: "global.setup.ts"
     // name: 'chromium',
     // use: { ...devices['Desktop Chrome'] },
    //},
    {

      name: 'chromium',
     // dependencies: ["setup"],
      use: { ...devices['Desktop Chrome'] ,

    //    storageState : "./playwright/.auth/auth.json"
      },


    },
// 
  //   {
  //   name: 'firefox',
   
  //  use: { ...devices['Desktop Firefox'] },
   
  //  },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },
// {
//   name: 'iphone',
//   use: { ...devices['iPhone 14 Pro'] },
// },
//     /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
