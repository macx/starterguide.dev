---
layout: default
title: PHP und MySQL
parent: Voraussetzungen
nav_order: 2
permalink: prerequisits/php-mysql
---

# Installation von PHP und MySQL
{: .no_toc }

## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## PHP

PHP ist eine serverseitige Skriptsprache, die hauptsächlich für die Entwicklung von dynamischen Webseiten und Webanwendungen verwendet wird, indem sie HTML mit Datenbanken und anderen Funktionen verbindet. Sie wird in CMS wie WordPress und Kirby verwendet. Da diese meistens noch nicht zum Start die aktuellste Version PHP unterstützen, solltest du dir Vorversion installieren und es anschließend als Hintergrund-Service starten, damit es auch nach einem Neustart wieder zur Verfügung steht.


### MacOS

> Wir gehen davon aus, dass du Homebrew und die Z-Shell (ZSH) verwendest. Ansonsten solltest du die Kommandos entsprechend anpassen.

```zsh
$ brew tap shivammathur/php
$ brew install shivammathur/php/php@8.1
$ echo 'export PATH="/opt/homebrew/opt/php@8.1/bin:$PATH"' >> ~/.zshrc
$ echo 'export PATH="/opt/homebrew/opt/php@8.1/sbin:$PATH"' >> ~/.zshrc
$ brew services start shivammathur/php/php@8.1
```

### Windows

```shell
$ choco install php --version 8.1
```

## MySQL

MySQL ist eine relationale Datenbankmanagement-Software, die häufig als Backend-Datenbank für Content-Management-Systeme (CMS) wie WordPress, Joomla und Drupal verwendet wird, um Daten wie Benutzerinformationen, Inhalte und Einstellungen effizient zu speichern und abzurufen.

Installiere dir nun MySQL und starte auch diesen Service im Hintergrund.

### MacOS

```zsh
$ brew install mysql
$ brew services start mysql
```

### Windows

```shell
$ choco install mysql
```

Um eine MySQL-Datenbank zu administrieren, gibt es neben dem Terminal auch GUI-Programme. Folgenden sind einen Blick wert:

- [Beekeeper Studio (Community Edition)](https://github.com/beekeeper-studio/beekeeper-studio)
- [DBngin](https://dbngin.com/)

## Webserver

### Laravel

Mit [Laravel Valet](https://laravel.com/docs/10.x/valet) können wir einen Dienst nutzen, der Nginx im Hintergrund zur Verfügung stellt und über DnsMasq jedes angemeldete Verzeichnis als *.test-Domain im lokalen Netzwerk zur Verfügung stellt.

```zsh
$ composer global require laravel/valet
$ valet install
```
