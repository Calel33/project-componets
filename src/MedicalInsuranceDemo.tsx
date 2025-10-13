/**
 * Medical Insurance Landing Page Demo
 * Demo component for the MedicalInsuranceLanding component
 * @module MedicalInsuranceDemo
 */

'use client';

import React from 'react';
import { MedicalInsuranceLanding } from '@/ui/components/medical';

/**
 * Medical Insurance Demo
 * Renders the medical insurance network landing page
 */
const MedicalInsuranceDemo: React.FC = () => {
  return <MedicalInsuranceLanding />;
};

MedicalInsuranceDemo.displayName = 'MedicalInsuranceDemo';

export default MedicalInsuranceDemo;
