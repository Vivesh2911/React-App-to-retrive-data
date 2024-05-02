import React from 'react';
import { Select, Tag } from 'antd';

const { Option } = Select;

const Filter = ({ onFilter, tags }) => {
  const handleChange = (value) => {
    onFilter(value);
  };

  return (
    <Select
      mode="multiple"
      placeholder="Select tags"
      onChange={handleChange}
      style={{ width: '100%' }}
    >
      {tags.map((tag) => (
        <Option key={tag}>{tag}</Option>
      ))}
    </Select>
  );
};

export default Filter;