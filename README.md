# New Life Ozamiz — Final Web + Mobile Source

This project is intentionally **NOT Flutter**. It uses **HTML/CSS/JavaScript + Capacitor** so the same web code can be used for:

- GitHub Pages website
- Progressive Web App (PWA)
- Android APK/AAB through Capacitor
- iPhone/iPad app through Capacitor + Xcode

There are **no `.dart` files**.

## Official content workflow

The church team controls the official schedules, worship songs, and announcements. Visitors do **not** submit requests.

Edit `web/data/content.json` directly, or open `web/manage/index.html` from a local web server, edit the content, download `content.json`, and replace the repository copy. Then commit/push to GitHub.

This keeps the public site simple: people open it and see the latest official information.

## Folder structure

```text
New_Life_Ozamiz_Final/
├─ web/                         # Complete public website / PWA
│  ├─ index.html
│  ├─ styles.css
│  ├─ app.js
│  ├─ manifest.webmanifest
│  ├─ sw.js
│  ├─ data/
│  │  └─ content.json          # Official schedules/songs/events
│  ├─ assets/
│  │  ├─ icon.svg
│  │  ├─ icon-192.png
│  │  ├─ icon-512.png
│  │  └─ structure-look-like.png
│  └─ manage/                   # Church management editor
│     ├─ index.html
│     ├─ manage.js
│     └─ manage.css
├─ docs/
│  └─ structure-look-like-reference.png
├─ scripts/
│  └─ check.js
├─ .github/workflows/
│  ├─ github-pages.yml          # Deploy website
│  ├─ android.yml               # Build debug APK
│  ├─ ios.yml                   # Build iOS simulator app
│  └─ release-ios.yml           # Signing template
├─ capacitor.config.ts
├─ package.json
└─ README.md
```

## Run website locally

Use a web server; do not double-click `index.html` because `fetch()` needs HTTP.

```bash
npm install
npm run dev
```

Then open `http://localhost:5500`.

## GitHub Pages

Upload the whole project to a GitHub repository with `main` as the default branch. The workflow in `.github/workflows/github-pages.yml` publishes the `web/` folder automatically.

## Android APK

On GitHub, run **Actions → Build Android APK / AAB → Run workflow**. The workflow creates the Capacitor Android project, syncs the web app, and uploads a debug APK artifact.

For a store-ready release APK/AAB, configure Android signing credentials and change the workflow to `assembleRelease`.

## iPhone / iPad

An APK **cannot** be installed on an iPhone. iOS apps must be built as an iOS app and signed by Apple.

For an iPhone build you can:

1. Clone/download this repository on a Mac.
2. Run `npm install`.
3. Run `npx cap add ios`.
4. Run `npx cap sync ios`.
5. Run `npx cap open ios`.
6. Open the project in Xcode.
7. Select your Apple Developer team/signing settings.
8. Run on your connected iPhone, or archive and distribute through TestFlight/App Store.

The included GitHub Action can build an unsigned iOS Simulator app on `macos-latest`. Real-device/TestFlight distribution still requires Apple Developer signing credentials.

## Important architecture decision

The website is the source UI. Capacitor wraps the same web application for Android/iOS. **Flutter is not required.** If you used Flutter, the project would be written in Dart and you would see `.dart` files. This project deliberately avoids that stack.

## No public request system

The final version does NOT have a public song-request/schedule-request form. The church team sets the official schedule and song library.

## YouTube music

Songs are stored as YouTube links and opened/embedded through YouTube. The project does not download or rip YouTube audio/video.
