# Movie Listing Mobile App

This project is a [React Native](https://facebook.github.io/react-native/) movie listing mobile application using [TMDB](https://developer.themoviedb.org/) API.

## Components Directory

This directory holds a reference to all the re-usable components and their type (Atom, Molecule & Organism)

#### Atoms

An atom is the smallest unit of ordinary matter that forms a chemical element. `Atoms` are the basic units of matter and the defining structure of elements

- CastItem
- CustomActivityIndicator
- CustomImage
- CustomText
- CustomTextInput
- KeywordItem
- MovieCard
- ReviewItem

#### Molecules

The `Atoms` combine to form `Molecules`

- GlobalLoader

#### Organisms

The `Atoms` & `Molecules` combine to form more complex `Organisms`

- AppWrapper
- SearchWithIcon

### Hooks

This directory holds a reference to all the re-usable hooks

- useAssets
- useTranslate

### Utils

This directory holds a reference to all the re-usable utils, helpers & constants

- helpers
- storageHandler

## Requirements

Node 14 or newer is required. Development for iOS requires a Mac and Xcode, and will target iOS 12.4 and up.

You also need to install the dependencies required by React Native.
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `Expo Go Quickstart` tab.
Follow the instructions.

## Quick start

To create a new project using the seed simply the following steps:

- Clone the project

```
git clone https://github.com/oguzhankurumm/mobile.listing.mobile.git
```

- Enter the project folder

```
cd mobile.listing.mobile
```

- Install the dependencies

```
yarn install
```

- Run app

```
yarn run start
```

- Update remote git repository

```
rm -rf .git
git init
git add --all
git commit -m "Initial Commit"
git remote add origin <new repo>
git push -u origin HEAD:master
```

## Useful commands

- Run android in dev env
  ```
  yarn run android-dev
  ```
- Run iOS in dev env
  ```
  yarn run ios-dev
  ```
