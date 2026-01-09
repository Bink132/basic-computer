<template>
    <div class="min-h-screen bg-gray-100 py-10">
        <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 space-y-16">

            <NuxtLink to="/" class="text-sm text-blue-600 hover:underline">
                ← Terug naar home
            </NuxtLink>

            <header class="space-y-2">
                <h1 class="text-4xl font-extrabold">
                    Microsoft PowerPoint – Complete basisles
                </h1>
                <p class="text-gray-600">
                    Leer stap voor stap presentaties maken met PowerPoint.
                </p>
            </header>

            <!-- Inhoudsopgave -->
            <section class="border rounded-xl p-6 bg-gray-50">
                <h2 class="text-2xl font-bold mb-4">📑 Inhoudsopgave</h2>
                <ul class="list-decimal list-inside space-y-1 text-blue-700">
                    <li><a href="#les-1">Wat is PowerPoint?</a></li>
                    <li><a href="#les-2">Het scherm</a></li>
                    <li><a href="#les-3">Nieuwe dia</a></li>
                    <li><a href="#les-4">Tekst</a></li>
                    <li><a href="#les-5">Afbeeldingen</a></li>
                    <li><a href="#les-6">Ontwerp</a></li>
                    <li><a href="#les-7">Overgangen</a></li>
                    <li><a href="#les-8">Animaties</a></li>
                    <li><a href="#les-9">Presenteren</a></li>
                </ul>
            </section>

            <!-- LES 1 -->
            <section id="les-1" class="lesson">
                <h2>📊 Les 1: Wat is PowerPoint?</h2>
                <ul>
                    <li>PowerPoint is een presentatieprogramma</li>
                    <li>Je werkt met dia’s</li>
                </ul>
            </section>

            <!-- LES 2 -->
            <section id="les-2" class="lesson">
                <h2>🖥️ Les 2: Het scherm</h2>
                <ul>
                    <li>Links: dia-overzicht</li>
                    <li>Midden: actieve dia</li>
                    <li>Boven: lint</li>
                </ul>

                <img src="/img/powerpoint/overzicht.png" class="rounded-lg shadow mt-4" alt="PowerPoint scherm" />
            </section>

            <!-- LES 3 -->
            <section id="les-3" class="lesson">
                <h2>➕ Les 3: Nieuwe dia maken</h2>
                <ul>
                    <li>Klik op Nieuwe dia</li>
                    <li>Kies een indeling</li>
                </ul>

                <img src="/img/powerpoint/nieuwe-dia.png" class="rounded-lg shadow mt-4" alt="Nieuwe dia maken" />
            </section>

            <!-- LES 4 -->
            <section id="les-4" class="lesson">
                <h2>✍️ Les 4: Tekst toevoegen</h2>
                <ul>
                    <li>Klik in een tekstvak</li>
                    <li>Begin met typen</li>
                </ul>

                <img src="/img/powerpoint/tekstvak.png" class="rounded-lg shadow mt-4" alt="Tekstvak" />
            </section>

            <!-- LES 5 -->
            <section id="les-5" class="lesson">
                <h2>🖼️ Les 5: Afbeeldingen invoegen</h2>
                <ul>
                    <li>Invoegen → Afbeeldingen</li>
                </ul>

                <img src="/img/powerpoint/afbeelding-invoegen.png" class="rounded-lg shadow mt-4"
                    alt="Afbeelding invoegen" />
            </section>

            <!-- LES 6 -->
            <section id="les-6" class="lesson">
                <h2>🎨 Les 6: Ontwerp & thema</h2>
                <ul>
                    <li>Kies één thema</li>
                    <li>Gebruik rustige kleuren</li>
                </ul>

                <img src="/img/powerpoint/ontwerp-thema.png" class="rounded-lg shadow mt-4" alt="Ontwerp thema" />
            </section>

            <!-- LES 7 -->
            <section id="les-7" class="lesson">
                <h2>🔄 Les 7: Overgangen</h2>
                <ul>
                    <li>Ga naar Overgangen</li>
                    <li>Kies één overgang</li>
                </ul>

                <img src="/img/powerpoint/overgang.png" class="rounded-lg shadow mt-4" alt="Overgangen" />
            </section>



            <!-- LES 9 -->
            <section id="les-9" class="lesson">
                <h2>🎤 Les 8: Presenteren</h2>
                <ul>
                    <li>Diavoorstelling → Vanaf begin</li>
                </ul>

                <img src="/img/powerpoint/diavoorstelling.png" class="rounded-lg shadow mt-4" alt="Diavoorstelling" />
            </section>

            <!-- LES 10 -->
            <section id="les-9" class="lesson">
                <h2>💾 Les 10: Opslaan</h2>

                <p>Waarom opslaan?</p>
                <ul>
                    <li>Als je niet opslaat, ben je alles kwijt</li>
                    <li>PowerPoint slaat je presentatie niet automatisch op</li>
                </ul>

                <p>Hoe opslaan?</p>
                <ul>
                    <li>Klik op <strong>Bestand</strong></li>
                    <li>Klik op <strong>Opslaan als</strong></li>
                    <li>Kies de map waar je wilt opslaan (bijv. Documenten)</li>
                    <li>Geef een duidelijke naam, bijv. <em>mijn-presentatie</em></li>
                    <li>Klik op <strong>Opslaan</strong></li>
                </ul>

                <div class="exercise mt-4">
                    <p class="font-semibold">👉 Oefening:</p>
                    <p>Sla je presentatie op onder de naam <strong>mijn-presentatie</strong>.</p>
                </div>

                <h2 class="pt-6 font-bold">✅ Wat heb je geleerd?</h2>
                <ul>
                    <li>PowerPoint openen en nieuwe dia’s maken</li>
                    <li>Tekst en afbeeldingen toevoegen</li>
                    <li>Thema’s en ontwerpen kiezen</li>
                    <li>Overgangen en animaties toepassen</li>
                    <li>Presentatie bekijken en presenteren</li>
                    <li>Je werk veilig opslaan</li>
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
</style>
