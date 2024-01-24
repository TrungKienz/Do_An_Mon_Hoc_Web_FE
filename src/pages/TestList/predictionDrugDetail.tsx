import { useEffect, useState } from 'react';
import DrugInformation from './prediction';
import CRUDService from '@/services/CRUDService';
import { testCaseEp } from '../EndPoint';

const DrugPrediction = () => {
  const [data, setData] = useState([]);
  const [patientData, setPatientData] = useState([]);
  const currentLocation = location.pathname;
  const parts = currentLocation.split('/');
  const ID = parts[parts.length - 1];

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await fetch(`${testCaseEp}/find/${ID}`);
        const data = await response.json();
        setPatientData(data[0]);
        console.log(data[0]?.primaryTissue);
      } catch (error) {
        console.log(error);
        // Handle error
      }
    };

    fetchTestData();
  }, [ID]);

  useEffect(() => {
    const getPredictDrug = async () => {
      try {
        // Check if patientData has a value before creating the body
        if (patientData && patientData.primaryTissue) {
          const body = {
            geneName: "RB1",
            region: 'asia',
            typeCancer: patientData.primaryTissue,
          };

          const response = await CRUDService.searchService('http://localhost:3000/drugs-information/search-drug', body);
          setData(response.dataDrug);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPredictDrug();
  }, [patientData]);

  return <>{data ? <DrugInformation data={data} /> : <></>}</>;
};

export default DrugPrediction;
