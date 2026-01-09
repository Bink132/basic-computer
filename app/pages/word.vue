<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 space-y-16">

      <!-- Terug -->
      <NuxtLink
        to="/"
        class="text-sm text-blue-600 hover:underline"
      >
        ← Terug naar home
      </NuxtLink>

      <!-- Titel -->
      <header class="space-y-2">
        <h1 class="text-4xl font-extrabold">
          Microsoft Word – Complete basisles
        </h1>
        <p class="text-gray-600">
          In deze les leer je stap voor stap werken met Microsoft Word.
        </p>
      </header>

      <!-- Inhoudsopgave -->
      <section class="border rounded-xl p-6 bg-gray-50">
        <h2 class="text-2xl font-bold mb-4">
          📑 Inhoudsopgave
        </h2>
        <ul class="list-decimal list-inside space-y-1 text-blue-700">
          <li><a href="#les-1" class="hover:underline">Kennismaken met Word</a></li>
          <li><a href="#les-2" class="hover:underline">Muis en toetsenbord</a></li>
          <li><a href="#les-3" class="hover:underline">Tekst typen</a></li>
          <li><a href="#les-4" class="hover:underline">Tekst selecteren</a></li>
          <li><a href="#les-5" class="hover:underline">Tekst opmaken</a></li>
          <li><a href="#les-6" class="hover:underline">Lijsten maken</a></li>
          <li><a href="#les-7" class="hover:underline">Afbeeldingen invoegen</a></li>
          <li><a href="#les-8" class="hover:underline">Opslaan</a></li>
          <li><a href="#les-9" class="hover:underline">Openen</a></li>
          <li><a href="#les-10" class="hover:underline">Afsluiten</a></li>
        </ul>
      </section>

      <!-- LES 1 -->
      <section id="les-1" class="lesson">
        <h2>🧩 Les 1: Kennismaken met Word</h2>
        <p>
          Word is een tekstprogramma. Dat betekent dat:
        </p>
        <ul>
          <li>je kunt typen</li>
          <li>je kunt lezen</li>
          <li>je kunt opslaan</li>
          <li>je kunt printen</li>
        </ul>

        <p class="font-semibold">
          Je gebruikt Word bijvoorbeeld voor:
        </p>
        <ul>
          <li>een brief</li>
          <li>een formulier</li>
          <li>een verslag</li>
          <li>een lijst</li>
          <li>een planning</li>
        </ul>
      </section>

      <!-- LES 2 -->
      <section id="les-2" class="lesson">
        <h2>🖱️ Les 2: Muis en toetsenbord</h2>

        <p class="font-semibold">De muis</p>
        <ul>
          <li>Linkermuisknop = klikken</li>
          <li>Dubbelklik = openen</li>
          <li>Scrollwiel = omhoog / omlaag</li>
        </ul>

        <p class="font-semibold">Belangrijke toetsen</p>
        <ul>
          <li>Enter → nieuwe regel</li>
          <li>Spatie → spatie</li>
          <li>Backspace → verwijderen</li>
          <li>Shift → hoofdletter</li>
        </ul>
      </section>

      <!-- LES 3 -->
      <section id="les-3" class="lesson">
        <h2>⌨️ Les 3: Tekst typen</h2>

        <ul>
          <li>Klik in het witte vlak</li>
          <li>De cursor knippert</li>
          <li>Begin met typen</li>
        </ul>

        <div class="exercise">
          <p class="font-semibold">👉 Oefening</p>
          <p class="font-mono bg-white p-3 rounded mt-2">
            Mijn naam is:<br />
            Vandaag werk ik in Word.<br />
            Dit is mijn eerste document.<br />
            Neem rustig de tijd.
          </p>
        </div>
      </section>

      <!-- LES 4 -->
      <section id="les-4" class="lesson">
        <h2>🔠 Les 4: Tekst selecteren</h2>

        <p>
          Selecteren = tekst aanwijzen zodat je er iets mee kunt doen.
        </p>

        <ul>
          <li>Klik vóór een woord</li>
          <li>Houd muisknop ingedrukt</li>
          <li>Sleep over de tekst</li>
          <li>Laat los</li>
        </ul>
      </section>

      <!-- LES 5 -->
      <section id="les-5" class="lesson">
        <h2>🔡 Les 5: Tekst opmaken</h2>

        <ul>
          <li>B = vet</li>
          <li>I = cursief</li>
          <li>U = onderstrepen</li>
          <li>Lettergrootte aanpassen</li>
        </ul>

        <div class="exercise">
          <p class="font-semibold">👉 Oefening</p>
          <ul>
            <li>Selecteer een zin</li>
            <li>Maak hem vet</li>
            <li>Maak hem groter</li>
            <li>Zet hem weer normaal</li>
          </ul>
        </div>
      </section>

      <!-- LES 6 -->
      <section id="les-6" class="lesson">
        <h2>📋 Les 6: Lijsten maken</h2>

        <ul>
          <li>Taken</li>
          <li>Boodschappen</li>
          <li>Stappen</li>
        </ul>
      </section>

      <!-- LES 7 -->
      <section id="les-7" class="lesson">
        <h2>🖼️ Les 7: Afbeeldingen invoegen</h2>

        <ul>
          <li>Klik op Invoegen</li>
          <li>Klik op Afbeeldingen</li>
          <li>Kies een foto</li>
          <li>Klik op Invoegen</li>
        </ul>
      </section>

      <!-- LES 8 -->
      <section id="les-8" class="lesson">
        <h2>💾 Les 8: Opslaan</h2>

        <ul>
          <li>Klik op Bestand</li>
          <li>Klik op Opslaan als</li>
          <li>Kies Documenten</li>
          <li>Geef een naam</li>
        </ul>
      </section>

      <!-- LES 9 -->
      <section id="les-9" class="lesson">
        <h2>📂 Les 9: Document openen</h2>

        <ul>
          <li>Open Word</li>
          <li>Klik op Openen</li>
          <li>Kies je document</li>
        </ul>
      </section>

      <!-- LES 10 -->
      <section id="les-10" class="lesson">
        <h2>🖨️ Les 10: Afsluiten</h2>

        <ul>
          <li>Klik op X</li>
          <li>Kies altijd Opslaan</li>
        </ul>

        <p class="font-semibold pt-4">
          ✅ Wat heb je geleerd?
        </p>
        <ul>
          <li>Word openen</li>
          <li>Tekst typen</li>
          <li>Tekst opmaken</li>
          <li>Opslaan en openen</li>
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
