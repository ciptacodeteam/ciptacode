# Ciptacode Agency Website

This is the official website for Ciptacode Agency, built using the modern T3 Stack: Next.js, Prisma, TailwindCSS, and BetterAuth.

## Tech Stack

- **Next.js** – React framework for server-side rendering and routing
- **Prisma** – ORM for database management
- **TailwindCSS** – Utility-first CSS framework
- **BetterAuth** – Authentication solution
- **T3 Stack** – Integration of Next.js, TypeScript, TailwindCSS, and tRPC

## Setup Preparation

### Prerequisites

- Node.js (v18+ recommended) or Bun JS
- npm or bun
- PostgreSQL (or your preferred database)

### Installation

1. **Clone the repository**

2. **Install dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env` and update values for your database and authentication provider.

4. **Set up the database**

   ```bash
    npm run db:push
    # or
    bun run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

## License

MIT

---

Feel free to contribute or open issues for improvements!
