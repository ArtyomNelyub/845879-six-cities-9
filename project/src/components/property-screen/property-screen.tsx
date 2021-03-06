import FormPropertyScreen from './form-property-screen';
import SVGContainer from '../svg-container/svg-container';
import Header from '../header/header';
import ReviewListScreen from './review-list';
import Map from '../map/map';
import OfferCardList from '../offer-card/offer-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks/';
import PreviewImages from './preview-images';
import LoadingScreen from '../loading-screen/loading-screen';
import {
  fetchLoadComments,
  fetchSelectedOfferAction,
  fetchLoadNearbyOffers,
  checkAuthAction,
  changeFavoriteStatus
} from '../../store/api-actions';
import {
  loadNearbyOffers,
  loadSelectedOffer
} from '../../store/offers-process/offers-process';
import {
  AuthorizationStatus,
  FAVORITE_STATUS_ADDED,
  FAVORITE_STATUS_NOT_ADDED
} from '../../const';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ratingHandle } from '../../services/rating-handle';
import { apartmentTypeHandle } from '../../services/apartment-type-handle';
import { getIsOffersLoaded, getNearbyOffers, getOfferComments, getOffers, getSelectedOffer } from '../../store/offers-process/selectors';
import { getIsPropertyFormCleared } from '../../store/app-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function PropertyScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const offers = useAppSelector(getOffers);
  const isOffersLoaded =  useAppSelector(getIsOffersLoaded);
  const isPropertyFormCleared = useAppSelector(getIsPropertyFormCleared);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const offerComments =  useAppSelector(getOfferComments);
  const nearbyOffers =  useAppSelector(getNearbyOffers);
  const selectedOffer =  useAppSelector(getSelectedOffer);

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(loadNearbyOffers([]));
    dispatch(loadSelectedOffer(undefined));

    if (id) {
      if (isOffersLoaded) {
        dispatch(
          loadSelectedOffer(offers.find((offer) => offer.id.toString() === id)),
        );
      } else {
        dispatch(fetchSelectedOfferAction(id));
      }
      dispatch(fetchLoadComments(id));
      dispatch(fetchLoadNearbyOffers(id));
    }
  }, [dispatch, id, isOffersLoaded, offers]);

  if (selectedOffer === undefined || selectedOffer.id.toString() !== id) {
    return <LoadingScreen />;
  }

  const rating = ratingHandle(selectedOffer.rating);

  return (
    <>
      <SVGContainer />
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <PreviewImages offer={selectedOffer} />
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {selectedOffer.isPremium ? (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                ) : null}

                <div className="property__name-wrapper">
                  <h1 className="property__name">{selectedOffer.title}</h1>
                  <button
                    onClick={() => {
                      dispatch(
                        changeFavoriteStatus({
                          id: selectedOffer.id.toString(),
                          favoriteStatus: selectedOffer.isFavorite
                            ? FAVORITE_STATUS_NOT_ADDED
                            : FAVORITE_STATUS_ADDED,
                        }),
                      );
                    }}
                    className={
                      selectedOffer.isFavorite
                        ? 'property__bookmark-button property__bookmark-button--active button'
                        : 'property__bookmark-button button'
                    }
                    type="button"
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${rating}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {selectedOffer.rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {apartmentTypeHandle(selectedOffer.type)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {selectedOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {selectedOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">
                    &euro;{selectedOffer.price}
                  </b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {selectedOffer.goods.map((item) => (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={selectedOffer.host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {selectedOffer.host.name}
                    </span>
                    {selectedOffer.host.isPro ? (
                      <span className="property__user-status">Pro</span>
                    ) : null}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {selectedOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewListScreen reviews={offerComments} />
                  {authorizationStatus === AuthorizationStatus.Auth ? (
                    <FormPropertyScreen key={isPropertyFormCleared.toString()} />
                  ) : null}
                </section>
              </div>
            </div>
            <Map
              currentCity={selectedOffer.city}
              activeCard={selectedOffer.id}
              offers={[...nearbyOffers, selectedOffer]}
              key={`${id} - ${selectedOffer.city.name}`}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <OfferCardList offers={nearbyOffers} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default PropertyScreen;
