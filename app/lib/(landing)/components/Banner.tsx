'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('BannerSection');

  return (
    <section className="hero">
      <h1>{t('title', {urimpact:"URIMPACT APP"})}</h1>
      <p>{t('description', {urimpact:"URIMPACT APP"})}</p>
    </section>
  );
}
