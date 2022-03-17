//import {Offers} from '../../types/types';
//className="places__option places__option--active"
//className="places__option"
import { useState } from 'react';

const sortMethods: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

type SortOptionsProps = {
  handleSortOptions:(sortOption: string)=>void
}

function SortOptions(props: SortOptionsProps ) {
  const {handleSortOptions} = props;
  const [isSortOptionsActive, setSortOptionsActive] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>(sortMethods[0]);


  return (
    <>
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setSortOptionsActive(true)}
      >
        {sortBy}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
          onClick={() => setSortOptionsActive(true)}
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className="places__options places__options--custom places__options--opened"
        style={isSortOptionsActive ? { display: 'block' } : { display: 'none' }}
      >
        {sortMethods.map((method) => (
          <li
            className='places__option'
            tabIndex={0}
            key={method}
            onClick={() => {
              setSortBy(method);
              setSortOptionsActive(false);
              handleSortOptions(method);
            }}
          >
            {method}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SortOptions;
