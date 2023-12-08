---
layout: default
title: Probleme beheben
parent: Voraussetzungen
nav_order: 3
permalink: prerequisits/problems
---

# Probleme beheben

Nach der Installation solltest du das Terminal einmal schließen und wieder öffnen, damit die Änderungen durch die Installation wirksam sind.

Teste über das Terminal, ob Git, npm und Yarn erfolgreich installiert wurden. Das kann man über dessen Ausgabe der Versionsnummer herausfinden.

```shell
$ git --version
git version 2.40.0

$ npm --version
9.5.1

$ yarn --version
1.22.19
```

## Probleme unter macOS beheben

Auf manchen Rechnern kommt es bei Node unter Umständen zu Problemen bei der Rechtevergabe. Dies kannst du mit dem folgenden Befehl beheben:

```shell
$ sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

Sollten bei `yarn install` oder `yarn dev` Fehlermeldungen auftreten, in denen von **node-gyp** die Rede ist, handelt es sich vermutlich um Inkompatibilitäten mit der vorinstallierten Software. Bitte installiere die die CommandLineTools von macOS neu:

```shell
$ sudo rm -rf  /Library/Developer/CommandLineTools
$ xcode-select --install
```

Installiere dir zur Sicherheit Node noch einmal neu:

```shell
# Manuelle Installation
$ npm install -g npm@latest

# Oder über Homebrew
$ brew reinstall node
```

### Probleme mit der Installation

Wenn du dir das Starterkit von einer vorherigen Installation kopierst, solltest du die Abhängigkeiten eines Starterkits neu installieren. Das funktioniert so:

`rm -rf ./node_modules .yarn.lock && yarn install`
