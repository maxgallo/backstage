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
  usedInFeatures: string[];
}

const testData: TableData[] = [
  {
    id: 'blackFridayWeekend',
    description: 'Black Friday Weekend',
    usedInFeatures: ['id1'],
  },
  {
    id: 'germany',
    description: 'Users from Germany',
    usedInFeatures: ['id1', 'id2'],
  },
  {
    id: 'mobile',
    description: 'Mobile users',
    usedInFeatures: ['id1', 'id2', 'id3'],
  },
  {
    id: 'netherlands',
    description: 'User from the Netherlands',
    usedInFeatures: ['id1'],
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
];

export const SegmentsTable = () => (
  <Table
    options={{ paging: true, padding: 'dense' }}
    data={testData}
    columns={columns}
    title="Segments"
  />
);
