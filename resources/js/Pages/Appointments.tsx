import { Inertia, Method } from '@inertiajs/inertia';
import { Col, Divider, TablePaginationConfig } from 'antd';
import React, { useEffect } from 'react';
import route from 'ziggy-js';

import AppointmentTable from '../components/Appointments/AppointmentTable';
import Template from '../components/Template';
import IBreadcrumb from '../interfaces/IBreadcrumb';
import IPaginateAppointment from '../interfaces/IPaginateAppointments';

interface Props {
  appointments: IPaginateAppointment;
}

const Appointments: React.FC<Props> = ({ appointments }) => {
  const handleTableDataChange = (pagination: TablePaginationConfig) => {
    const url = route('appointments.list') + `?page=${pagination.current}`;
    Inertia.visit(url, { method: Method.GET });
  };
  return (
    <Template breadcrumbs={breadcrumbs}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider className='appoint-title' orientation="left"
        style={{ fontSize: 25, fontWeight: 600 }}>Appointments</Divider>
        <Col>
          <AppointmentTable
            appointments={appointments}
            tableDataChange={handleTableDataChange}
          />
        </Col>
      </div>
    </Template>
  );
};

export default Appointments;

const breadcrumbs: Array<IBreadcrumb> = [
  { name: 'Home', link: route('home') },
  { name: 'Appointments', link: '' },
];
