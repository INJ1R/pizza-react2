import React from 'react';
import styles from './Search.module.scss';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/filterSlice';

const Search: React.FC = () => {
  const [value, setValue] = React.useState('');
  const dispath = useDispatch();
  const ref = React.useRef<HTMLInputElement>(null);
  function clear() {
    setValue('');
    dispath(setSearch(''));
    ref.current.focus();
  }

  const updateSearch = React.useCallback(
    debounce((str) => {
      console.log(str);
      dispath(setSearch(str));
    }, 1000),
    [],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearch(e.target.value);
  };
  return (
    <div className={styles.search}>
      <input
        ref={ref}
        value={value}
        onChange={onChangeInput}
        className={styles.root}
        placeholder="Поиск....."
      />
      {value && (
        <img
          onClick={clear}
          width={17}
          height={17}
          className={styles.clear}
          src="/img/krest.png"
          alt="clear"
        />
      )}
    </div>
  );
};
export default Search;
