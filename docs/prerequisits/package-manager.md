---
layout: default
title: Paketmanager und Git
parent: Voraussetzungen
nav_order: 1
permalink: prerequisits/package-manager
---

# Paketmanager und Git
{: .no_toc }

Versionsverwaltung und Package Manager sind essenzielle Tools zur Entwicklung von Websites. So installierst du sie.
{: .fs-6 .fw-300 }

## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Anwendung

Paketmanager werden verwendet, um das Herunterladen, Installieren, Aktualisieren und Verwalten von Softwarepaketen und Bibliotheken zu erleichtern. Dies erfolgt stets über die Kommandozeile, die wir fortan Terminal nennen. Wenn du damit noch nie gearbeitet hast, lese dir bitte unbedingt vorab die Einführung der [Kommandozeile](command-line.md) durch.

**Homebrew** und **Chocolatey** sind Paketmanager für Betriebssysteme (Homebrew für macOS und Chocolatey für Windows). Mit Ihnen kannst du auch die Paketmanager **npm** und **Yarn** für Node.js-Projekte und **Composer** für PHP-Projekte verwalten.

Mit der Versionsverwaltung **Git** kannst du ein Repository klonen. Anders gesagt: Du lädst ein Repositorium von Dateien lokal auf deinen Computer herunterladen, um es anschließend zu benutzen. Häufig wird das bei Starterkits verwendet.

## Homebrew bzw. Chocolatey

Installiere dir als Erstes einen der beiden Pakatmanager [Homebrew](https://brew.sh/#install) oder [Chocolatey](https://docs.chocolatey.org/en-us/choco/setup#installing-chocolatey) für dein Betriebssystem.

### macOS

```shell
# Installation von Homebrew
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Test der erfolgreichen Installation
$ brew --version
Homebrew 4.0.10-80-gbe7091b
```

Mit dem Befehl `brew` kannst du nun Software verwalten. `brew help` gibt dir eine Übersicht über die möglichen Befehle.

### Windows

```shell
# Installation von Chocolatey
$ Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Test der erfolgreichen Installation
$ choco --version
1.3.1
```

Mit dem Befehl `choco` kannst du nun Software verwalten. `choco help` gibt dir eine Übersicht über die möglichen Befehle.


## Git, Node und Yarn

[Git](https://git-scm.com/) ist ein Versionskontrollsystem, das verwendet wird, um Änderungen an Codeprojekten zu verfolgen, Zusammenarbeit zu ermöglichen und verschiedene Versionen des Codes zu verwalten. [npm](https://www.npmjs.com/) (Node Package Manager) und [Yarn](https://yarnpkg.com/) sind Paketmanager, die in Verbindung mit Git verwendet werden, um zusätzliche Bibliotheken und Abhängigkeiten für ein Projekt zu installieren, zu aktualisieren und zu verwalten.

Verwende für die Installation am besten Homebrew bzw. Chocolatey. Alternativ kannst du diese aber auch mit etwas mehr Aufwand manuell durchführen.

### macOS

```shell
# Installation von Git, npm und Yarn
$ brew install git node yarn
```

### Windows

```shell
# Installation von Git, npm und Yarn
$ choco install git nodejs.install yarn
```

### Manuelle Installation

Wenn du die oben genannten Schritte nicht durchführen konntet, kannst du die Paketmanager auch manuell installieren. Lade dir unter macOS zunächst mit dem Befehl `xcode-select --install` die von Apple bereitgestellten Developer Tools herunter und installiere sie. Lade dir anschließend den [Node.js-Installer](https://nodejs.org/de) herunter starte ihn.



 hast, kannst du die benötigten Paketmanager auch manuell installieren. Installiere dir auf macOS
Wenn du alternativ die manuelle Installation bevorzugst, Bei der manuellen Installation installiere zunächst die von Apple bereitgestellten Developer Tools.

```shell
$ xcode-select --install
```

Lade dir nun den [Node.js-Installer](https://nodejs.org/de) herunter starte ihn. Installiere anschließend yarn als Administrator (sudo) und bestätige dies mit der Eingabe deines Passworts (wird nicht angezeigt), sowie <kbd>Eingabe</kbd>.

```shell
$ sudo npm install -g yarn
```
Die manuelle Installation ist auch unter Windows etwas langwieriger.

1. Lade dir den [Git-Installer](https://git-scm.com/download/win) herunter und führe die Installation durch.
2. Lade dir den [Node.js-Installer](https://nodejs.org/de) herunter und führe auch diese Installation durch.
3. Installiere nun Yarn:




## Composer

##
choco install Composer“

### Manuelle Installation

Die manuelle Installation erfordert ein wenig Handarbeit. So kannst du aber auf die Installation der [Paketmanager](#installation-über-paketmanager) für das Betriebsystem verzichten.

#### MacOS

1. Installiere dir Git über die von Apple bereitsgestellten Develper Tools:

```shell
$ xcode-select --install
```

2. Lade dir den [Node.js-Installer](https://nodejs.org/de) herunter und führe auch diese Installation durch.
3. Installiere nun Yarn. Hier musst du einmal dein Passwort eingeben (wird nicht angezeigt) und anschließend mit <kbd>Eingabe</kbd> bestätigen.

```shell
$ sudo npm install -g yarn
```

### Windows

1. Lade dir den [Git-Installer](https://git-scm.com/download/win) herunter und führe die Installation durch.
2. Lade dir den [Node.js-Installer](https://nodejs.org/de) herunter und führe auch diese Installation durch.
3. Installiere nun Yarn:

```shell
$ npm install -g yarn
```

Überprüfe bitte nun, ob die [Installation erfolgreich](#installation-erfolgreich) war.

## Installation über Paketmanager

Installiere dir zunächst den Paketmanager [Homebrew](https://brew.sh/#install) für MacOS bzw. [Chocolatey](https://docs.chocolatey.org/en-us/choco/setup#installing-chocolatey) für Windows und anschlißend mit ihnen Git, npm und Yarn.

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
