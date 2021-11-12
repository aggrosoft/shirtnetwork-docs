##############
EPS Tool
##############

Das EPS Tool erzeugt aus den Konfigurationen Ihrer Kunden automatisch Druckdaten.
Das Tool kommuniziert hierfür mit dem :doc:`Backend Server <backend>`, dieser sollte also vorher installiert worden sein.

Installation
============

Java installieren
-----------------

Das EPS Tool basiert auf Java, um es zu verwenden muss ein sog. Java Runtime Environment (JRE) auf Ihrem
Computer installiert sein. Wir empfehlen den Einsatz des kostenfreien Open JDK von Oracle.

Adopt Open JDK stellt fertige Installationpakete für Open JDK bereit, dies vereinfacht die Installation.

Laden Sie das `Open JDK Installationspaket <https://adoptopenjdk.net>`__ für ihr Betriebssystem herunter und führen Sie es aus.
Die Vorauswahl auf der Website ist bereits optimal eingestellt. Folgen Sie den Schritten im Installer, weitere Hilfe finden Sie auf der Website von Adopt Open JDK.

Paket installieren
------------------

Laden Sie zunächst das Installationspaket aus unserem `Download Bereich <https://www.shirtnetwork.com/out/downloads/tools/shirtnetwork-eps-tool.zip>`__ herunter.
Das Paket kommt als .zip Archiv und muss entpackt werden, im Normalfall bietet ihr Betriebssystem hierfür eine Möglichkeit.
Entpacken Sie das Archiv in ein Verzeichnis Ihrer Wahl z.B. :guilabel:`C:\\epstool`. **Der Verzeichnisname darf keine runden oder eckigen Klammern enthalten,
er darf auch keine Umlaute enthalten.**

Perl installieren
-----------------

Unter Windows ist es zusätzlich notwendig Perl zu installieren, laden Sie das `Strawberry Perl Installationspaket <http://strawberryperl.com/>`__ herunter
und installieren Sie es unter :guilabel:`C:\\strawberry` (Standardeinstellung)

FontForge installieren
-----------------

Unter Windows ist es zusätzlich notwendig FontForge zu installieren, laden Sie das `FontForge Installationspaket <https://fontforge.org/en-US/>`__ herunter
und installieren Sie es unter :guilabel:`C:\\Program Files (x86)\\FontForgeBuilds` (Standardeinstellung)

Software starten
-----------------

Starten Sie das EPS Tool per Doppelklick auf die Datei :guilabel:`PdfLogoCreator.jar` im Installationsordner des EPS Tools.

Sollte das Tool nicht starten führen Sie bitte den folgenden Befehl auf der Kommandozeile Ihres Betriebssystems aus

:guilabel:`java -jar C:\\epstool\\PDFLogoCreator.jar`

Passen Sie den Pfad an ihren gewählten Installationsordner an, achten Sie auf eventuelle Fehlermeldung die ausgegeben
werden. Sollten Sie die Fehlermeldung nicht selbst beheben können senden Sie bitte die vollständige Ausgabe an unseren Support.

Konfiguration
=============

Nach dem ersten Start muss ein Projekt konfiguriert werden, der Bildschirm hierfür wird automatisch geöffnet.

.. figure:: /_static/img/epstool-project.png
   :align: center

   Projektbildschirm EPS Tool

Füllen Sie unter ``or create new project`` die Felder aus.

* **Project:** Name des Projekts, frei definierbar. Halten Sie den Namen am besten kurz und prägnant.
* **Shop-URL:** URL zum :doc:`Backend Server <backend>` e.g. :guilabel:`https://backend.mein-shop.de`
* **HBE-Login:** Shirtnetwork Benutzername bzw. E-Mail Adresse
* **HBE-Password:** Shirtnetwork Passwort
* **Shop System:** Wählen Sie in diesem Fall bitte unbedingt ``Config-Server``

Drücken Sie auf OK um das neue Projekt zu speichern.

Verwendung
==========

Das EPS Tool erlaubt es Ihnen Bestellungen manuell zu filtern und zu generieren, zusätzlich lässt sich die Generierung
eines bestimmten Auftrags auch direkt aus der Shop bzw. Warexo Backend starten.

.. figure:: /_static/img/epstool-list.png
   :align: center

   EPS Tool Hauptbildschirm

Geben Sie unter :guilabel:`from` und :guilabel:`until` einen Datumsbereich ein oder tragen Sie unter :guilabel:`Orders` eine
oder mehrere Bestellnummern (Komma getrennt) ein und klicken Sie auf :guilabel:`Load Orders` um eine Liste mit Bestellungen
zu erstellen.

Wählen Sie per Rechtsklick einen Eintrag aus, der Befehl :guilabel:`Generate EPS/AI/PDF` erzeugt die Druckdaten. Nachdem
der Vorgang abgeschlossen ist können Sie per Rechtsklick :guilabel:`Open ...` die Druckdatei im gewünschten Format öffnen.
