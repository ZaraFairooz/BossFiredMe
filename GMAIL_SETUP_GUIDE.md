# Gmail Email Setup Guide

This guide will help you set up Gmail SMTP to send emails from your contact form and questionnaire form to `bfairooz1@gmail.com`.

## Overview

The application now uses Gmail SMTP (similar to the Java Spring Boot approach your friend suggested) to send emails directly from your Gmail account. This is done through Vercel serverless functions that use `nodemailer` to send emails via Gmail's SMTP server.

## Step 1: Enable 2-Step Verification on Your Gmail Account

1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", find **2-Step Verification**
4. Click on it and follow the prompts to enable 2-Step Verification
5. You'll need to verify your phone number

## Step 2: Generate an App Password

1. After enabling 2-Step Verification, go back to **Security** settings
2. Look for **App passwords** (it should appear after 2-Step Verification is enabled)
3. Click on **App passwords**
4. You may need to sign in again
5. Under "Select app", choose **Mail**
6. Under "Select device", choose **Other (Custom name)**
7. Enter a name like "BossFiredMe Website"
8. Click **Generate**
9. **IMPORTANT**: Copy the 16-character password that appears (it will look like: `abcd efgh ijkl mnop`)
   - You won't be able to see this password again!
   - Remove the spaces when using it (so it becomes: `abcdefghijklmnop`)

## Step 3: Set Up Environment Variables in Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project (`bossfiredme`)
3. Go to **Settings** → **Environment Variables**
4. Add the following environment variables:

   - **Variable Name**: `GMAIL_USER`
     - **Value**: Your Gmail address (e.g., `bfairooz1@gmail.com`)
     - **Environment**: Production, Preview, Development (select all)

   - **Variable Name**: `GMAIL_APP_PASSWORD`
     - **Value**: The 16-character app password you generated (without spaces)
     - **Environment**: Production, Preview, Development (select all)

5. Click **Save** for each variable

## Step 4: Redeploy Your Application

After adding the environment variables:

1. Go to the **Deployments** tab in Vercel
2. Click the three dots (⋯) on your latest deployment
3. Click **Redeploy**
4. Or, you can push a new commit to trigger a new deployment

## Step 5: Test the Forms

1. Go to your website
2. Fill out the **Contact Us** form and submit it
3. Check `bfairooz1@gmail.com` for the email
4. Fill out the **Employment Case Questionnaire** form and submit it
5. Check `bfairooz1@gmail.com` for the email

## Troubleshooting

### Emails not sending?

1. **Check Vercel logs**:
   - Go to your Vercel dashboard
   - Click on your project → **Deployments** → Click on the latest deployment
   - Click on **Functions** tab to see serverless function logs
   - Look for any error messages

2. **Verify environment variables**:
   - Make sure `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set correctly
   - Make sure they're enabled for the correct environments (Production, Preview, Development)

3. **Verify App Password**:
   - Make sure you're using the App Password (16 characters, no spaces), NOT your regular Gmail password
   - Make sure 2-Step Verification is enabled on your Google account

4. **Check Gmail account**:
   - Make sure the Gmail account you're using has 2-Step Verification enabled
   - Try generating a new App Password if the current one doesn't work

### Common Errors

- **"Invalid login"**: Usually means the App Password is incorrect or 2-Step Verification isn't enabled
- **"Connection timeout"**: Check your internet connection and Vercel deployment status
- **"Authentication failed"**: Verify your Gmail address and App Password are correct

## How It Works

1. User submits a form on your website
2. Frontend calls the API endpoint (`/api/send-contact-email` or `/api/send-employment-case-email`)
3. Vercel serverless function receives the request
4. Function uses `nodemailer` with Gmail SMTP to send the email
5. Email is sent to `bfairooz1@gmail.com` with all the form data

This is very similar to the Java Spring Boot approach your friend suggested, but using Node.js instead of Java, which is perfect for a React/Vite frontend project!

## Security Notes

- Never commit your App Password to Git
- Always use environment variables for sensitive information
- The App Password is specific to this application and can be revoked at any time
- If you suspect your App Password is compromised, revoke it and generate a new one

