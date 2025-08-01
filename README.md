# 🐾 Pet Marketplace

A simple proof-of-concept application built with **Next.js**, **GraphQL**, and **Stripe Connect**, designed to showcase integration of third-party APIs and deployment readiness with Vercel.

---

## 🚀 Features

- ✅ Built with **Next.js** and **TypeScript**
- ✅ Styled using **Tailwind CSS**
- ✅ Data fetching with **Apollo Client** and **GraphQL**
- ✅ Onboarding flow using **Stripe Connect** (test mode)
- ✅ Ready to deploy on **Vercel**
- ✅ Environment variables support for clean and flexible configuration

---

## 🧑‍💻 Tech Stack

- **Next.js** (Pages Router)
- **TypeScript**
- **Tailwind CSS**
- **Apollo Client + GraphQL**
- **Stripe Connect**
- **Vercel** (for deployment)

---

## 📸 Preview

Working on...

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pet-marketplace.git
cd pet-marketplace
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Set up environment variables

Create a `.env` file in the root and add:

```bash
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_RETURN_URL=http://localhost:3000
STRIPE_REFRESH_URL=http://localhost:3000
NEXT_PUBLIC_COUNTRIES_API=https://countries.trevorblades.com/
```

> ⚠️ If deploying to Vercel, make sure to update STRIPE_RETURN_URL and STRIPE_REFRESH_URL to your production domain (e.g. https://pet-marketplace.vercel.app)

### 4. Run locally

```bash
yarn dev
```

Visit: http://localhost:3000

## 📂 Project Structure

```plaintext
src/
├── pages/
│ ├── index.tsx # Home page with GraphQL example
│ └── api/
│ └── create-stripe-account-link.ts # Stripe Connect onboarding
├── styles/
│ └── globals.css # Tailwind base styles
```

## 📌 Notes

- The GraphQL API used is a public demo API: https://countries.trevorblades.com
- Stripe Connect integration is in test mode and will not trigger real payments or account creation.

## 👨‍💻 Author

### Pedro Fernandes

Frontend Developer passionate about clean UI, performance, and integrating real-world APIs.

[LinkedIn](https://www.linkedin.com/in/pedrusco/) | [GitHub](https://github.com/pedrusco)
