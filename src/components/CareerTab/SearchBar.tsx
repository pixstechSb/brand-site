import React from 'react';



export const SearchBar: React.FC = () => {
  // Sample search items
  const searchItems = [
    {
      label: 'Location',
    },
    {
      label: 'Experience',
      
    }
  ];

  // Inner SearchItem component
  const SearchItem = ({ label }: { label: string }) => (
    <div className="searchItem">
      <div className="searchItemLabel">{label}</div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="lucide">
<path id="Vector" d="M6 9L12 15L18 9" stroke="#BEB8B4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    </div>
  );

  // Inner SearchInput component
  const SearchInput = ({  placeholder }: { placeholder: string }) => (
    <div className="searchInputWrapper">
      <div className="search-iconWrapper">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="search 1">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M21.25 14.875C21.25 18.3958 18.3958 21.25 14.875 21.25C11.3542 21.25 8.5 18.3958 8.5 14.875C8.5 11.3542 11.3542 8.5 14.875 8.5C18.3958 8.5 21.25 11.3542 21.25 14.875ZM20.0873 21.5899C18.6479 22.7087 16.8392 23.375 14.875 23.375C10.1806 23.375 6.375 19.5694 6.375 14.875C6.375 10.1806 10.1806 6.375 14.875 6.375C19.5694 6.375 23.375 10.1806 23.375 14.875C23.375 16.8392 22.7087 18.6479 21.5899 20.0872L25.8764 24.3737L24.5 26L20.0873 21.5899Z" fill="#BEB8B4"/>
</g>
</svg>
      </div>
      <input
        type="text"
        className="searchInput"
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );

  return (
    <div className="searchBar">
      <div className="searchFilters">
        {searchItems.map((item, index) => (
          <SearchItem key={index} label={item.label} />
        ))}
      </div>
      <div className="searchControls">
        <SearchInput
          placeholder="Enter skills"
        />
        <button className="searchButton">
          <span className="searchButtonText">Find jobs</span>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;