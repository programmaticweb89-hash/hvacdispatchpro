#!/usr/bin/env bash
# Deploy helper for hvacdispatchpro.com
#
# Pushes the local project to BOTH GitHub repos so Vercel and the public code
# stay in sync. Vercel watches programmaticweb89-hash/hvacdispatchpros.
#
# Usage:  ./deploy.sh "your commit message"
#
# Note: .git/config is excluded from workspace snapshots, so the remotes are
# re-attached on every run.

set -euo pipefail

REPO_DIR="/home/user/hvacdispatchpro"
PRODS_REPO="programmaticweb89-hash/hvacdispatchpros"   # private, connected to Vercel
PUB_REPO="programmaticweb89-hash/hvacdispatchpro"      # public mirror
PAT_FILE="${HOME}/.gh_pat"

cd "$REPO_DIR"

if [ ! -f "$PAT_FILE" ]; then
  echo "ERROR: $PAT_FILE not found. Write the GitHub PAT into it first:"
  echo "  printf '%s' 'github_pat_...' > ~/.gh_pat && chmod 600 ~/.gh_pat"
  exit 1
fi
PAT="$(cat "$PAT_FILE")"

MSG="${1:-Update site}"

git config user.name  "programmaticweb89-hash"
git config user.email "programmaticweb89-hash@users.noreply.github.com"

git add -A
if git diff --cached --quiet; then
  echo "Nothing to commit."
else
  git commit -m "$MSG"
fi

# Attach remotes fresh every run (they do not survive snapshots)
git remote remove prods 2>/dev/null || true
git remote remove pub   2>/dev/null || true
git remote add prods "https://programmaticweb89-hash:${PAT}@github.com/${PRODS_REPO}.git"
git remote add pub   "https://programmaticweb89-hash:${PAT}@github.com/${PUB_REPO}.git"

echo
echo "==> Pushing to Vercel-connected repo: ${PRODS_REPO}"
git push prods main

echo
echo "==> Pushing to public mirror: ${PUB_REPO}"
git push pub main

# Strip the token out of the stored config again
git remote remove prods
git remote remove pub

echo
echo "==> Both repos updated. Vercel will pick up ${PRODS_REPO} within ~30 seconds."
echo "    Watch it here: https://vercel.com/dashboard"
