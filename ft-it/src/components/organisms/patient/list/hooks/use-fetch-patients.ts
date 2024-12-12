import { useState, useEffect } from 'react';
import useFetch from './use-fetch';
import environment from '../../../../../enviroments/environment';

function useFetchPatient() {
    return useFetch(`${environment.url}/patient`, { method: 'GET'})
}

export default useFetchPatient;