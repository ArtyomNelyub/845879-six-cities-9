import OfferCard from './offer-card';
import { Offers } from '../../types/types';

type OfferListProps = {
  offers: Offers;
  handleCardHover?: (id:number | undefined)=>void;
  isMainScreen?: boolean;
};

function OfferCardList(props: OfferListProps): JSX.Element {
  const { offers, isMainScreen, handleCardHover} = props;

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
