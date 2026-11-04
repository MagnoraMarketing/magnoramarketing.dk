import React from 'react';
import { Umbrella } from 'lucide-react';
import RichJobPage from '../../components/RichJobPage';

export default function InsuranceBrokerPage() {
  return (
    <RichJobPage
      ns="jobInsuranceBroker"
      path="/jobs/forsikring-hjemmefra"
      heroImage="/heroes/hero-home.jpg"
      Icon={Umbrella}
      featuredRelated={['/jobs/pensionsordning']}
    />
  );
}
