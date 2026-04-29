#!/bin/bash

echo "🧹 Cleaning up old auto-generated release tags..."
echo ""

# Get all tags matching auto-* pattern
AUTO_TAGS=$(git tag -l 'auto-*')

if [ -z "$AUTO_TAGS" ]; then
  echo "✅ No auto-* tags found. Nothing to clean up."
else
  echo "Found auto-generated tags:"
  echo "$AUTO_TAGS"
  echo ""
  echo "Deleting local tags..."
  git tag -d $AUTO_TAGS 2>/dev/null
  
  echo "Deleting remote tags..."
  for tag in $AUTO_TAGS; do
    git push origin :refs/tags/$tag 2>/dev/null && echo "  ✅ Deleted: $tag"
  done
fi

echo ""
echo "📦 Creating initial semantic-release tag..."
echo ""

# Check if v1.0.0 exists
if git rev-parse v1.0.0 >/dev/null 2>&1; then
  echo "⚠️  Tag v1.0.0 already exists!"
  echo "   Current tags:"
  git tag -l 'v*' | sort -V
else
  # Create and push initial tag
  git tag v1.0.0
  git push origin v1.0.0
  echo "✅ Created and pushed tag v1.0.0"
fi

echo ""
echo "🚀 Release setup complete!"
echo ""
echo "Next steps:"
echo "1. Go to GitHub Actions and verify release workflow"
echo "2. Merge branch fix/release-workflow-version to main"
echo "3. Push a commit with conventional commit message (e.g., 'feat: add feature')"
echo "4. semantic-release will automatically create next version"
echo ""
echo "Example commits:"
echo "  git commit -m 'feat: add new product page'"
echo "  git commit -m 'fix: resolve mobile navigation issue'"
echo "  git commit -m 'docs: update README'"
