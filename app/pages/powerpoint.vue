<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 space-y-16">

      <!-- Terug -->
      <NuxtLink to="/" class="text-sm text-blue-600 hover:underline">
        ← Terug naar home
      </NuxtLink>

      <!-- Titel -->
      <header class="space-y-2">
        <h1 class="text-4xl font-extrabold">
          Microsoft PowerPoint – Complete basisles
        </h1>
        <p class="text-gray-600">
          Leer stap voor stap presentaties maken, ontwerpen en presenteren.
        </p>
      </header>

      <!-- Inhoudsopgave -->
      <section class="border rounded-xl p-6 bg-gray-50">
        <h2 class="text-2xl font-bold mb-4">📑 Inhoudsopgave</h2>
        <ul class="list-decimal list-inside space-y-1 text-blue-700">
          <li><a href="#les-1">Wat is PowerPoint?</a></li>
          <li><a href="#les-2">Het scherm</a></li>
          <li><a href="#les-3">Nieuwe dia</a></li>
          <li><a href="#les-4">Tekst toevoegen</a></li>
          <li><a href="#les-5">Afbeeldingen invoegen</a></li>
          <li><a href="#les-6">Ontwerp & Thema’s</a></li>
          <li><a href="#les-7">Overgangen</a></li>
          <li><a href="#les-9">Presenteren</a></li>
          <li><a href="#les-10">Opslaan & Samenvatting</a></li>
        </ul>
      </section>

      <!-- LES 1 -->
      <section id="les-1" class="lesson">
        <h2>📊 Les 1: Wat is PowerPoint?</h2>
        <p>PowerPoint is een presentatieprogramma dat gebruikt wordt om informatie overzichtelijk te presenteren aan een publiek. Het werkt met dia’s, die je als pagina’s kunt zien. Elke dia kan tekst, afbeeldingen, vormen en grafieken bevatten.</p>
        <ul>
          <li>Je kunt dia’s achter elkaar tonen als een verhaal</li>
          <li>Elke dia is één pagina van je presentatie</li>
          <li>PowerPoint wordt gebruikt voor school, werk of trainingen</li>
        </ul>
      </section>

      <!-- LES 2 -->
      <section id="les-2" class="lesson">
        <h2>🖥️ Les 2: Het scherm</h2>
        <p>Wanneer je PowerPoint opent, zie je verschillende onderdelen van het scherm:</p>
        <ul>
          <li>Links: overzicht van alle dia’s in de presentatie</li>
          <li>Midden: het werkvlak waar je de actieve dia bewerkt</li>
          <li>Boven: het lint met knoppen voor alle functies (Invoegen, Ontwerpen, Overgangen, etc.)</li>
          <li>Onder: notities en statusinformatie</li>
        </ul>

        <img
          src="/img/powerpoint/overzicht.png"
          class="rounded-lg shadow mt-4"
          alt="PowerPoint scherm"
        />
      </section>

      <!-- LES 3 -->
      <section id="les-3" class="lesson">
        <h2>➕ Les 3: Nieuwe dia maken</h2>
        <p>Om een presentatie te starten of uit te breiden, maak je nieuwe dia’s aan. Je kunt kiezen uit verschillende indelingen, zoals titel, tekst, afbeelding of een combinatie.</p>
        <ul>
          <li>Klik op <strong>Nieuwe dia</strong></li>
          <li>Kies een indeling die past bij wat je wilt laten zien</li>
          <li>Je kunt dia’s verslepen om ze in een andere volgorde te zetten</li>
        </ul>

        <img
          src="/img/powerpoint/nieuwe-dia.png"
          class="rounded-lg shadow mt-4"
          alt="Nieuwe dia maken"
        />
      </section>

      <!-- LES 4 -->
      <section id="les-4" class="lesson">
        <h2>✍️ Les 4: Tekst toevoegen</h2>
        <p>Tekst is een belangrijk onderdeel van je presentatie. Gebruik korte zinnen en bullet points om informatie overzichtelijk te maken.</p>
        <ul>
          <li>Klik in een tekstvak op de dia</li>
          <li>Begin met typen</li>
          <li>Gebruik titels en korte zinnen per dia</li>
          <li>1 dia = 1 onderwerp voor overzichtelijkheid</li>
        </ul>

        <img
          src="/img/powerpoint/tekstvak.png"
          class="rounded-lg shadow mt-4"
          alt="Tekstvak"
        />

        <div class="exercise mt-4">
          <p class="font-semibold">👉 Oefening:</p>
          <p>Maak een dia met de titel <strong>Mijn eerste presentatie</strong> en voeg 3 korte zinnen toe.</p>
        </div>
      </section>

      <!-- LES 5 -->
      <section id="les-5" class="lesson">
        <h2>🖼️ Les 5: Afbeeldingen invoegen</h2>
        <p>Afbeeldingen maken een presentatie visueel en interessant. Zorg dat de afbeeldingen passen bij de tekst en niet te groot zijn.</p>
        <ul>
          <li>Klik op <strong>Invoegen</strong> → <strong>Afbeeldingen</strong></li>
          <li>Kies een foto van je computer</li>
          <li>Sleep en schaal de afbeelding zodat deze past in de dia</li>
        </ul>

        <img
          src="/img/powerpoint/afbeelding-invoegen.png"
          class="rounded-lg shadow mt-4"
          alt="Afbeelding invoegen"
        />
      </section>

      <!-- LES 6 -->
      <section id="les-6" class="lesson">
        <h2>🎨 Les 6: Ontwerp & Thema’s</h2>
        <p>Met thema’s en ontwerpen maak je je presentatie professioneel en overzichtelijk. Kies rustige kleuren en maximaal 2 lettertypes voor een consistente stijl.</p>
        <ul>
          <li>Klik op <strong>Ontwerpen</strong></li>
          <li>Kies een thema of achtergrondstijl</li>
          <li>Gebruik consistente kleuren en lettertypes</li>
        </ul>

        <img
          src="/img/powerpoint/ontwerp-thema.png"
          class="rounded-lg shadow mt-4"
          alt="Ontwerp thema"
        />
      </section>

      <!-- LES 7 -->
      <section id="les-7" class="lesson">
        <h2>🔄 Les 7: Overgangen</h2>
        <p>Overgangen zijn effecten die dia’s vloeiend in elkaar laten overgaan. Ze maken een presentatie dynamischer maar gebruik ze spaarzaam.</p>
        <ul>
          <li>Klik op <strong>Overgangen</strong></li>
          <li>Kies een overgang zoals <em>Vervagen</em> of <em>Schuiven</em></li>
          <li>Pas de overgang toe op één of meerdere dia’s</li>
        </ul>

        <img
          src="/img/powerpoint/overgang.png"
          class="rounded-lg shadow mt-4"
          alt="Overgangen"
        />

        <div class="exercise mt-4">
          <p class="font-semibold">👉 Oefening:</p>
          <p>Plaats een overgang op alle dia’s van je presentatie.</p>
        </div>
      </section>

      <!-- LES 9 -->
      <section id="les-9" class="lesson">
        <h2>🎤 Les 9: Presenteren</h2>
        <p>Een presentatie is pas effectief als je hem goed presenteert. Let op je stem, tempo en het gebruik van de dia’s.</p>
        <ul>
          <li>Klik op <strong>Diavoorstelling → Vanaf begin</strong></li>
          <li>Gebruik de pijltjes of spatiebalk om verder te gaan</li>
          <li>Praat rustig en maak oogcontact met je publiek</li>
          <li>Lees niet alles letterlijk van de dia’s</li>
        </ul>

        <img
          src="/img/powerpoint/diavoorstelling.png"
          class="rounded-lg shadow mt-4"
          alt="Diavoorstelling"
        />
      </section>

      <!-- LES 10 -->
      <section id="les-10" class="lesson">
        <h2>💾 Les 10: Opslaan & Samenvatting</h2>

        <p>Waarom opslaan?</p>
        <ul>
          <li>Als je niet opslaat, raak je alles kwijt</li>
          <li>PowerPoint slaat je presentatie niet automatisch op</li>
        </ul>

        <p>Hoe opslaan?</p>
        <ul>
          <li>Klik op <strong>Bestand</strong></li>
          <li>Klik op <strong>Opslaan als</strong></li>
          <li>Kies de map waar je wilt opslaan</li>
          <li>Geef een duidelijke naam, bijv. <em>mijn-presentatie</em></li>
          <li>Klik op <strong>Opslaan</strong></li>
        </ul>

        <div class="exercise mt-4">
          <p class="font-semibold">👉 Oefening:</p>
          <p>Sla je presentatie op onder de naam <strong>mijn-presentatie</strong>.</p>
        </div>

        <h2 class="pt-6 font-bold">✅ Wat heb je geleerd?</h2>
        <ul>
          <li>PowerPoint openen en dia’s maken</li>
          <li>Tekst en afbeeldingen toevoegen</li>
          <li>Thema’s kiezen en ontwerpen toepassen</li>
          <li>Overgangen toepassen</li>
          <li>Presenteren voor een publiek</li>
          <li>Je werk opslaan</li>
        </ul>
      </section>

    </div>
  </div>
</template>

<style scoped>
.lesson {
  @apply border rounded-xl p-6 bg-gray-50 space-y-4;
}

.lesson h2 {
  @apply text-2xl font-bold;
}

.lesson ul {
  @apply list-disc list-inside space-y-1;
}

.exercise {
  @apply bg-blue-50 border-l-4 border-blue-500 p-4 rounded;
}
</style>
