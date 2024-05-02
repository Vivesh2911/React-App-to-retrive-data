import React from 'react';
import { Input } from 'antd';

const Search = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Input
      placeholder="Search posts"
      onChange={handleChange}
      style={{ width: '100%' }}
    />
  );
};

export default Search;