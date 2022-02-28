import MainScreenOfferCard from './main-screen_offer-card';
import { OffersType } from '../../types/offers-type';
import { useState } from 'react';

type PropsOfferList = {
  offers: OffersType[];
};

function OffersList(propsOffersList: PropsOfferList): JSX.Element {
  const { offers } = propsOffersList;
  const [, setActiveCardId] = useState<number | undefined>(undefined);
  const handleCardHover = (id: number | undefined) => {
    setActiveCardId(id);
  };

  return (
    <>
      {offers.map((item) => (
        <MainScreenOfferCard
          key={item.id}
          offer={item}
          gotId={handleCardHover}
        />
      ))}
    </>
  );
}

export default OffersList;
