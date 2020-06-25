#############################
Bestellungen bearbeiten
#############################

Das Modul erweitert den Reiter ``Artikel`` der Bestellübersicht. Sie finden den Punkt im Admin Bereich unter
``Bestellungen verwalten => Bestellungen``.

.. figure:: /_static/img/orders.png
   :align: center

   Artikel Details einer Bestellung

Es werden Ihnen alle Details der vom Kunden gestalteten Artikel angezeigt. Mit dem Button :guilabel:`Laufzettel drucken`
erzeugen Sie eine Auftragsübersicht zur Produktion.

Druckdateien generieren
=======================

Starten Sie das :doc:`EPS Tool </tools/epstool>` bevor Sie den die Artikelübersicht im Browser aufrufen. Prüfen Sie nun
ob der Status ``EPS Tool Verbindung`` auf ``Verbunden`` steht. Sollte die Verbindung nicht aufgebaut sein drücken Sie
den Button :guilabel:`Verbindung prüfen` und bestätigen Sie eventuelle Sicherheitsmeldungen mit einer Ausnahme.
Rufen Sie anschließend die Artikelübersicht erneut auf.

.. figure:: /_static/img/epstool-oxid-status.png
   :align: center

   Statusmeldung EPS Tool

:guilabel:`Druckdateien generieren` übergibt die geforderte Bestellung automatisch an das EPS Tool und öffnet die Datei.
Prüfen Sie den Status im EPS Tool, die Erstellung kann einige Sekunden dauern.
