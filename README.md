#Micropay GO

##Dependencies
1. Node version 10

##Initialize

1. Clone the repo

2. Install the dependencies
```bash
npm i
```

3. Launch the app on android/ios

```bash
react-native run-android
```
```bash
react-native run-ios
```

## Directory Structure

1. `assets` - images, fonts and other binary files
2. `components` - reusable UI components
3. `config` - configuration scripts and locale-specific properties
4. `redux` - action creators and reducers needed for state management
5. `scenes` - defines the structure of the app or sub-feature
6. `utils` - miscellaneous utilities e.g. network calls, api libraries, validations etc
7. `features` - compartmentalized copies of 1-6 for each feature on an as-needed basis

## Routing
The app uses "react-native-router-flux" for its wouting. The declarative routes are listed in the scene directories and loaded into `/src/index.js`
