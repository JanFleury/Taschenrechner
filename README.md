# Taschenrechner

Ein fertiges VS-Code-Projekt mit HTML, CSS und JavaScript. Keine Installation von Paketen erforderlich.

## Starten

1. ZIP-Datei entpacken.
2. In Visual Studio Code **Datei → Ordner öffnen** wählen und den Ordner `Taschenrechner` öffnen.
3. `index.html` im Datei-Explorer doppelt anklicken, um den Rechner im Browser zu starten.

Alternativ kannst du die VS-Code-Erweiterung **Live Server** verwenden und `index.html` mit **Open with Live Server** öffnen.

## Funktionen

- Addition, Subtraktion, Multiplikation und Division
- Dezimalzahlen (Komma oder Punkt auf der Tastatur)
- Vorzeichen wechseln, letzte Ziffer löschen und alles zurücksetzen
- Prozenttaste: teilt die angezeigte Zahl durch 100, also `25 → 0,25`
- Fehlermeldung bei Division durch null
- Bedienung mit Maus, Touch oder Tastatur
- Darstellung für Smartphone und Desktop

Die Rechnung erfolgt schrittweise wie bei einem einfachen Taschenrechner: `2 + 3 × 4 = 20`. Es gilt keine Punkt-vor-Strich-Auswertung. Maximal 12 Ziffern bei der Eingabe; Ergebnisse werden auf 12 signifikante Stellen gerundet. Sehr grosse oder kleine Ergebnisse können in Exponentialschreibweise erscheinen. Nach `=` startet eine Ziffer eine neue Eingabe; wiederholtes `=` wiederholt die Rechnung nicht.

## Dateien

| Datei | Aufgabe |
| --- | --- |
| `index.html` | Aufbau und Tasten |
| `style.css` | Farben, Abstände und responsive Darstellung |
| `calculator.js` | Rechenlogik |
| `app.js` | Verbindet Oberfläche, Tastatur und Rechenlogik |
| `.vscode/launch.json` | Browserstart mit F5 in VS Code (Edge) |

## Tastatur

Ziffern und `+ - * /` für die Rechnung, `Enter` oder `=` für das Ergebnis, `Backspace` zum Korrigieren und `Esc` oder `Delete` zum Zurücksetzen. Wenn ein Button fokussiert ist, aktiviert Enter diesen Button.
