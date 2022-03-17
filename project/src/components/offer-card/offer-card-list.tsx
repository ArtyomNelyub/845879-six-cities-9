import OfferCard from './offer-card';
import { Offers } from '../../types/types';

type OfferListProps = {
  offers: Offers;
  handleCardHover: (id:number | undefined)=>void | undefined;
  isMainScreen?: boolean;
};

function OfferCardList(props: OfferListProps): JSX.Element {
  const { offers, isMainScreen, handleCardHover} = props;

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          handleCardHover={handleCardHover}
          isMainScreen={isMainScreen}
        />
      ))}
    </>
  );
}

export default OfferCardList;
