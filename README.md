# CraftSpark-AI
Art and DIY craft idea generator powered by AI. Discover creative projects based on your skillset and recyclable materials.

🗑️ Got waste? Don't be afraid to recycle it into beautiful art! 🎨
## Tech Stack

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Twind](https://img.shields.io/badge/Twind-39B78F?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://twind.dev)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
<!-- [![MongoDB](https://img.shields.io/badge/MongoDB-13AA52?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com) -->

## Features

- AI-powered craft suggestion engine
- Click on a craft idea to get more details
- Save ideas and steps to profile
- SEO-optimized with Next.js

## Preview
<img src="public/previewSS.png" width="500" height="380"/>
<img src="public/previewDeet.png" width="500" height="500"/>

## Status

🚧 More Features are being added.

👾 Currently using Gemini for AI text generation; future versions could integrate multiple models (Gemini, LLaMA 2, OpenAI GPT) with caching and queuing for scalability.

--- 

## 🚀 Server Execution Guide

**1. Install Dependencies**

```bash
cd CraftSpark-AI
npm install
```
**2. Create an env file and store GEMINI API KEY, PEXELS API KEY and URL in it.**

```bash
API_KEY = xxxxxxxxxxxxxxxxxxxx
PEXELS_API_KEY = xxxxxxxxxxxxxxxxxxxx
PEXELS_URL = xxxxxxxxxxxxxxxxxxxx
```
**3. Concurrently run the Development Server**

```bash
npm run dev
```
