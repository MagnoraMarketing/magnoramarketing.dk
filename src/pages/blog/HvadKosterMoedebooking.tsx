import React from 'react';
import PriceGuideArticle from '../../components/PriceGuideArticle';

export default function HvadKosterMoedebooking() {
  return (
    <PriceGuideArticle
      k="blogPosts.HvadKosterMoedebooking"
      canonical="/blog/hvad-koster-moedebooking"
      calculator={['meetings', 'telemarketing']}
      secondaryLink="/modebooking-priser"
    />
  );
}
