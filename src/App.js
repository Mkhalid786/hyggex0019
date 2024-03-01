import React, { useState, useEffect } from 'react';

const MockupData = {
  "appointments": [
    {
      "patient_name": "John Doe",
      "mobile_number": "123-456-7890",
      "appointment_date": "2024-02-26",
      "appointment_time": "10:00 AM",
      "doctor": "Dr. Smith",
      "injury": "Sprained ankle"
    },
    {
      "patient_name": "Jane Smith",
      "mobile_number": "987-654-3210",
      "appointment_date": "2024-02-26",
      "appointment_time": "11:30 AM",
      "doctor": "Dr. Johnson",
      "injury": "Back pain"
    },
    {
      "patient_name": "Michael Johnson",
      "mobile_number": "456-789-0123",
      "appointment_date": "2024-02-26",
      "appointment_time": "1:00 PM",
      "doctor": "Dr. Lee",
      "injury": "Headache"
    },
    {
      "patient_name": "Emily Davis",
      "mobile_number": "789-012-3456",
      "appointment_date": "2024-02-26",
      "appointment_time": "2:30 PM",
      "doctor": "Dr. Patel",
      "injury": "Sore throat"
    },
    {
      "patient_name": "David Wilson",
      "mobile_number": "321-654-9870",
      "appointment_date": "2024-02-26",
      "appointment_time": "4:00 PM",
      "doctor": "Dr. Garcia",
      "injury": "Fever"
    },
    {
      "patient_name": "Sarah Brown",
      "mobile_number": "654-321-0987",
      "appointment_date": "2024-02-26",
      "appointment_time": "5:30 PM",
      "doctor": "Dr. Kim",
      "injury": "Cough"
    }
  ]
};

const ColoredPlaceholder = ({ color }) => (
  <div style={{ backgroundColor: color, width: '50px', height: '50px', borderRadius: '50%', margin: 'auto' }}></div>
);

const App = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    // Replace this with actual API call
    setAppointments(MockupData.appointments);
  }, []);

  return (
   

<div className='w-100 h-100'>
<div class="relative overflow-x-auto w-11/12 mt-20 ml-14">
<h3 className='font-medium text-cyan-600 mb-2'>Today's appointment List</h3>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className=''>
                <th scope="col" class="px-6 py-3">
                    PATIENTS
                </th>
                <th scope="col" class="px-6 py-3">
                    DATE
                </th>
                <th scope="col" class="px-6 py-3">
                    TIME
                </th>
                <th scope="col" class="px-6 py-3">
                    DOCTOR
                </th>
                <th scope="col" class="px-6 py-3">
                    INJURY
                </th>
                <th scope="col" class="px-6 py-3">
                    ACTION
                </th>
            </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
             <td>
              <div className='mt-3'>
              <h3 className='font-bold text-neutral-800'>{appointment.patient_name}</h3> 
              {appointment.mobile_number}
              </div>
            </td>
              <td> <i class="ri-calendar-2-line"> </i> {appointment.appointment_date} </td>
              <td> <i class="ri-time-line"> </i>{appointment.appointment_time} </td>
              <td> <i class="ri-star-half-line text-green-700"> </i> {appointment.doctor} </td>
              <td> <p className='bg-slate-100 w-1/2 py-1 text-center rounded-lg'>{appointment.injury}</p> </td>
              <td className='text-center font-bold'> <i class="ri-more-2-fill"></i> {appointment.action} </td>

            </tr>
          ))}
        </tbody>
    </table>
</div>
</div>

  );
};

export default App;
