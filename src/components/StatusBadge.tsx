import { STATUS_META } from '../data/statuses';
import type { SourceStatus } from '../types/wiki';

interface StatusBadgeProps {
  status: SourceStatus;
  compact?: boolean;
}

export function StatusBadge({ status, compact = false }: StatusBadgeProps) {
  const meta = STATUS_META[status];
  return (
    <span
      className={`status-badge status-badge--${meta.tone}${compact ? ' status-badge--compact' : ''}`}
      title={meta.description}
    >
      <span className="status-badge__dot" aria-hidden="true" />
      <span className="sr-only">资料状态：</span>
      {meta.label}
    </span>
  );
}
