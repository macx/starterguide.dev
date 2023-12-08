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

Paketmanager werden verwendet, um das Herunterladen, Installieren, Aktualisieren und Verwalten von Softwarepaketen und Bibliotheken zu erleichtern. Dies erfolgt stets über die Kommandozeile, die wir fortan Terminal nennen. Wenn du damit noch nie gearbeitet hast, lese dir bitte unbedingt vorab die Einführung der [Kommandozeile](/command-line) durch.

**Homebrew** und **Chocolatey** sind Paketmanager für Betriebssysteme (Homebrew für macOS und Chocolatey für Windows). Mit Ihnen kannst du die Paketmanager **npm** und **Yarn** für Node.js-Projekte und **Composer** für PHP-Projekte verwalten.

Mit der Versionsverwaltung **Git** kannst du ein Repository klonen. Anders gesagt: Du lädst ein Repositorium von Dateien lokal auf deinen Computer herunterladen, um es anschließend zu benutzen. Häufig wird das bei Starterkits verwendet.

## Homebrew bzw. Chocolatey

Installiere dir als Erstes einen der beiden Pakatmanager: [Homebrew](https://brew.sh/#install) für macOS, oder [Chocolatey](https://docs.chocolatey.org/en-us/choco/setup#installing-chocolatey) für Windows.

{: .highlight }
Denke bitte daran, dass `$` nicht mit zu übernehmen. Das ist lediglich ein Hinweis auf die Eingabe von Befehlen.

### macOS

```shell
# Installation von Homebrew
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Test der erfolgreichen Installation
$ brew --version
Homebrew 4.1.24
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

Wenn eine Installation mit Homebrew oder Chocolatey nicht möglich war, führe die Installation manuell durch. Das erfordert aber ein wenig Handarbeit.

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

#### Windows

1. Lade dir den [Git-Installer](https://git-scm.com/download/win) herunter und führe die Installation durch.
2. Lade dir den [Node.js-Installer](https://nodejs.org/de) herunter und führe auch diese Installation durch.
3. Installiere nun Yarn:

```shell
$ npm install -g yarn
```

Überprüfe bitte nun, ob die [Installation erfolgreich](problems) war.
