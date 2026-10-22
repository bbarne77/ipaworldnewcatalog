# IPA Catalog web starter

This is a static starter for GitHub Pages. It is **not** a signing service and currently contains demo entries only.

## Publish on GitHub Pages
1. Create a repository named `ipa-catalog`.
2. Upload all files from this folder to the repository root.
3. In repository Settings → Pages, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. Wait for the published URL shown in Settings → Pages.

## Add to iPhone Home Screen
Open the published URL in Safari → Share → Add to Home Screen → Add. This works without a configuration profile and is the simplest first step.

## About `.mobileconfig`
A Web Clip configuration profile can create a home-screen icon, but it needs the final HTTPS site URL and should be generated after the site is published. Installing a profile requires the user to approve it in iOS Settings.

## Important next steps
- The admin panel is not implemented in this starter. Do not make the repository public if you later add secrets or private files.
- To let only the owner upload apps, add a backend with server-side authentication; static GitHub Pages alone cannot securely provide a private admin panel or safely store uploaded IPA files.
- IPA signing/re-signing is not implemented. A Web Clip profile does not sign or install IPA files.
GitHub Pages deployment retry
