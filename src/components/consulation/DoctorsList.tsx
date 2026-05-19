'use client';

import { getDoctors } from '@/app/(commonLayout)/consultation/_actions';
import { useQuery } from '@tanstack/react-query';

const DoctorsList = () => {
  const { data } = useQuery({
    queryKey: ['doctors'],
    queryFn: () => getDoctors(),
  });
  console.log('Doctors List Data:', data);
  return (
    <div>
      <div>Doctors List</div>
      {data?.data?.map((doctor: any) => (
        <div key={doctor.id}>{doctor.name}</div>
      ))}
    </div>
  );
};

export default DoctorsList;
