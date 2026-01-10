<template>
  <section class="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
    <h1 class="text-4xl font-bold mb-12 text-center">
      Werken met de computer.
    </h1>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="card in cards"
        :key="card.title"
        :to="card.to"
        class="group relative block rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <!-- Card achtergrond kleur -->
        <div
          class="absolute inset-0"
          :class="card.bgColor"
        ></div>

        <!-- Card content -->
        <div class="relative p-6 flex flex-col items-center text-center">
          <img
            :src="card.image"
            :alt="card.title"
            class="w-24 h-24 mb-4 rounded-lg object-cover border-2 border-white shadow"
          />
          <h2 class="text-xl font-semibold mb-2 text-white">
            {{ card.title }}
          </h2>
          <p class="text-white text-sm opacity-90">
            {{ card.description }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    title: 'Word',
    description: 'Leren werken met Microsoft Word',
    to: '/word',
    image: '/img/word/word-removebg.png', // plaats je afbeelding in /public/images/
    bgColor: 'bg-blue-500',    // Tailwind kleur
  },
  {
    title: 'PowerPoint',
    description: 'Presentaties maken',
    to: '/powerpoint',
    image: '/img/powerpoint/powerpoint-removebg-preview (1).png',
    bgColor: 'bg-red-500',
  },
  {
    title: 'Excel',
    description: 'Rekenen en werken met tabellen',
    to: '/excel',
    image: '/img/excel/excel-logo.png',
    bgColor: 'bg-green-500',
  },
]
</script>
