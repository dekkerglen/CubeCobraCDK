#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CubeCobraStack } from "../lib/CubeCobraStack";

const envUSA = { account: "816705121310", region: "us-east-2" };

const app = new cdk.App();

// Development Environment
new CubeCobraStack(
  app,
  "CubeCobraDevStack",
  {
    accessKey: process.env.AWS_ACCESS_KEY_ID || "",
    secretKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    emailUser: process.env.EMAIL_USER || "",
    emailPass: process.env.EMAIL_PASS || "",
    domain: "cubecobradev.com",
    environmentName: "development",
    version: "1.0.10",
    awsLogGroup: "CUBECOBRA",
    awsLogStream: "DEVELOPMENT",
    dataBucket: "cubecobra-data-production",
    downTimeActive: false,
    dynamoPrefix: "PROD",
    env: "production",
    jobsToken: process.env.JOBS_TOKEN || "",
    nitroPayEnabled: false,
    patreonClientId: process.env.PATREON_CLIENT_ID || "",
    patreonClientSecret: process.env.PATREON_CLIENT_SECRET || "",
    patreonHookSecret: process.env.PATREON_HOOK_SECRET || "",
    patreonRedirectUri: "https://cubecobra.com/patreon/redirect",
    redisHost: process.env.REDIS_HOST || "",
    sessionToken: process.env.SESSION_TOKEN || "",
    sessionSecret: process.env.SESSION_SECRET || "",
    tcgPlayerPublicKey: process.env.TCG_PLAYER_PUBLIC_KEY || "",
    tcgPlayerPrivateKey: process.env.TCG_PLAYER_PRIVATE_KEY || "",
    fleetSize: 1,
    captchaSiteKey: process.env.DEV_CAPTCHA_SITE_KEY || "",
    captchaSecretKey: process.env.DEV_CAPTCHA_SECRET_KEY || "",
    draftmancerApiKey: process.env.DRAFTMANCER_API_KEY || "",
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || "",
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY || "",
  },
  {
    env: envUSA,
  }
);

// Production Environment
new CubeCobraStack(
  app,
  "CubeCobraProdStack",
  {
    accessKey: process.env.AWS_ACCESS_KEY_ID || "",
    secretKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    emailUser: process.env.EMAIL_CONFIG_USERNAME || "",
    emailPass: process.env.EMAIL_CONFIG_PASSWORD || "",
    domain: "cubecobra.com",
    environmentName: "production",
    version: "1.1.8",
    awsLogGroup: "CUBECOBRA",
    awsLogStream: "PRODUCTION",
    dataBucket: "cubecobra-data-production",
    downTimeActive: false,
    dynamoPrefix: "PROD",
    env: "production",
    jobsToken: process.env.JOBS_TOKEN || "",
    nitroPayEnabled: true,
    patreonClientId: process.env.PATREON_CLIENT_ID || "",
    patreonClientSecret: process.env.PATREON_CLIENT_SECRET || "",
    patreonHookSecret: process.env.PATREON_HOOK_SECRET || "",
    patreonRedirectUri: "https://cubecobra.com/patreon/redirect",
    redisHost: process.env.REDIS_HOST || "",
    sessionToken: process.env.SESSION_TOKEN || "",
    sessionSecret: process.env.SESSION_SECRET || "",
    tcgPlayerPublicKey: process.env.TCG_PLAYER_PUBLIC_KEY || "",
    tcgPlayerPrivateKey: process.env.TCG_PLAYER_PRIVATE_KEY || "",
    fleetSize: 3,
    captchaSiteKey: process.env.PROD_CAPTCHA_SITE_KEY || "",
    captchaSecretKey: process.env.PROD_CAPTCHA_SECRET_KEY || "",
    draftmancerApiKey: process.env.DRAFTMANCER_API_KEY || "",
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || "",
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY || "",
  },
  {
    env: envUSA,
  }
);
