import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined, FilterFilled } from '@ant-design/icons';
import axios from 'axios';
import Filter from './Filter';
import Search from './Search';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/posts?skip=${(page - 1) * limit}&limit=${limit}`);
        setData(response.data.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page, limit]);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleFilter = (tags) => {
    setSelectedTags(tags);
  };

  const filteredData = data.filter((item) => {
    if (searchText && !item.body.toLowerCase().includes(searchText.toLowerCase())) {
      return false;
    }

    if (selectedTags.length && !selectedTags.some((tag) => item.tags.includes(tag))) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Search onSearch={handleSearch} />
        <Filter onFilter={handleFilter} tags={['tag1', 'tag2', 'tag3']} />
      </Space>
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{ page, onChange: (page) => setPage(page), pageSize: limit, onChange: (limit) => setLimit(limit) }}
      />
    </div>
  );
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Body',
    dataIndex: 'body',
    key: 'body',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags) => (
      <div>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    ),
  },
];

export default TableComponent;