import React from 'react';
import { PiggyBank } from 'lucide-react';
import RichJobPage from '../../components/RichJobPage';

export default function PensionPage() {
  return (
    <RichJobPage
      ns="jobPension"
      path="/jobs/pensionsordning"
      heroImage="/heroes/hero-moedebooking.jpg"
      Icon={PiggyBank}
      featuredRelated={['/jobs/forsikring-hjemmefra']}
    />
  );
}
