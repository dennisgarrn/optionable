import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatCurrency, formatPercent } from '../../utils/formatters';

const KpiCard = ({ label, value, subtext, valueClassName = '' }) => (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between min-h-[88px]">
        <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wide">{label}</span>
        <div className={`text-2xl font-bold font-mono mt-1 ${valueClassName}`}>
            {value}
        </div>
        <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">{subtext}</div>
    </div>
);

export const Dashboard = ({ stats }) => {
    const { t } = useTranslation();

    const totalPnLWithCapitalGains = stats.totalPnLWithCapitalGains ?? stats.totalPnL;
    const realizedCapitalGL = stats.realizedCapitalGL ?? 0;
    const closedPositions = stats.closedPositions ?? 0;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <KpiCard
                label={t('dashboard.premiumCollected')}
                value={formatCurrency(stats.totalPremiumCollected)}
                valueClassName="text-emerald-600 dark:text-emerald-400"
                subtext={t('dashboard.closedTradesSubtext', { count: stats.closedTradesCount })}
            />

            <KpiCard
                label={t('dashboard.avgRoi')}
                value={formatPercent(stats.avgRoi)}
                valueClassName={stats.avgRoi >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}
                subtext={t('dashboard.closedTradesSubtext', { count: stats.closedTradesCount })}
            />

            <KpiCard
                label={t('dashboard.winRate')}
                value={formatPercent(stats.winRate)}
                valueClassName="text-indigo-600 dark:text-indigo-400"
                subtext={t('dashboard.closedChainsSubtext', { count: stats.resolvedChains })}
            />

            <KpiCard
                label={t('dashboard.stockGains')}
                value={formatCurrency(realizedCapitalGL)}
                valueClassName={realizedCapitalGL >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}
                subtext={t('dashboard.closedPositionsSubtext', { count: closedPositions })}
            />

            <KpiCard
                label={t('dashboard.totalPnl')}
                value={formatCurrency(totalPnLWithCapitalGains)}
                valueClassName={totalPnLWithCapitalGains >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}
                subtext={t('dashboard.totalPnlSubtext')}
            />

            <KpiCard
                label={t('dashboard.deployedCapital')}
                value={formatCurrency(stats.capitalAtRisk)}
                valueClassName="text-slate-700 dark:text-slate-200"
                subtext={t('dashboard.openTradesSubtext', { count: stats.openTradesCount })}
            />
        </div>
    );
};
