import { MAX_STAR_RATING } from '../const';

export const ratingHandle = function( offerRating: number) : string {
  return (Math.round(((offerRating * 100) / MAX_STAR_RATING) * 100) / 100).toString();
};
