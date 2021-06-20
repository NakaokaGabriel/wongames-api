import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '@buffetjs/custom';
import { Table } from '@buffetjs/core';
import styled from 'styled-components';
import { StrapiProvider } from 'strapi-helper-plugin';

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/React-avancado/repos')
      .then((response) => setRows(response.data))
      .catch(error => StrapiProvider.notification.error(`Ops.. github api limit exceeded, ${error}`));
  }, []);

  const headers = [
    {
      name: 'Name',
      value: 'name'
    },
    {
      name: 'Description',
      value: 'description'
    },
    {
      name: 'Url',
      value: 'html_url'
    },
  ]

  return (
    <Wrapper>
      <Header 
        title={{ label: 'Won games repositories' }} 
        content="A list of our repositories in won games." 
      />

      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
