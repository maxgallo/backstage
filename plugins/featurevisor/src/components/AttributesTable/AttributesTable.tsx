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
import { Table, TableColumn } from '@backstage/core-components';

interface TableData {
  id: string;
  description: string;
}

const testData: TableData[] = [
  {
    id: 'country',
    description: 'country code in lower case (two lettered)',
  },
  {
    id: 'date',
    description: 'current date passed as ISO 8601 string or Date object',
  },
  {
    id: 'device',
    description: 'device type',
  },
  {
    id: 'loggedIn',
    description: 'is the user logged in?',
  },
];

const columns: TableColumn[] = [
  {
    title: 'ID',
    field: 'id',
    highlight: true,
    type: 'numeric',
    width: '120px',
  },
  {
    title: 'Description',
    highlight: true,
    field: 'description',
  },
];

export const AttributesTable = () => (
  <Table
    options={{ paging: true, padding: 'dense' }}
    data={testData}
    columns={columns}
    title="Attributes"
  />
);
