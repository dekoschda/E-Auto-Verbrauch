E-Auto Verbrauch – Version 15 REPARATUR

Wichtig:
Version 14 enthielt versehentlich doppelte JavaScript-Deklarationen für VEHICLE_KEY und vehicle.
Dadurch wurde das gesamte JavaScript nicht ausgeführt. Die Ladehistorie wurde dadurch nicht gelöscht;
sie wurde lediglich nicht mehr angezeigt, sofern der Browser-LocalStorage noch vorhanden ist.

Reparatur:
- doppelten JavaScript-Code entfernt
- bestehender Ladehistorien-Schlüssel bleibt unverändert: ev-charges-v2
- Fahrzeugseite im Dock funktioniert
- Fahrzeug-Seitentitel ergänzt
- Ladehistorie wird defensiv aus LocalStorage geladen
- Anzeige der Anzahl gefundener gespeicherter Ladevorgänge
- Service Worker auf Network-first umgestellt und Cache-Version erhöht, damit Updates zuverlässiger greifen

Bitte NICHT die Browser-/Website-Daten löschen, bevor die Ladehistorie wieder sichtbar ist.
