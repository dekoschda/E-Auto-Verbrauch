Version 37
Neue Funktionen:
- Liniendiagramm für die monatliche Entwicklung von Verbrauch und Kosten je 100 km
- automatische Plausibilitätsprüfung mit Fehlern und bestätigbaren Warnungen
- kostenlose Ladevorgänge per Eingabefeld und Kennzeichnung in der Historie
- Anzeige der App-Version und des Datums der letzten JSON-Sicherung
- vollständige JSON-Sicherung inklusive Ladevorgängen, Ladeanbietern und Einstellungen
- Wiederherstellung neuer Komplettsicherungen und älterer JSON-Backups
- fehlende PWA-Ressourcen ergänzt und Offline-Cache funktionsfähig gemacht

Kostenkennzahl in der Übersicht geändert:
- Anzeige jetzt in Euro pro 100 km
- Berechnung: gesamte Bruttokosten / Gesamtkilometer × 100
- Darstellung mit zwei Nachkommastellen

Farbbereiche korrigiert:
- bis einschließlich 16,0 kWh/100 km = grün
- 16,1 bis einschließlich 19,0 kWh/100 km = gelb
- 19,1 bis einschließlich 21,0 kWh/100 km = orange
- über 21,0 kWh/100 km = rot

Kosten pro Monat:
- 0 bis einschließlich 50,00 Euro = blau
- 50,01 bis einschließlich 100,00 Euro = violett
- über 100,00 Euro = magenta

Legenden und Balkenlogik verwenden dieselben Grenzwerte.
Der Service Worker leert alte Caches und lädt Dateien mit cache:no-store.
JavaScript-Syntax und Grenzwertlogik wurden geprüft.
Bestehende Ladehistorie bleibt unverändert.
