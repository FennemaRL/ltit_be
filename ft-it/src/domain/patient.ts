interface Patient {
    name: string;
    email: string;
    address: string;
    phoneNumber: {
      countryCharacteristic: number;
      number: number;
    };
    photoIdentityDocument: string;
  }
  
export interface CardProps {
    patient: Patient;
  }