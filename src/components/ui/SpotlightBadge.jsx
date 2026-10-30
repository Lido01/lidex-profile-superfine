import React from 'react';

export default function SpotlightBadge({
  children,
  pulse = true,
  variant = 'cyan',
  className = '',
  icon: Icon
}) {
  const colorMap = {
    cyan: {
      bg: '',
      dot: 'shadow-[0_0_8px_#00f0ff]',
      pulse: ''
    },
    emerald: {
      bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
      dot: 'bg-emerald-400 shadow-[0_0_8px_#10b981]',
      pulse: 'bg-emerald-400'
    },
    indigo: {
      bg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
      dot: 'bg-indigo-400 shadow-[0_0_8px_#6366f1]',
      pulse: 'bg-indigo-400'
    },
    purple: {
      bg: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
      dot: 'bg-purple-400 shadow-[0_0_8px_#a855f7]',
      pulse: 'bg-purple-400'
    }
  };

  const currentTheme = colorMap[variant] || colorMap.cyan;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide border backdrop-blur-md transition-all duration-300 ${currentTheme.bg} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentTheme.pulse}`}
          />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${currentTheme.dot}`} />
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </div>
  );
}
