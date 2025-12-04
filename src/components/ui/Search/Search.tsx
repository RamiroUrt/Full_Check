import AngleBox from '../AngleBox';
import './Search.css';
import { FaSearch } from 'react-icons/fa';
import { SearchTypes } from '@/types/Search.Types';

const Search = ({ ColorAngle, title, placeholder }: SearchTypes) => {
  return (
    <section className="search-box-container">
      <h1 className='title search-title'>{title}</h1>

      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input type="text" placeholder={placeholder} />
      </div>

      <div className="box-contain-search">
        <AngleBox 
          color={ColorAngle}
          image={undefined}
        />
      </div>
    </section>
  );
};

export default Search;
