#####################
Artikelnummern Schema
#####################

Die Artikelnummer ist eine zentrale Komponente die sehr wichtig ist für die Übertragung der Daten an das Shop System ist.
Die verschiedenen Connectoren unterstützen unterschiedliche Methoden der Übertragung.
Die folgenden Schemas sind lediglich Empfehlungen die sich in der Praxis bewährt haben,
das soll Sie natürlich nicht davon abhalten Ihr eigenes Schema zu verwenden.

Stammartikel
=============
Für alle Connectoren gilt, die Artikelnummer des Stammartikels muss im HBE und im Shopsystem genau identisch sein.
Wir empfehlen entweder die Übernahme der Artikelnummer des Händlers oder
die Verwendung eines Schemas um Artikelnummern festzulegen.

Nummeriert
----------
Eine einfache Möglichkeit der Artikelnummernvergabe ist die Verwendung von
fortlaufenden Nummern mit führenden Nullen.

.. parsed-literal::
    000001
    000002
    000003
    000004
    000005

Gruppiert
---------
Wenn Sie viele Warengruppen im Sortiment haben empfiehlt es sich die Artikel zusätzlich mit einem Prefix zu versehen
um z.B. zwischen Herren, Damen und Kinderkleidung zu unterscheiden.

.. parsed-literal::
    A00001
    A00002
    B00001
    B00002
    C00001
    C00002

.. Hint::
    Diese Schemas lassen sich auch für die Varianten wiederverwenden.

Varianten
==========
Wie Sie die Varianten Ihrer Artikel kennzeichnen sollten hängt davon ab ob Sie eine Lagerhaltung
und/oder eine Anbindung an Ihre Warenwirtschaft benötigen. 2 Methoden haben sich bisher gut bewährt.

Sub Nummern
-----------
Bei diesem Schema werden die Varianten jeweils mit der Hauptartikelnummer als Prefix gekennzeichnet.
Beispiel für Varianten eines Hauptartikels mit der Artikelnummer 000001:

.. parsed-literal::
    000001-001
    000001-002
    000001-003
    000001-004
    000001-005

Variantenabhängig
-----------------
Diese Methode empfiehlt sich um verschiedene Varianten unterschiedlicher Artikel zu gruppieren -
z.B. nach Farbe oder Form. Hierzu vergeben Sie doppelte Variantenartikelnummern innerhalb unterschiedlicher Artikel.

Varianten für Artikel Männer T-Shirt

.. parsed-literal::
    001 (Rot)
    002 (Gelb)
    003 (Blau)
    004 (Grün)

Varianten für Artikel Frauen T-Shirt

.. parsed-literal::
    001 (Rot)
    002 (Gelb)
    003 (Blau)
    004 (Grün)

.. Attention::
    Die Hauptartikelnummer sollte auf jeden Fall eindeutig sein!

Größen
======
Für Größen können die selben Schemas wie für Varianten verwendet werden.

Mehrdimensionale Varianten
==========================
Oxid eShop bietet die Möglichkeit um mehrdimensionale Varianten abzubilden,
also Hauptartikel die in mehrfach verzweigte Subartikel haben.
Ein Beispiel für solche Varianten sind:

* T-Shirt, Farbe Rot, Größe M
* Poloshirt, Farbe Blau, Größe XL
* Tasse, Farbe Gold, Größe 150ml

Damit der Connector automatisch den zugrunde liegenden Shop Artikel ermitteln kann,
ist es notwendig dass Ihre Oxid Artikelnummern einem Schema folgen.
Dieses Schema sorgt dafür dass eine Subartikelnummer immer aus einer
Kombination von Haupt-, Varianten- und Größenartikelnummer besteht.

Beispiele
=========
Wie das Schema aussieht können Sie in den Einstellungen des Connectors selbst festlegen.

.. parsed-literal::
    {PRODUCT_SKU}-{VARIANT_SKU}-{SIZE_SKU}

Damit bei dieser Einstellung der richtige Artikel in den Warenkorb übertragen wird muss beispielsweise folgendes gelten:

* Der HBE Hauptartikel hat die Artikelnummer 000001
* Die HBE Variante hat die Artikelnummer 001
* Die HBE Größe hat die Artikelnummer 123
* Die Mehrdimensionale Oxid Variante hat die Artikelnummer 000001-001-123

Sie können dieses Schema wie bereits erwähnt beliebig ändern, so könnten Sie auf Werte verzichten -
diese mit einem festen Prefix versehen oder weitere Einstellungen vornehmen.

So könnten Sie zum Beispiel mit dem Subnummern Artikelschema arbeiten wenn Sie folgende Einstellung setzen:

.. parsed-literal::
    {VARIANT_SKU}-{SIZE_SKU}

Damit bei dieser Einstellung der richtige Artikel in den Warenkorb übertragen wird muss beispielsweise folgendes gelten:

* Die HBE Variante hat die Artikelnummer 000001-001
* Die HBE Größe hat die Artikelnummer 123
* Die Mehrdimensionale Oxid Variante hat die Artikelnummer 000001-001-123