POST http://localhost:3001/patient/register HTTP/1.1
content-type: application/json

{
  "patient":  
  {"name": "sample",
    "email": "ld.fennema@gmail.com",
    "address": "lalal",
    "phoneNumber":  {
        "countryCharacteristic": 54,
        "number": 116835362
    },
    "photoIdentityDocument": "string"
    }
}
