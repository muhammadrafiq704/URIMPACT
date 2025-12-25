'use client';
import { useTranslations } from 'next-intl';

import Hero from './components/Hero';
import Banner from './components/Banner';

export default function LandingPage() {
  const t = useTranslations("HomePage")
  const platform = "i18next"

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-linear-to-r from-purple-500 to-pink-500">
      <h1 className='text-4xl font-bold text-white'>{t("title")}</h1>
      <p className="text-lg font-bold text-white">
        {t("sub_title", { platform })}
      </p>
      <Banner />
      <Hero />
    </div>
  );
}
