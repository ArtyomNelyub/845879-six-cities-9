import { memo } from 'react';
import { Offer } from '../../types/types';

type PreviewImagesProp = {
  offer: Offer;
};

function PreviewImages(props: PreviewImagesProp): JSX.Element {
  const { offer } = props;
  const { images: offerImages } = offer;
  const MAX_IMAGES_PREVIEW = 6;

  return (
    <div className="property__gallery">
      {offerImages.slice(0, MAX_IMAGES_PREVIEW).map((image) => (
        <div className="property__image-wrapper" key={image}>
          <img className="property__image" src={image} alt="Photo studio" />
        </div>
      ))}
    </div>
  );
}

export default memo(PreviewImages, (prev, next) => prev.offer.id === next.offer.id);
