'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const UpcomingEvents: React.FC = () => {
	const { t } = useI18n();

	return (
		<motion.section
			id="upcoming"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16 scroll-mt-20"
		>
			<p className="text-xs uppercase tracking-wider text-cursor-text-muted font-medium mb-2">
				{t('home.upcomingEvents')}
			</p>
			<h2 className="text-2xl md:text-3xl font-bold text-cursor-text mb-6">
				{t('home.upcomingHeading')}
			</h2>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-50px' }}
				transition={{ duration: 0.4 }}
				className="relative overflow-hidden rounded-3xl border border-[#bfcbda88] bg-cursor-surface/70 shadow-[0_18px_36px_rgba(0,0,0,0.4)]"
			>
				<div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(ellipse_at_top,rgba(168,180,200,0.16),transparent_75%)]" />
				<iframe
					src="https://luma.com/embed/calendar/cal-CG5MHAHi8JJEmna/events"
					title="Upcoming events calendar"
					className="relative z-10 block w-full h-78 sm:h-88 md:h-95"
					frameBorder="0"
					allowFullScreen
					aria-hidden="false"
					tabIndex={0}
				/>
			</motion.div>
		</motion.section>
	);
};

export default UpcomingEvents;
