import OfferCard from './offer-card';
import { OffersType } from '../../types/offers-type';
import { useState } from 'react';

type PropsOfferList = {
  offers: OffersType;
  isMainScreen: boolean;
};

function OfferCardList(propsOffersList: PropsOfferList): JSX.Element {
  const { offers, isMainScreen} = propsOffersList;
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
          isMainScreen = {isMainScreen}
        />
      ))}
    </>
  );
}

export default OfferCardList;
