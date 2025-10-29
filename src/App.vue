<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import DashboardView from './components/DashboardView.vue';
import LoginCard from './components/LoginCard.vue';

const features = [
  'ดูภาพรวมงานสำคัญและสถานะล่าสุดได้ทันที',
  'รักษาความปลอดภัยด้วยการยืนยันตัวตนหลายขั้นตอน',
  'ทำงานร่วมกับทีมได้แบบเรียลไทม์',
];

const isLoggedIn = ref(false);
const isDark = ref(false);

const themeStorageKey = 'myapp-theme-preference';

const applyTheme = (value: boolean) => {
  const root = document.documentElement;
  root.classList.toggle('dark', value);
  root.style.colorScheme = value ? 'dark' : 'light';
};

onMounted(() => {
  const storedTheme = window.localStorage.getItem(themeStorageKey);

  if (storedTheme === 'dark' || storedTheme === 'light') {
    isDark.value = storedTheme === 'dark';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  applyTheme(isDark.value);
});

watch(isDark, (value) => {
  applyTheme(value);
  window.localStorage.setItem(themeStorageKey, value ? 'dark' : 'light');
});

const handleLoginSuccess = () => {
  isLoggedIn.value = true;
};

const handleLogout = () => {
  isLoggedIn.value = false;
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
};
</script>

<template>
  <div :class="{ dark: isDark }">
    <DashboardView
      v-if="isLoggedIn"
      :is-dark="isDark"
      @logout="handleLogout"
      @toggle-theme="toggleTheme"
    />

    <div
      v-else
      class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900 transition-colors duration-300 dark:from-slate-900 dark:via-brand-dark dark:to-slate-900 dark:text-slate-100"
    >
      <button
        type="button"
        class="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-400 hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-brand-primary/20 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-slate-900/80"
        :aria-pressed="isDark"
        :aria-label="isDark ? 'สลับเป็นโหมดสว่าง' : 'สลับเป็นโหมดมืด'"
        @click="toggleTheme"
      >
        <span aria-hidden="true">{{ isDark ? '☀️' : '🌙' }}</span>
        <span>{{ isDark ? 'โหมดสว่าง' : 'โหมดมืด' }}</span>
      </button>

      <div class="absolute inset-0 -z-10">
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.3)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.25)_0%,_transparent_60%)]"
        ></div>
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.35)_0%,_transparent_65%)] dark:bg-[radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.4)_0%,_transparent_65%)]"
        ></div>
      </div>

      <main
        class="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20 transition-colors duration-300 md:flex-row md:items-center md:gap-16"
      >
        <section class="flex-1 space-y-6 text-center md:text-left">
          <div
            class="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-4 py-1 text-sm text-slate-600 backdrop-blur dark:bg-white/10 dark:text-slate-200"
          >
            <span class="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>อัปเดตล่าสุดพร้อมใช้งาน</span>
          </div>
          <h1 class="text-4xl font-semibold leading-tight text-slate-900 transition-colors duration-300 dark:text-white md:text-5xl">
            ยินดีต้อนรับกลับสู่ MyApp
          </h1>
          <p class="text-lg text-slate-600 transition-colors duration-300 md:max-w-lg dark:text-slate-300">
            จัดการโปรเจ็กต์ ติดตามงาน และทำงานร่วมกับทีมของคุณได้อย่างมั่นใจด้วยแพลตฟอร์มเดียว
          </p>
          <ul class="space-y-3 text-left text-base text-slate-700 transition-colors duration-300 md:max-w-md dark:text-slate-200">
            <li v-for="feature in features" :key="feature" class="flex items-start gap-3">
              <span
                class="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-900/5 text-sm text-slate-700 transition-colors duration-300 dark:bg-white/10 dark:text-white"
              >
                ✓
              </span>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </section>

        <LoginCard @success="handleLoginSuccess" />
      </main>
    </div>
  </div>
</template>
