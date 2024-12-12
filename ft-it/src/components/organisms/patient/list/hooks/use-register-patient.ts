import { useState, useEffect } from 'react';
import useFetch from './use-fetch';
import environment from '../../../../../enviroments/environment';

function useRegisterPatient(patient) {
    return useFetch(environment.url, { method: 'POST', body: { patient } })
}

export default useRegisterPatient;