import { useState, useEffect } from 'react';
import useFetch from './use-fetch';
import environment from '../../../../../enviroments/environment';

function useRegisterPatient() {
    return useFetch(`${environment.url}/patient/register`, { method: 'POST' })
}

export default useRegisterPatient;