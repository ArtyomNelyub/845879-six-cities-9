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
  const [currentMethod, setCurrentMethod] = useState<string>(sortMethods[0]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setSortOptionsActive(true)}
      >
        {currentMethod}
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
              setSortOptionsActive(false);
              handleSortOptions(method);
              setCurrentMethod(method);
            }}
          >
            {method}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortOptions;
