const Search = ({ showSearch }) => {
  console.log(showSearch);

  return (
    <div
      className={
        showSearch === true
          ? 'search__container-show'
          : 'search__container-hide'
      }
    >
      <div className='clear-margin'>
        <input type='search' className='search' />
      </div>
    </div>
  );
};
export default Search;
