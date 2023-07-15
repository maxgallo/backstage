/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { Chip } from '@material-ui/core';
import { Table, TableColumn } from '@backstage/core-components';

interface TableData {
  id: string;
  description: string;
  tags: string[];
  enabled: boolean;
}

const testData: TableData[] = [
  {
    id: 'bar',
    description: 'Example with object variable type',
    tags: ['all'],
    enabled: true,
  },
  {
    id: 'baz',
    description: 'Classic on/off switch',
    tags: ['all'],
    enabled: true,
  },
  {
    id: 'discount',
    description: 'Enable discount in checkout flow',
    tags: ['all', 'checkout'],
    enabled: true,
  },
  {
    id: 'foo',
    description: 'Awesome Foo features',
    tags: ['all', 'sign-in'],
    enabled: true,
  },
];

const columns: TableColumn[] = [
  {
    title: 'ID',
    field: 'id',
    highlight: true,
    type: 'numeric',
    width: '80px',
  },
  {
    title: 'Description',
    highlight: true,
    field: 'description',
  },
  {
    title: 'Enabled',
    field: 'enabled',
  },
  {
    title: 'Tags',
    render: (row: Partial<TableData>) =>
      row?.tags?.map(tag => <Chip label={tag} />),
    width: '100px',
  },
];

export const FeaturesTable = () => (
  <Table
    options={{ paging: true, padding: 'dense' }}
    data={testData}
    columns={columns}
    title="Features"
  />
);
