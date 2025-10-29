<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
    <header class="border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-slate-900/80">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <p class="text-xs uppercase tracking-widest text-brand-primary">MyApp</p>
          <h1 class="text-2xl font-semibold">แดชบอร์ดภาพรวม</h1>
        </div>
        <div class="flex items-center gap-3">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-xl border border-slate-300/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-brand-primary/20 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-slate-900"
            :aria-pressed="isDark"
            :aria-label="isDark ? 'สลับเป็นโหมดสว่าง' : 'สลับเป็นโหมดมืด'"
            @click="emit('toggle-theme')"
          >
            <span aria-hidden="true">{{ isDark ? '☀️' : '🌙' }}</span>
            <span>{{ isDark ? 'โหมดสว่าง' : 'โหมดมืด' }}</span>
          </button>
          <button
            type="button"
            class="rounded-xl border border-slate-300/70 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white/80 focus:outline-none focus:ring-4 focus:ring-brand-primary/20 dark:border-white/10 dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/5"
            @click="emit('logout')"
          >
            ออกจากระบบ
          </button>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-6xl space-y-12 px-6 py-12">
      <section class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="card in summaryCards"
          :key="card.title"
          class="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-500/10 transition-colors dark:border-white/5 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:shadow-black/20"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ card.title }}</p>
              <p class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">{{ card.value }}</p>
            </div>
            <span
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary"
            >
              {{ card.icon }}
            </span>
          </div>
          <p class="mt-4 text-xs text-emerald-600 dark:text-emerald-300">{{ card.delta }}</p>
        </article>
      </section>

      <section class="grid gap-6 lg:grid-cols-3">
        <article
          class="lg:col-span-2 space-y-6 rounded-2xl border border-slate-200 bg-white/80 p-6 transition-colors dark:border-white/5 dark:bg-slate-900/60"
        >
          <header class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-semibold text-slate-900 dark:text-white">งานที่ต้องจัดการ</h2>
              <p class="text-sm text-slate-500 dark:text-slate-400">อัปเดตล่าสุดเมื่อ 5 นาทีที่ผ่านมา</p>
            </div>
            <button
              type="button"
              class="rounded-lg bg-brand-primary px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primary/90 focus:outline-none focus:ring-4 focus:ring-brand-primary/30"
            >
              เพิ่มงานใหม่
            </button>
          </header>
          <ul class="space-y-4">
            <li
              v-for="task in tasks"
              :key="task.title"
              class="flex items-start justify-between rounded-xl border border-slate-200 bg-white/70 p-4 transition-colors dark:border-white/5 dark:bg-slate-950/60"
            >
              <div>
                <p class="font-medium text-slate-900 dark:text-white">{{ task.title }}</p>
                <p class="text-sm text-slate-500 dark:text-slate-400">{{ task.description }}</p>
              </div>
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="statusClass(task.status)"
              >
                {{ task.status }}
              </span>
            </li>
          </ul>
        </article>

        <aside class="space-y-6 rounded-2xl border border-slate-200 bg-white/80 p-6 transition-colors dark:border-white/5 dark:bg-slate-900/60">
          <header>
            <h2 class="text-lg font-semibold text-slate-900 dark:text-white">กำหนดการวันนี้</h2>
            <p class="text-sm text-slate-500 dark:text-slate-400">ติดตามการประชุมและกิจกรรมสำคัญ</p>
          </header>
          <ul class="space-y-4">
            <li
              v-for="event in schedule"
              :key="event.time"
              class="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/70 p-4 transition-colors dark:border-white/5 dark:bg-slate-950/60"
            >
              <div class="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-900 dark:bg-white/5 dark:text-white">
                {{ event.time }}
              </div>
              <div>
                <p class="font-medium text-slate-900 dark:text-white">{{ event.title }}</p>
                <p class="text-sm text-slate-500 dark:text-slate-400">{{ event.location }}</p>
              </div>
            </li>
          </ul>
        </aside>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ isDark: boolean }>();
const emit = defineEmits<{ (e: 'logout'): void; (e: 'toggle-theme'): void }>();

const isDark = computed(() => props.isDark);

const summaryCards = [
  { title: 'งานทั้งหมด', value: '24 งาน', icon: '🗂️', delta: '+4 งานใหม่ในสัปดาห์นี้' },
  { title: 'งานที่เสร็จแล้ว', value: '18 งาน', icon: '✅', delta: 'เพิ่มขึ้น 12% จากสัปดาห์ก่อน' },
  { title: 'ทีมที่กำลังออนไลน์', value: '8 คน', icon: '👥', delta: 'ออนไลน์อยู่ขณะนี้' },
];

const tasks = [
  { title: 'ออกแบบแดชบอร์ดการเงิน', description: 'ตรวจสอบสัดส่วนกราฟและการตอบสนองบนมือถือ', status: 'กำลังทำ' },
  { title: 'ตั้งค่า CI/CD', description: 'อัปเดต workflow ให้รองรับการ deploy อัตโนมัติ', status: 'รอดำเนินการ' },
  { title: 'รีวิวข้อเสนอ UX', description: 'รวบรวม feedback จากทีมและลูกค้า', status: 'เสร็จสิ้น' },
];

const schedule = [
  { time: '09:00', title: 'Daily Standup', location: 'Google Meet' },
  { time: '11:30', title: 'Sync กับทีมการตลาด', location: 'ห้องประชุม Horizon' },
  { time: '14:00', title: 'สาธิตผลิตภัณฑ์ให้ลูกค้า', location: 'Zoom' },
];

const statusClass = (status: string) => {
  switch (status) {
    case 'เสร็จสิ้น':
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300';
    case 'กำลังทำ':
      return 'bg-sky-500/10 text-sky-600 dark:text-sky-300';
    default:
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-300';
  }
};
</script>
