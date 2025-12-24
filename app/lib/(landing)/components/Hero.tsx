'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('HeroSection');

  return (
    <section className="hero">
      <h1>{t('title')}</h1>
      <p>{t('description', {platform:"I18NEXT"})}</p>
    </section>
  );
}
