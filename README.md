# MYP 56

A study and organization tool built specifically for IB Middle Years Programme
students — named for the maximum MYP score (8 subjects × 7 = 56). All data is stored locally in your browser (IndexedDB) — no account,
no backend, works fully offline, and installs to a phone home screen as a PWA.

## Features

1. **Command Term Decoder** — searchable reference of MYP command terms
   ("evaluate", "justify", "discuss"…) with plain-language explanations, what a
   high-level vs low-level response looks like, and sentence starters.
   Filterable by subject group.
2. **Statement of Inquiry Builder** — guided wizard: key concept → related
   concept(s) → global context → a well-formed SOI, with a live checklist and
   worked examples. Drafts are saved locally.
3. **Personal Project Companion** — process journal with entries tagged to the
   four PP criteria (Investigating, Planning, Taking Action, Reflecting), a
   milestone/deadline tracker with overdue highlighting, and one-click PDF
   export of the whole journal.
4. **ATL Skills Tracker** — ten-second logging of evidence against the five
   Approaches to Learning categories, with per-category counts and history.
5. **Criterion Self-Check** — pick a subject group + criterion (A–D) and see,
   in plain language, what separates a 3–4 response from a 7–8.
6. **Practice Centre** — pick one or more subjects (Biology, Chemistry,
   Physics, Mathematics, History, Geography, English) and take a quiz. Every
   question gives an explanation whether you're right or wrong, and results
   flag what to revisit. Attempts are saved locally. Extend the question bank
   in `src/data/quizzes.js`.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- Dexie.js (IndexedDB) for local, offline-first storage
- vite-plugin-pwa (installable, offline-capable)
- jsPDF (lazy-loaded) for journal export

## Development

```sh
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production build + service worker in dist/
npm run preview  # serve the production build
```

## iOS app (App Store)

This project is wrapped with [Capacitor](https://capacitorjs.com/) so the exact
same web app ships as a native iOS app. The iOS project uses **Swift Package
Manager** (no CocoaPods needed) and lives in `ios/`.

### Build & run locally

```sh
npm run ios:open   # builds the web app, syncs it into iOS, opens Xcode
```

Or step by step:

```sh
npm run build      # produce dist/
npx cap sync ios   # copy dist/ + config into the iOS project
npx cap open ios   # open ios/App/App.xcodeproj in Xcode
```

In Xcode: select a simulator or your connected iPhone and press ▶ Run.

### Submitting to the App Store (manual steps — needs your Apple ID)

These require a Mac with Xcode (installed) and an **Apple Developer Program**
membership ($99/year). They can't be automated from here:

1. **Signing** — in Xcode, select the `App` target → *Signing & Capabilities*
   → check *Automatically manage signing* and pick your Team. The bundle ID is
   `com.mypcompanion.app` (change it in `capacitor.config.json` and Xcode if you
   want your own).
2. **App record** — create the app in
   [App Store Connect](https://appstoreconnect.apple.com) with the same bundle ID.
3. **Archive** — in Xcode: *Product → Destination → Any iOS Device*, then
   *Product → Archive*, then *Distribute App → App Store Connect → Upload*.
4. **Submit** — in App Store Connect, add screenshots, description and privacy
   details, then submit for review. (Privacy is simple here: the app collects no
   data and has no accounts — everything stays on the device.)

### App icon / splash

Source images live in `assets/` (`icon.png`, `splash.png`, `splash-dark.png`).
Regenerate the full icon/splash set after changing them:

```sh
npx @capacitor/assets generate --ios
```

### Android (optional)

Capacitor supports Android from the same code with `npx cap add android`
(requires Android Studio). Not set up yet.

## Notes

- Reference content (command terms, criteria descriptors, concepts, global
  contexts) ships as bundled data in `src/data/` — extend it there.
- Level descriptors are plain-language study aids, not official IB rubrics.
- v2 ideas (out of scope for now): cross-device sync, Global Context
  Connector, MYP-aligned flashcards, eAssessment practice bank.
