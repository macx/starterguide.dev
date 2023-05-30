# Voraussetzungen

Die Versionsverwaltung und Package Manager sind essenzielle Tools zur Entwicklung von Websites. So installierst du Git, npm und Yarn.

> Weitere Leifäden zur Entwicklung von Websites findst du im [Index](../README.md).

**Inhalt**

- [Einrichtung](#einrichtung)
- [Manuelle Installation](#manuelle-installation)
  - [MacOS](#macos)
  - [Windows](#windows)
- [Installation über Packetmanager](#installation-über-packetmanager)
  - [MacOS](#macos-1)
  - [Windows](#windows-1)
- [Probleme beheben](#probleme-beheben)
  - [Probleme unter macOS beheben](#probleme-unter-macos-beheben)
  - [Probleme mit der Installation](#probleme-mit-der-installation)

## Einrichtung

Paketmananger, auch Package Mananger oder Paketverwaltung genannt, bezeichnet eine Sammlung von Werkzeugen für die komfortable Verwaltung von Computer-Software, also für Installation, Aktualisierung und Deinstallation.

Mit der Versionsverwaltung Git kannst du ein Repository klonen. Anders gesagt: Du kannst mit Git ein Repositorium von Dateien lokal auf deinen Computer herunterladen. Das macht man bei geteilten Projekten, aber auch bei Starterkits wie dem [GT 1191 Starterkit](https://github.com/HAWK-GT1191/gt1191-starterkit), mit dem du im Handumdrehen neue Websites entwickeln kannst.

Für die Installation stehen dir zwei Methoden zur Verfügung:

- [Manuelle](#manuelle-installation) Installation
- Installation [über Packetmanager](#installation-über-packetmanager) (empfohlen)

Die Installation erfolgt stets über das Terminal (Mac) bzw. der PowerShell (Windows). Falls du damit noch nicht gearbeitet hast, lese dir bitte vorab die [Anleitung](command-line.md) durch. _Öffne unter Windows die PowerShell bitte als Administrator (über Rechtsklick)._

## Manuelle Installation

Die manuelle Installation erfordert ein wenig Handarbeit. So kannst du aber auf die Installation der [Paketmanager](#installation-über-packetmanager) für das Betriebsystem verzichten.

### MacOS

1. Installiere dir Git über die von Apple bereitsgestellten Develper Tools:

```shell
$ xcode-select --install
```

2. Lade dir den [Node.js-Installer](https://nodejs.org/de) herunter und führe auch diese Installation durch.
3. Installiere nun Yarn. Hier musst du einmal dein Passwort eingeben (wird nicht angezeigt) und anschließend mit <kbd>Eingabe</kbd> bestätigen.

```shell
$ sudo npm isntall -g yarn
```

### Windows

1. Lade dir den [Git-Installer](https://git-scm.com/download/win) herunter und führe die Installation durch.
2. Lade dir den [Node.js-Installer](https://nodejs.org/de) herunter und führe auch diese Installation durch.
3. Installiere nun Yarn:

```shell
$ npm isntall -g yarn
```

Überprüfe bitte nun, ob die [Installation erfolgreich](#installation-erfolgreich) war.

## Installation über Packetmanager

Installiere dir zunächst den Packetmanager [Homebrew](https://brew.sh/#install) für MacOS bzw. [Chocolatey](https://docs.chocolatey.org/en-us/choco/setup#installing-chocolatey) für Windows und anschlißend mit ihnen Git, npm und Yarn.

### MacOS

```shell
# Installation von Homebrew
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Test der erfolgreichen Installation
$ brew --version
Homebrew 4.0.10-80-gbe7091b

# Installation von Git, npm und Yarn
$ brew install git node yarn
```

### Windows

```shell
# Installation von Chocolatey
$ Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Test der erfolgreichen Installation
$ choco --version
1.3.1

# Installation von Git, npm und Yarn
$ choco install git nodejs.install yarn
```

Überprüfe bitte nun, ob die [Installation erfolgreich](#installation-erfolgreich) war.

## Probleme beheben

Nach der Installation solltest du das Terminal einmal schließen und wieder öffnen, damit die Änderungen wirksam sind. Teste dann über das Terminal, ob Git, npm und Yarn erfolgreich installiert wurden. Das kann man über dessen Ausgabe der Versionsnummer herausfinden.

```shell
$ git --version
git version 2.40.0

$ npm --version
9.5.1

$ yarn --version
1.22.19
```

### Probleme unter macOS beheben

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
