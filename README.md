Die App ToDo wurde mit dem Meteor js-framework erstellt und verwendet blaze als frontend framework.
Als Datenbank wird MongoDB (auch js) benutzt.


# Starten der ToDo-App
1. Im Terminal im Order todo 'meteor' in die Konsole tippen. Damit werden alle Packages geladen und der Server gestartet.
1. Im Browser unter 'localhost:3000' wird die App nun angezeigt.

# Grundlegender Aufbau der Implementierung
## client/main.js
js-Zugangspunkt, der auf dem Client geladen wird.
## server/main.js
js-Zugangspunkt, der auf dem Server geladen wird.
## imports/collections/tasks.js
Modul, das eine Mongo Collection für die Tasks erstellt, exportiert und persistent hält.
## imports/client/ui/pages
Enthält die Templates und js-Methoden für die verschiedenen Pages:
* Create a task
* Edit a task
* List the tasks
* Impressum
## imports/client/ui/components
Enthält grundsätzliche htlm-Komponenten und js-Methoden für die Web-App:
* Navigationsmenü
* Impressumsmenü
* die Entity Tasks
## imports/server
Enthält js-Methoden zur Ausführung auf dem Server
## import/client/routing/routes.js
Routing table, die verschiedenen URLs das zugehörige Template zuweist.
## package.json
Kontrolldatei, um NPM-Packages zu installieren
## .meteor
Meteor-interne Dateien
