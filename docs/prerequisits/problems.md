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
$ git -v
git version 2.39.3 (Apple Git-145)

$ npm -v
10.2.3

$ yarn -v
1.22.21
```

## Probleme unter macOS beheben

Auf manchen Rechnern kommt es bei Node unter Umständen zu Problemen bei der Rechtevergabe. Dies kannst du mit dem folgenden Befehl beheben:

```shell
$ sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

### Probleme mit node-gyp

Sollten bei `yarn install` oder `yarn dev` Fehlermeldungen auftreten, in denen von **node-gyp** die Rede ist, handelt es sich vermutlich um Inkompatibilitäten mit der vorinstallierten Software. Probiere zunächst folgendes in deinem Projekt:

```shell
$ yarn install --ignore-scripts
```

Bekommst du weiterhin die o.g. Fehlermeldung, installiere dir die CommandLineTools von macOS neu:

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
