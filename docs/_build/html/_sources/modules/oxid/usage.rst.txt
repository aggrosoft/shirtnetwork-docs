#############
Verwendung
#############

Artikel synchronisieren
=======================

Damit Artikel in den Warenkorb gelegt werden können müssen diese mit einer :doc:`passenden Artikelnummer </modules/general/skuscheme>` in Ihrem Shop existieren.
Um doppelte Datenpflege zu vermeiden ist es möglich Artikel vom HBE in Ihren Shop zu übernehmen.
Bei diesem Vorgang wird das aktuelle :doc:`Artikelnummern Schema </modules/general/skuscheme>` und die :doc:`Einstellungen zur Synchronisierung </modules/oxid/settings>` beachtet.

Sie finden die Synchronisierung im Admin Bereich unter ``Shirtnetwork => Synchronisation``. Wählen Sie den gewünschten
Artikel aus und drücken Sie :guilabel:`Artikel synchronisieren` um den Artikel anzulegen.

.. Attention::
    Sollte der Artikel bereits vorher synchronisiert worden sein werden eventuelle Änderungen überschrieben.

Verlinkungen
==================

Das Modul stellt aktuell 2 Oberflächen bereit die im Frontend verlinkt werden können. Dies kann über einen externen Link
einer Kategorie erfolgen, oder über einen Link innerhalb des Templates oder eines CMS Inhaltes.

Designer
--------

Zeigt den eigentlichen Shirtnetwork Designer an. Der Link lautet wie folgt:

.. parsed-literal::
    https://www.mein-shop.de/index.php?cl=designer

Folgende zusätzliche Parameter können wahlweise übergeben werden um beliebige Daten vorzugeben:

============== ====================================================================================================
Parameter      Funktion
============== ====================================================================================================
``artnr``      Artikelnummer des Hauptartikels
``vartnr``     Artikelnummer der Variante
``sartnr``     Artikelnummer der Größe
``config``     ID einer Konfiguration die auf dem Backend Server liegt (nicht kompatibel mit anderen Parametern)
``text``       Start Text
``logo``       ID eines Logos
``overrides``  Alternativer Template Override
``custom``     Alternatives zusätzliches Javascript
``keep``       Wenn Wert = 1 dann werden bereits gestaltete Inhalte des Kunden nicht gelöscht
``plain``      Wenn Wert = 1 aktiviert den Popup Modus (nur der Designer wird gezeigt, ohne Shop layout)
============== ====================================================================================================

Motive
------

Zeigt die vorhandenen Motive und Motivkategorien an. Der Link lautet wie folgt:

.. parsed-literal::
    https://www.mein-shop.de/index.php?cl=designer_logos

Der Parameter ``lcid`` kann gesetzt werden um eine beliebige Logo Kategorie zu laden.