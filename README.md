# Pokémon (React Native)

A React Native app that lists Pokémon from PokéAPI with grid/list views, infinite scroll, pull-to-refresh, and a detail screen featuring species color, official artwork, base stats, abilities, and a cry sound on image load.
Built with React Native 0.82, React 19, RTK Query, FlashList, and Jest/Testing Library.

## Features
- Fast lists via FlashList (grid + list toggle)
- Infinite scroll + pull-to-refresh
- React Navigation (stack)
- Detail screen with species color from `pokemon-species/:id`, official artwork fallback, base stats, abilities, height/weight, and sound
- Unit & component tests with ~84% coverage
- ESLint + TypeScript typecheck

## Requirements
- Node ≥ 20
- Java JDK 17 (Android)
- Xcode 15+ (iOS)

## Setup
```bash
npm install
# or
yarn
```

### Environment
Create `.env`:
```
BASE_API_URL=https://pokeapi.co/api/v2
```
Import with:
```ts
import { BASE_API_URL } from '@env'
```

## Run
```bash
npm run start
npm run android
npm run ios
```

Optional explicit dev scripts:
```json
"start:dev": "cross-env BASE_API_URL=https://pokeapi.co/api/v2 react-native start",
"android:dev": "cross-env BASE_API_URL=https://pokeapi.co/api/v2 react-native run-android",
"ios:dev": "cross-env BASE_API_URL=https://pokeapi.co/api/v2 react-native run-ios"
```
Then: `npm i -D cross-env`

## Testing
```bash
npm test
npm test -- --coverage
```

## Lint & Types
```bash
npm run lint
npm run lint:fix
npm run typecheck
```


## Notes
- Jest config uses transformIgnorePatterns for RN libs, FlashList, RTK, immer.
- jest.setup.ts mocks: reanimated, react-native-sound, and @env.
- Redux Persist configured; dev middleware warnings adjusted.

## Design Inspiration

This app’s UI was inspired by the community Figma design “Pokédex — Community”.  
Figma: https://www.figma.com/design/AmiWILZA3kkYEExFDaj16c/Pok%C3%A9dex--Community-?node-id=0-1&p=f&t=vW7qzpUVQ8y9zunw-0


## PS 
This README was drafted with the help of AI to improve clarity, structure, and design.

## 🛡️ Security Architecture (Implemented in This Project)

This project includes a full mobile-security layer implemented both in
JavaScript and Android native code.\
Below is a detailed list of **every real protection added in this
repository**, including custom native modules and all security
libraries.

------------------------------------------------------------------------

# 🔐 1. Root & Emulator Detection (JS Layer)

### **Libraries used**

-   `@kamarajcalm/react-native-root-detection`
-   `react-native-device-info`

### **How it works**

On app startup: - Detects if the device is **rooted** - Detects if the
app runs inside an **emulator**

If detected → a security alert is shown\
→ the application automatically closes after 500ms.

### **Location**

`App.tsx` → inside a `useEffect()`.

------------------------------------------------------------------------

# 🛡️ 2. freeRASP (Advanced Runtime Protection)

### **Library**

-   `freerasp-react-native`

### **Detected threats**

-   Root / privileged access\
-   Emulator\
-   Debugger attached\
-   App tampering or repackaging\
-   Unofficial app stores\
-   Hooking frameworks\
-   Secure hardware unavailable\
-   System-level VPN redirection

### **Behavior**

Each threat triggers `closeApp()` (auto-exit) or logs an integrity
warning.

### **Location**

`App.tsx` → `useFreeRasp(config, actions)`

------------------------------------------------------------------------

# 📵 3. Screenshot & Screen Recording Block (Android Native)

The app prevents: - Screenshots\
- Screen recordings\
- Casting/mirroring

### **Native implementation**

``` kotlin
window.setFlags(
  WindowManager.LayoutParams.FLAG_SECURE,
  WindowManager.LayoutParams.FLAG_SECURE
)
```

### **Location**

`android/app/src/main/java/com/pokemon/MainActivity.kt`

------------------------------------------------------------------------

# 🌐 4. Proxy Detection (Custom Native Module)

### **Files added**

    android/app/src/main/java/com/pokemon/ProxyDetectModule.kt
    android/app/src/main/java/com/pokemon/ProxyDetectPackage.kt

### **JavaScript Hook**

`src/security/useProxyDetection.ts`

### **What it detects**

-   HTTP/HTTPS proxy\
-   Transparent proxy\
-   Manual proxy configured on device

### **Behavior**

If a proxy is detected: - Shows alert\
- App closes after 500ms

------------------------------------------------------------------------

# 🧪 5. Clone App / Multi-Instance Detection (Custom Native Module)

### **Files added**

    android/app/src/main/java/com/pokemon/CloneDetectionModule.kt
    android/app/src/main/java/com/pokemon/CloneDetectionPackage.kt

### **JavaScript Hook**

`src/security/useCloneDetection.ts`

### **Detects:**

-   Parallel Space\
-   Dual Apps (Samsung / Xiaomi)\
-   Virtual machines (VMOS / VirtualXposed)\
-   Multi-instance user profiles (UID anomaly)\
-   Fake storage paths\
-   Virtual sandboxes\
-   Installed clone apps

### **Behavior**

If detection = true → app closes automatically.

------------------------------------------------------------------------

# 🔒 6. Secure Storage (Encrypted Redux State)

### **Library**

`redux-persist-sensitive-storage`

### **What it does**

Redux persisted state is stored securely using: - Encrypted
SharedPreferences (Android) - Keystore-protected keys\
- No plaintext data stored on disk

### **Location**

`src/store/store.ts`

------------------------------------------------------------------------

# 🧱 7. Code Obfuscation & Minification

### **Technologies**

-   ProGuard/R8\
-   Hermes JS minification\
-   ShrinkResources

### **Enabled options**

    minifyEnabled true
    shrinkResources true
    proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'

### **Why it matters**

Protects against: - APK reverse engineering\
- Decompiled Java/Kotlin code\
- API key extraction\
- Static analysis

### **Location**

`android/app/build.gradle`

------------------------------------------------------------------------

# 🛡️ 8. Continuous Runtime Threat Monitoring (freeRASP Actions)

FreeRASP callbacks are configured to block execution on:

  Threat                    Action
  ------------------------- -------------------
  Root                      🚫 App closes
  Emulator                  🚫 App closes
  Debugger                  🚫 App closes
  Tampering                 🚫 App closes
  Unofficial store          🚫 App closes
  Hook detection            🚫 App closes
  Missing secure hardware   ⚠ Warning / close
  VPN rerouting             ⚠ Warning

### **Location**

`App.tsx` → `const actions = { ... }`

------------------------------------------------------------------------

# 🧰 All Security Libraries & Custom Modules Used

### **JavaScript packages**

-   `freerasp-react-native`
-   `@kamarajcalm/react-native-root-detection`
-   `react-native-device-info`
-   `redux-persist-sensitive-storage`

### **Custom Android and IOS native modules**

    ProxyDetectModule
    ProxyDetectPackage
    CloneDetectionModule
    CloneDetectionPackage

### **Native Android protections**

-   FLAG_SECURE (no screenshots)
-   ProGuard & R8
-   Hermes minification
-   PackageList custom packages injection (New Architecture)

------------------------------------------------------------------------

# ✔️ Final Security Coverage

  Security Layer                 Status
  ------------------------------ ------------------------------------------------------
  Root detection                 ✅ Implemented
  Emulator detection             ✅ Implemented
  Anti-debugging                 ✅ Implemented
  Screenshot blocking            ✅ Implemented
  Proxy MITM detection           ✅ Custom native module
  Clone app detection            ✅ Custom native module
  Secure storage                 ✅ Keystore encrypted
  Code obfuscation               ✅ Enabled
  Runtime integrity monitoring   ✅ freeRASP
  SSL pinning                    ❌ Not implemented (need ssl certificate )

------------------------------------------------------------------------

# 🧾 Summary

This app is secured against: - MITM proxy attacks\
- Cloned/virtualized app environments\
- Emulators\
- Rooted devices\
- Debuggers\
- Tampering and repackaging\
- Screen capture attacks\
- Storage extraction attacks

> **Note:** iOS security features and native modules were not implemented because i dont't have macOS.  
> All current security protections apply only to the Android version of the application.
