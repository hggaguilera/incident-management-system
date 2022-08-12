import { Amplify, API } from 'aws-amplify';
import styles from '../styles/index.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [incidentManagement, setIncidentManagement] = useState([]);

  const myAPI = 'api1b437596';
  const path = '/incidentManagement';

  useEffect(() => {
    const getCustomer = async () => {
      API.get(api, path + '/')
        .then((response) => {
          console.log(response);
          let newCustomers = [...customers];
          newCustomers.push(response);
          setCustomers(newCustomers);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCustomer();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Incident Management System</h1>

      <form></form>
    </div>
  );
}
