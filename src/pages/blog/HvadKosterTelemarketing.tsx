import React from 'react';
import PriceGuideArticle from '../../components/PriceGuideArticle';

export default function HvadKosterTelemarketing() {
  return (
    <PriceGuideArticle
      k="blogPosts.HvadKosterTelemarketing"
      canonical="/blog/hvad-koster-telemarketing"
      calculator={['telemarketing', 'meetings']}
      secondaryLink="/priser"
    />
  );
}
