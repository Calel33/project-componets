import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import type { ConfirmationActionsProps } from './types';

/**
 * ConfirmationActions - Action buttons for payment confirmation
 * 
 * Provides primary (download receipt) and secondary (dismiss) action buttons.
 * Handles loading states and supports async download operations.
 * 
 * @example
 * ```tsx
 * <ConfirmationActions
 *   onDownload={handleDownload}
 *   onDismiss={handleDismiss}
 *   downloadLabel="Download Receipt"
 *   dismissLabel="Dismiss"
 * />
 * ```
 */
export const ConfirmationActions: React.FC<ConfirmationActionsProps> = ({
  onDownload,
  onDismiss,
  isDownloading = false,
  downloadLabel = 'Download Receipt',
  dismissLabel = 'Dismiss',
  className = '',
}) => {
  const [internalLoading, setInternalLoading] = useState(false);

  const handleDownload = async () => {
    if (!onDownload || isDownloading || internalLoading) return;

    setInternalLoading(true);
    try {
      await Promise.resolve(onDownload());
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setInternalLoading(false);
    }
  };

  const loading = isDownloading || internalLoading;

  return (
    <div className={`w-full space-y-2 ${className}`}>
      {onDownload && (
        <button
          onClick={handleDownload}
          disabled={loading}
          className={`
            w-full py-2 px-4
            bg-green-600 hover:bg-green-700
            disabled:bg-green-600/50 disabled:cursor-not-allowed
            text-white font-medium rounded-md
            transition-colors duration-200
            flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900
          `}
          aria-label={loading ? 'Downloading receipt' : downloadLabel}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Downloading...</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>{downloadLabel}</span>
            </>
          )}
        </button>
      )}

      <button
        onClick={onDismiss}
        disabled={loading}
        className={`
          w-full py-2 px-4
          bg-neutral-800 hover:bg-neutral-700
          disabled:bg-neutral-800/50 disabled:cursor-not-allowed
          text-gray-200 font-medium rounded-md
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-slate-900
        `}
        aria-label={dismissLabel}
      >
        {dismissLabel}
      </button>
    </div>
  );
};
