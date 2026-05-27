'use client';

import React from 'react';
import { siteConfig } from '@/content/site.config';
import { useI18n } from '@/lib/i18n';

const localeLabels: Record<string, string> = {
	'en-US': 'EN',
	it: 'IT',
};

const LanguageToggle: React.FC = () => {
	const { locale, setLocale } = useI18n();

	if (siteConfig.locales.length <= 1) {
		return null;
	}

	return (
		<div className="flex items-center gap-2">
			{siteConfig.locales.map((localeCode) => (
				<button
					key={localeCode}
					onClick={() => setLocale(localeCode)}
					className={`btn-segment ${
						locale === localeCode ? 'btn-segment-active' : ''
					}`}
				>
					{localeLabels[localeCode] ?? localeCode.toUpperCase()}
				</button>
			))}
		</div>
	);
};

export default LanguageToggle;
