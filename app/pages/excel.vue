<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 space-y-16">

      <NuxtLink to="/" class="text-sm text-green-600 hover:underline">
        ← Terug naar home
      </NuxtLink>

      <!-- Titel -->
      <header class="space-y-2">
        <h1 class="text-4xl font-extrabold">
          Microsoft Excel – Complete basisles
        </h1>
        <p class="text-gray-600">
          Leer stap voor stap werken met Excel: tabellen, berekeningen en grafieken.
        </p>
      </header>

      <!-- Inhoudsopgave -->
      <section class="border rounded-xl p-6 bg-gray-50">
        <h2 class="text-2xl font-bold mb-4">📑 Inhoudsopgave</h2>
        <ul class="list-decimal list-inside space-y-1 text-green-700">
          <li><a href="#les-1">Wat is Excel?</a></li>
          <li><a href="#les-2">Het scherm</a></li>
          <li><a href="#les-3">Cellen, rijen en kolommen</a></li>
          <li><a href="#les-4">Gegevens invoeren</a></li>
          <li><a href="#les-5">Berekeningen</a></li>
          <li><a href="#les-6">Autosom</a></li>
          <li><a href="#les-7">Gemiddelde, MIN, MAX</a></li>
          <li><a href="#les-8">Opmaak</a></li>
          <li><a href="#les-9">Grafieken</a></li>
          <li><a href="#les-10">Veelgemaakte fouten</a></li>
          <li><a href="#les-11">Eindopdracht</a></li>
          <li><a href="#les-12">Opslaan & Samenvatting</a></li>
        </ul>
      </section>

      <!-- LES 1 -->
      <section id="les-1" class="lesson">
        <h2>📊 Les 1: Wat is Excel?</h2>
        <p>
          Excel is een rekenprogramma. Je gebruikt het om gegevens te ordenen,
          berekeningen te maken en resultaten overzichtelijk te tonen.
        </p>
        <ul>
          <li>Excel werkt met werkbladen</li>
          <li>Elk werkblad bestaat uit cellen</li>
          <li>Veel gebruikt voor administratie en lijsten</li>
        </ul>
      </section>

      <!-- LES 2 -->
      <section id="les-2" class="lesson">
        <h2>🖥️ Les 2: Het scherm</h2>
        <ul>
          <li>Boven: lint met knoppen</li>
          <li>Midden: werkblad</li>
          <li>Onder: tabbladen</li>
        </ul>

        <img src="/img/excel/overzicht.webp" class="img" alt="Excel overzicht" />
      </section>

      <!-- LES 3 -->
      <section id="les-3" class="lesson">
        <h2>📐 Les 3: Cellen, rijen en kolommen</h2>
        <ul>
          <li>Kolommen: A, B, C…</li>
          <li>Rijen: 1, 2, 3…</li>
          <li>Cel = bijv. B2</li>
        </ul>

        <img src="/img/excel/cellen.jpg" class="img" alt="Cellen" />
      </section>

      <!-- LES 4 -->
      <section id="les-4" class="lesson">
        <h2>✍️ Les 4: Gegevens invoeren</h2>
        <ul>
          <li>Klik op een cel</li>
          <li>Typ tekst of getal</li>
          <li>Druk op Enter</li>
        </ul>

        <div class="exercise">
          Zet in A1: <strong>Product</strong><br />
          Zet in B1: <strong>Prijs</strong>
        </div>
      </section>

      <!-- LES 5 -->
      <section id="les-5" class="lesson">
        <h2>➗ Les 5: Berekeningen</h2>
        <ul>
          <li>=A1+A2 → optellen</li>
          <li>=A1-A2 → aftrekken</li>
          <li>=A1*A2 → vermenigvuldigen</li>
          <li>=A1/A2 → delen</li>
        </ul>
      </section>

      <!-- LES 6 -->
      <section id="les-6" class="lesson">
        <h2>➕ Les 6: Autosom</h2>
        <ul>
          <li>Selecteer de cel onder de cijfers</li>
          <li>Klik op Σ (Autosom)</li>
          <li>Druk op Enter</li>
        </ul>

        <img src="/img/excel/autosom.png" class="img" alt="Autosom" />
      </section>

      <!-- LES 7 -->
      <section id="les-7" class="lesson">
        <h2>🧮 Les 7: Gemiddelde, MIN en MAX</h2>
        <ul>
          <li>=GEMIDDELDE(A1:A5)</li>
          <li>=MIN(A1:A5)</li>
          <li>=MAX(A1:A5)</li>
        </ul>

        <img src="/img/excel/functies.png" class="img" alt="Functies" />
      </section>

      <!-- LES 8 -->
      <section id="les-8" class="lesson">
        <h2>🎨 Les 8: Opmaak</h2>
        <ul>
          <li>Titels vet maken</li>
          <li>Achtergrondkleur</li>
          <li>Randen gebruiken</li>
        </ul>
      </section>

      <!-- LES 9 -->
      <section id="les-9" class="lesson">
        <h2>📊 Les 9: Grafieken</h2>
        <ul>
          <li>Selecteer gegevens</li>
          <li>Invoegen → Grafiek</li>
          <li>Kies kolom- of lijngrafiek</li>
        </ul>

        <img src="/img/excel/grafiek.webp" class="img" alt="Grafiek" />
      </section>

      <!-- LES 10 -->
      <section id="les-10" class="lesson">
        <h2>❗ Les 10: Veelgemaakte fouten</h2>
        <ul>
          <li>Vergeten = teken</li>
          <li>Tekst in plaats van getal</li>
          <li>#DELING/0!</li>
          <li>Verkeerde cel gebruikt</li>
        </ul>
      </section>

      <!-- LES 11 -->
      <section id="les-11" class="lesson">
        <h2>📄 Les 11: Eindopdracht</h2>
        <ul>
          <li>Tabel met producten</li>
          <li>Autosom gebruiken</li>
          <li>Gemiddelde berekenen</li>
          <li>Grafiek maken</li>
        </ul>

        <p><strong>Opslaan als:</strong> excel-eindopdracht</p>
      </section>

      <!-- LES 12 -->
      <section id="les-12" class="lesson">
        <h2>💾 Les 12: Opslaan & Wat heb je geleerd?</h2>
        <ul>
          <li>Bestand → Opslaan als</li>
          <li>Correcte naam gebruiken</li>
        </ul>

        <h3 class="font-bold pt-4">✅ Wat heb je geleerd?</h3>
        <ul>
          <li>Excel gebruiken</li>
          <li>Berekeningen maken</li>
          <li>Autosom & functies</li>
          <li>Grafieken maken</li>
          <li>Bestand opslaan</li>
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
  @apply bg-green-50 border-l-4 border-green-600 p-4 rounded;
}

.img {
  @apply rounded-lg shadow mt-4;
}
</style>
