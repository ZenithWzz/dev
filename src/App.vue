<script setup lang="ts">
import LoginCard from './components/LoginCard.vue';

const features = [
  'ดูภาพรวมงานสำคัญและสถานะล่าสุดได้ทันที',
  'รักษาความปลอดภัยด้วยการยืนยันตัวตนหลายขั้นตอน',
  'ทำงานร่วมกับทีมได้แบบเรียลไทม์',
];
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <div
      class="absolute inset-0 -z-20 bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900"
      aria-hidden="true"
    ></div>
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.25)_0%,transparent_60%)]"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.35)_0%,transparent_65%)]"
      ></div>
    </div>

    <main
      class="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 md:flex-row md:items-center md:gap-16"
    >
      <section class="flex-1 space-y-6 text-center md:text-left">
        <div
          class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm text-slate-200"
        >
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>อัปเดตล่าสุดพร้อมใช้งาน</span>
        </div>
        <h1 class="text-4xl font-semibold leading-tight text-white md:text-5xl">
          ยินดีต้อนรับกลับสู่ MyApp
        </h1>
        <p class="text-lg text-slate-300 md:max-w-lg">
          จัดการโปรเจ็กต์ ติดตามงาน และทำงานร่วมกับทีมของคุณได้อย่างมั่นใจด้วยแพลตฟอร์มเดียว
        </p>
        <ul class="space-y-3 text-left text-base text-slate-200 md:max-w-md">
          <li v-for="feature in features" :key="feature" class="flex items-start gap-3">
            <span
              class="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/10 text-sm"
            >
              ✓
            </span>
            <span>{{ feature }}</span>
          </li>
        </ul>
      </section>

      <LoginCard />
    </main>
  </div>
</template>
