#!/bin/bash
set -euo pipefail

# ====== Config ======
AWS_REGION="us-east-1"
AWS_ACCOUNT_ID="014498663963"
REPO_NAME="portfolio"

# ====== Input ======
TAG=${1:-latest}

# ====== Build ======
echo "🚀 Building Docker image: ${REPO_NAME}:${TAG}"
docker build -t ${REPO_NAME}:${TAG} .

# ====== Tag for ECR ======
ECR_URI="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPO_NAME}:${TAG}"
echo "🔖 Tagging image as ${ECR_URI}"
docker tag ${REPO_NAME}:${TAG} ${ECR_URI}

# ====== Login ECR ======
echo "🔑 Logging in to ECR..."
aws ecr get-login-password --region ${AWS_REGION} \
  | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

# ====== Push ======
echo "📤 Pushing image to ECR..."
docker push ${ECR_URI}

echo "✅ Done! Image pushed: ${ECR_URI}"
