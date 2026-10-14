# Trinkgeld-Rechner

Eine Expo-Mobile-App (React Native, TypeScript) mit genau einem Bildschirm:
Nutzer geben Betrag, Trinkgeld-Prozent und Personenzahl ein und sehen das
Trinkgeld, das Gesamt und den Betrag pro Person live und auf ganze Cent
gerundet. Die Berechnung liegt in einer reinen Funktion; ungültige Eingaben
zeigen eine deutsche Fehlermeldung statt der Ergebniswerte.

## Tech-Stack

- **Framework:** Expo (React Native) — ein einziger Screen, keine Navigation
- **Sprache:** TypeScript (strict)
- **Tests:** Jest über das `test`-Skript in `package.json`
- **Runtime:** Node.js + Expo (iOS/Android App, Web-Build für die Abnahme)

## Installation

```bash
npm ci
```

## Ausführen (Entwicklung)

Auf einem Gerät oder Simulator (die App lädt den Code live):

```bash
npx expo start
```

Dann im Terminal `i` (iOS-Simulator), `a` (Android-Emulator) drücken oder den
QR-Code mit der Expo-Go-App scannen. Für den Browser:

```bash
npx expo start --web
```

> `npx expo start` ist ein Entwicklungsserver und läuft, bis er beendet wird —
> für die Abnahme wird der Web-Export gebaut (siehe unten).

## Produktions-Build (Web-Export)

```bash
npm run build
```

Der Build (`expo export --platform web`) legt die statischen Dateien in `dist/`
ab. Diesen Ordner über einen beliebigen statischen Server ausliefern, z. B.:

```bash
npx serve dist
```

Dann `http://localhost:3000` im Browser öffnen.

## Tests

```bash
npm test
```

## Verwendung

Die App hat einen einzigen Bildschirm mit dem Titel **Trinkgeld-Rechner**:

1. **Betrag** eingeben (z. B. `100`).
2. **Trinkgeld (%)** eingeben (z. B. `10`).
3. **Personenzahl** eingeben (z. B. `2`).

Trinkgeld, Gesamt und Betrag pro Person aktualisieren sich bei jeder Eingabe –
es gibt keinen Absenden-Button. Alle Geldbeträge erscheinen im deutschen
Format mit zwei Nachkommastellen und Komma, z. B. `10,00 €`. Ungültige Eingaben
(leer, nicht-numerisch, Betrag ≤ 0, Prozent < 0, Personenzahl < 1) blenden die
Ergebnisse aus und zeigen stattdessen eine Fehlermeldung am betroffenen Feld –
erst, nachdem dort etwas getippt wurde.

## Features

- Ein einziger Bildschirm, keine Navigation
- Drei Eingabefelder: Betrag, Trinkgeld (%), Personenzahl
- Live-Berechnung des Trinkgelds, des Gesamts und des Betrags pro Person
- Reine, unit-getestete Berechnungsfunktion (`src/tip.ts`)
- Deutsche Euro-Formatierung mit zwei Nachkommastellen (`src/format.ts`)
- Deutsche Inline-Fehlermeldungen mit ausgeblendeten Ergebnissen bei
  ungültiger Eingabe
- Vollständig lokal: keine Netzwerkanfragen, keine dauerhafte Speicherung
