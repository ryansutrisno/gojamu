# Release Documentation

## Semantic Release Setup

This project uses `semantic-release` for automatic version management and release creation.

## Initial Setup (One-Time)

### 1. Merge Release Workflow to Main

```bash
git checkout main
git merge fix/release-workflow-version
git push origin main
```

### 2. Clean Up Old Tags (If Any)

If you have old `auto-*` tags from previous workflow:

```bash
# Run cleanup script
bash scripts/cleanup-tags.sh

# Or manual cleanup:
git tag -d auto-*
git push origin --delete auto-*
```

### 3. Create Initial Git Tag

```bash
# Create initial tag
git tag v1.0.0

# Push tag (triggers first release)
git push origin v1.0.0
```

### 4. Configure GitHub Secrets

Go to GitHub Repository → Settings → Secrets and variables → Actions

Add these secrets:

| Secret Name | Value | Required |
|------------|-------|----------|
| `GITHUB_TOKEN` | Auto-provided by GitHub | ✅ Yes |
| `NPM_TOKEN` | Your npm access token | Optional (only if publishing to npm) |

To get NPM_TOKEN (if needed):
1. Go to https://www.npmjs.com/
2. Account Settings → Access Tokens
3. Create New Token → Select "Automation"
4. Copy and save as `NPM_TOKEN` secret

## How It Works

### Automatic Release Process

1. **Push to main/master branch**
   ```bash
   git commit -m "feat: add new feature"
   git push origin main
   ```

2. **GitHub Actions triggers**
   - Workflow: `.github/workflows/release.yml`
   - Runs semantic-release automatically

3. **semantic-release determines version bump**:
   - `feat:` → Minor version (1.0.0 → 1.1.0)
   - `fix:` → Patch version (1.0.0 → 1.0.1)
   - `BREAKING CHANGE:` → Major version (1.0.0 → 2.0.0)

4. **Release is created**:
   - Git tag created (e.g., `v1.1.0`)
   - GitHub Release published
   - CHANGELOG.md updated
   - package.json version updated

### Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types**:
- `feat:` - New feature (triggers minor version bump)
- `fix:` - Bug fix (triggers patch version bump)
- `perf:` - Performance improvement (patch)
- `docs:` - Documentation changes (patch)
- `style:` - Code style changes (patch)
- `refactor:` - Code refactoring (patch)
- `test:` - Adding tests (patch)
- `chore:` - Maintenance tasks (patch)
- `build:` - Build system changes (patch)
- `ci:` - CI configuration changes (patch)

**Breaking Changes**:
Add `BREAKING CHANGE:` in commit footer:
```
feat: change API

BREAKING CHANGE: This changes the API endpoint structure
```

## Manual Release

To trigger release manually:

1. Go to GitHub → Actions → Release
2. Click "Run workflow"
3. Select branch (main/master)
4. Click "Run workflow"

## Troubleshooting

### Release Not Triggering

1. Check if commit message follows Conventional Commits
2. Verify `.releaserc.json` exists
3. Check GitHub Actions logs for errors

### Version Skipping

If version seems to skip (e.g., 1.0.0 → 1.2.0):

1. Check commit history for multiple `feat:` commits
2. Verify no duplicate tags exist: `git tag -l`
3. Run semantic-release in dry-run mode:
   ```bash
   npx semantic-release --dry-run
   ```

### Release Failed

Check GitHub Actions logs:
1. Go to Actions tab
2. Select failed workflow run
3. Check "Release" step for error message

Common issues:
- Missing `GITHUB_TOKEN` secret
- Git authentication issues
- Invalid commit message format

## Version History

View all releases: https://github.com/ryansutrisno/gojamu/releases

View all tags:
```bash
git tag -l
```

## Configuration Files

- `.github/workflows/release.yml` - GitHub Actions workflow
- `.releaserc.json` - semantic-release configuration
- `package.json` - version field (auto-updated)
- `CHANGELOG.md` - auto-generated changelog

## Example Workflow

```bash
# Make changes
git add .
git commit -m "feat: add new product page"

# Push to main
git push origin main

# GitHub Actions will:
# 1. Build project
# 2. Run semantic-release
# 3. Create GitHub Release v1.1.0
# 4. Update CHANGELOG.md
```
