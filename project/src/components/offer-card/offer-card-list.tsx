import OfferCard from './offer-card';
import { Offers } from '../../types/types';
import { useState } from 'react';

type OfferListProps = {
  offers: Offers;
  isMainScreen?: boolean;
};

function OfferCardList(props: OfferListProps): JSX.Element {
  const { offers, isMainScreen} = props;
  const [, setActiveCardId] = useState<number | undefined>(undefined);
  const handleCardHover = (id: number | undefined) => {
    setActiveCardId(id);
  };

  return (
    <>
      {offers.map((item) => (
        <OfferCard
          key={item.id}
          offer={item}
          handleCardHover={handleCardHover}
          isMainScreen={isMainScreen}
        />
      ))}
    </>
  );
}

export default OfferCardList;
