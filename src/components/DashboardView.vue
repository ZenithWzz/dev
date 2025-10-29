<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <p class="text-xs uppercase tracking-widest text-brand-primary">MyApp</p>
          <h1 class="text-2xl font-semibold">แดชบอร์ดภาพรวม</h1>
        </div>
        <button
          type="button"
          class="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/5"
          @click="emit('logout')"
        >
          ออกจากระบบ
        </button>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-6 py-12 space-y-12">
      <section class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="card in summaryCards"
          :key="card.title"
          class="rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/20"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-400">{{ card.title }}</p>
              <p class="mt-2 text-3xl font-semibold text-white">{{ card.value }}</p>
            </div>
            <span
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary"
            >
              {{ card.icon }}
            </span>
          </div>
          <p class="mt-4 text-xs text-emerald-300">{{ card.delta }}</p>
        </article>
      </section>

      <section class="grid gap-6 lg:grid-cols-3">
        <article class="lg:col-span-2 space-y-6 rounded-2xl border border-white/5 bg-slate-900/60 p-6">
          <header class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-semibold text-white">งานที่ต้องจัดการ</h2>
              <p class="text-sm text-slate-400">อัปเดตล่าสุดเมื่อ 5 นาทีที่ผ่านมา</p>
            </div>
            <button
              type="button"
              class="rounded-lg bg-brand-primary px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primary/90"
            >
              เพิ่มงานใหม่
            </button>
          </header>
          <ul class="space-y-4">
            <li
              v-for="task in tasks"
              :key="task.title"
              class="flex items-start justify-between rounded-xl border border-white/5 bg-slate-950/60 p-4"
            >
              <div>
                <p class="font-medium text-white">{{ task.title }}</p>
                <p class="text-sm text-slate-400">{{ task.description }}</p>
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

        <aside class="space-y-6 rounded-2xl border border-white/5 bg-slate-900/60 p-6">
          <header>
            <h2 class="text-lg font-semibold text-white">กำหนดการวันนี้</h2>
            <p class="text-sm text-slate-400">ติดตามการประชุมและกิจกรรมสำคัญ</p>
          </header>
          <ul class="space-y-4">
            <li
              v-for="event in schedule"
              :key="event.time"
              class="flex items-start gap-3 rounded-xl border border-white/5 bg-slate-950/60 p-4"
            >
              <div class="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/5 text-sm font-semibold text-white">
                {{ event.time }}
              </div>
              <div>
                <p class="font-medium text-white">{{ event.title }}</p>
                <p class="text-sm text-slate-400">{{ event.location }}</p>
              </div>
            </li>
          </ul>
        </aside>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'logout'): void }>();

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
      return 'bg-emerald-500/10 text-emerald-300';
    case 'กำลังทำ':
      return 'bg-sky-500/10 text-sky-300';
    default:
      return 'bg-amber-500/10 text-amber-300';
  }
};
</script>
