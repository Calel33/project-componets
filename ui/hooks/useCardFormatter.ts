/**
 * useCardFormatter Hook
 * Utilities for formatting card inputs used across payment experiences
 */

import { useCallback } from 'react';

type CVCLength = 3 | 4;

const getGroupsOfFour = (digits: string): string => {
  const groups = digits.match(/.{1,4}/g);
  return groups ? groups.join(' ') : digits;
};

export const useCardFormatter = () => {
  const getRawDigits = useCallback((value: string) => value.replace(/\D/g, ''), []);

  const formatCardNumber = useCallback(
    (value: string): string => {
      const digits = getRawDigits(value).slice(0, 19);
      return getGroupsOfFour(digits);
    },
    [getRawDigits]
  );

  const formatExpiryDate = useCallback(
    (value: string): string => {
      const digits = getRawDigits(value).slice(0, 4);

      if (digits.length === 0) {
        return '';
      }

      if (digits.length <= 2) {
        return digits;
      }

      return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
    },
    [getRawDigits]
  );

  const formatCVC = useCallback(
    (value: string, length: CVCLength = 3): string => {
      return getRawDigits(value).slice(0, length);
    },
    [getRawDigits]
  );

  const handleCardNumberChange = useCallback((value: string) => formatCardNumber(value), [formatCardNumber]);

  const handleExpiryDateChange = useCallback((value: string) => formatExpiryDate(value), [formatExpiryDate]);

  const handleSecurityCodeChange = useCallback(
    (value: string, length: CVCLength = 3) => formatCVC(value, length),
    [formatCVC]
  );

  return {
    formatCardNumber,
    formatExpiryDate,
    formatCVC,
    handleCardNumberChange,
    handleExpiryDateChange,
    handleSecurityCodeChange,
    getRawDigits,
  };
};
