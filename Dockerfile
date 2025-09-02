# ============================
# Stage 1: Dependencies
# ============================
FROM node:20-alpine AS deps

WORKDIR /app
RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./
RUN pnpm fetch

# ============================
# Stage 2: Build
# ============================
FROM node:20-alpine AS builder

WORKDIR /app
RUN npm install -g pnpm

COPY --from=deps /app/pnpm-lock.yaml* ./
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm install --offline
RUN pnpm build

# ============================
# Stage 3: Runner (super slim)
# ============================
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Chỉ copy output cần thiết
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN adduser --disabled-password nextjs && chown -R nextjs /app
USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]
