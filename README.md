# Café Karma

Café Karma är ett modernt och trendriktigt buddhistiskt konditori. I denna repo hittas konditoriets app. En app valdes för att göra beställningarna så smidiga som möjligt, eftersom att många idag har med sig mobilerna vart de än går.


## Designen
**Färgval**

Som appens primära färg valdes orange, då det är en typiskt buddhistisk färg som exempelvis buddhistiska munkar brukar bära. Det har även fördelen att få appen att kännas varm och välkomnande. Som bakgrund valdes en ljus nyans av orange/brunt, som bidrar ytterligare till att ingiva en känsla av värme och lugn i appen, vilket för många är vad buddhismen handlar om. Genom hela appen har vi försökt undvika utstående färger och starka kontraster mellan färger för att inte störa lugnet i appen. Detta bidrar även till att appen får en ren och modern känsla. För att lättare navigera runt i appen har kanppar och interaktiva komponenter fått en lite mer intensiv orange färg. Detta gör det tydligt att de är tänkta att trycka på, och användaren behöver inte fundera på hur den ska navigera sig runt.

**Omslagfoto**

Både login-skärmen och hemskärmen innehåller en bild på ett buddhistiskt tempel i en djup skog med ett vattenfall i bakgrunden, vilket är något som återigen inger en känsla av lugn, samtidigt som det förstärker intrycket av appens buddhistiska inslag. Templet är dessutom i en färg som matchar appens primära färg, vilket får bilden att passa in bättre och inte kännas påtvingad.


## UX (Användarupplevelse)

Appen har designats för att vara enkel att använda med mobilen. Huvudfokus har varit att presentara informationen på ett tydligt sätt och undvika onödigt många steg och knapptryck.

**Presentation av bakverk**

På bakverkssidan är alla bakverk presenterade med varsin ruta. Eftersom applikationen är mobilanpassad är det viktigt att varje ruta är tydlig och lätt går att trycka på. Av den anledningen presenteras bakverken med en ruta per rad, och för att läsa mer om varje bakverk kan man trycka på hela rutan. Detta ger en snabb överblick och enkel möjlighet att läsa mer om varje bakverk samt lägga till de i varukorgen.

**Presentation av medarbetare**

För presentationen av medarbetare har varje medarbetare varsin ruta. Denna har en ljusare nyans än bakgrunden. Detta har två anldedningar: det blir tydligt att rutorna inte är klickbara och texten blir mer lättläslig då kontrasten mellan text och bakgrund är större. Den ljusa nyansen inger mer lungn och värme än om rutorna varit helt vita, vilket skulle ge hela sidan för skarpa kopntraster.

**Placering av knappar**

Genomgående har valet av placering av knappar byggt på att det ska vara enkelt att navigera runt mellan sidorna. Därför har majoriteten av knappar som ofta används placerats långt ner på skärmen för att lättare gå att trycka på. Knappar som inte används lika ofta, som exempelvis "logga ut" är placerad högt upp på skärmen för att inte lika lätt råka trycka fel. Kundvagnsknappen är placerad uppe till höger och tillbaka-knappar uppe till vänster. Detta eftersom det är standard att placera dessa knappar där, vilket gör att användare lätt kan känna igen sig i appen.

**Varningsruta**

På kundvagnssidan används en pop-up ruta för att försäkra om att användaren inte tryckt fel. Om användaren sätter en vara antal till mindre än 1 tillfrågas den om den vill ta bort produkten från varukorgen eller behålla den.


## Testning

Testning har utförts genom Ad Hoc testning som är olika testmetoder som utförs genom att använda applikationen.
Först gjordes en så kallad "Monkey Testing" där randomiserad input och knapptryckningar gjordes i appen.
Sedan prövades olika testcase utifrån våra erfarenheter av vad som potentiellt kan orsaka fel.
Till en början identifierades att det gick att sätta ett negativt antal av bakverk i ordern.
En funktion för detta var implementerad, en pop-up ruta med alternativen att behålla varan (minst antalet 1), eller att ta bort den. Det visade sig att det gick att klicka utanför pop-up rutan och på så vis ignorera någon av alternativen. Vi ändrade så att det inte gick att trycka bort pop-up rutan på något annat sätt än knapparna.

En annan sak som visade sig var att orderinformation sparades även efter att man loggat ut. Om en person loggar in och påbörjar en order, sedan loggar ut och en annan person loggar in ligger den gamla ordern kvar. Detta fixades genom att tömma all lokal information i klienten vid utloggningen.

