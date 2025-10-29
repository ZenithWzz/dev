<script setup lang="ts">
import { ref } from 'vue';

type SocialProvider = {
  label: string;
  icon: string;
  href: string;
};

const socialProviders: SocialProvider[] = [
  {
    label: 'เข้าสู่ระบบด้วย Google',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    href: '#google',
  },
  {
    label: 'เข้าสู่ระบบด้วย Facebook',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
    href: '#facebook',
  },
];

const isSubmitting = ref(false);

const handleSubmit = () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;

  window.setTimeout(() => {
    isSubmitting.value = false;
    window.alert('เข้าสู่ระบบสำเร็จ!');
  }, 800);
};
</script>

<template>
  <section
    class="mt-12 w-full max-w-md rounded-3xl bg-white/95 p-8 text-slate-900 shadow-glow backdrop-blur transition md:mt-0"
    aria-labelledby="login-title"
  >
    <div class="space-y-2 text-center md:text-left">
      <h2 id="login-title" class="text-2xl font-semibold text-slate-900">
        เข้าสู่ระบบบัญชีของคุณ
      </h2>
      <p class="text-sm text-slate-500">
        ไม่มีบัญชี?
        <a href="#signup" class="font-medium text-brand-primary hover:text-brand-primary/80">
          สร้างบัญชีใหม่
        </a>
      </p>
    </div>

    <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
      <div class="space-y-2">
        <label for="email" class="text-sm font-medium text-slate-600">อีเมล</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/20"
        />
      </div>

      <div class="space-y-2">
        <div class="flex items-center justify-between text-sm text-slate-600">
          <label for="password" class="font-medium">รหัสผ่าน</label>
          <a href="#forgot-password" class="font-medium text-brand-primary hover:text-brand-primary/80">
            ลืมรหัสผ่าน?
          </a>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          required
          class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/20"
        />
      </div>

      <div class="flex items-center justify-between text-sm text-slate-600">
        <label class="inline-flex items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            class="h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary"
          />
          <span>จดจำฉันไว้</span>
        </label>
        <button
          type="submit"
          class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/40 transition hover:bg-brand-primary/90 focus:outline-none focus:ring-4 focus:ring-brand-primary/30 disabled:cursor-not-allowed disabled:bg-brand-primary/60"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'กำลังเข้าสู่ระบบ…' : 'เข้าสู่ระบบ' }}
        </button>
      </div>
    </form>

    <div class="my-8 flex items-center gap-4 text-sm text-slate-400">
      <div class="h-px flex-1 bg-slate-200"></div>
      <span>หรือ</span>
      <div class="h-px flex-1 bg-slate-200"></div>
    </div>

    <div class="grid gap-3">
      <a
        v-for="provider in socialProviders"
        :key="provider.href"
        :href="provider.href"
        class="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
      >
        <img :src="provider.icon" alt="" class="h-5 w-5" aria-hidden="true" />
        <span>{{ provider.label }}</span>
      </a>
    </div>
  </section>
</template>
