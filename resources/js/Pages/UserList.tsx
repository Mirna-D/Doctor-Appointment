import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Col, Divider, Row, Table, TablePaginationConfig } from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import IPaginateUser from '../interfaces/IPaginateUser';

interface Props {
  users: IPaginateUser;
}

const UserList: React.FC<Props> = ({ users }) => {
  const tableCols: Array<any> = [
    {
      title: 'ID',
      key: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
  ];
  const tableDataChange = (pagination: TablePaginationConfig) => {
    const url = route('user.list') + `?page=${pagination.current}`;
    Inertia.visit(url, { method: Method.GET });
  };
  return (
    <Template>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">Users</Divider>
        <Row>
          <Col className="add-appointments" flex="auto">
            <InertiaLink href={route('user.add')}>
              <Button type="primary">Add User</Button>
            </InertiaLink>
          </Col>
        </Row>
        <Row>
          <Col flex="auto">
            <Table className='table-user'
              rowKey={'id'}
              dataSource={users.data}
              columns={tableCols}
              onChange={tableDataChange}
              pagination={{
                current: users.current_page,
                defaultCurrent: 1,
                pageSize: users.per_page,
                total: users.total,
                position: ['bottomLeft'],
                showSizeChanger: false,
              }}
            />
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default UserList;
