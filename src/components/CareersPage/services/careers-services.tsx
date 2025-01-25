//import { createHttpClient } from '../../../Services/httpClient';
import {apiBaseUri} from '../../../utils/constants';

// export const listJobs = async ( controller:string,uri:string,experience:string, location:string) => {
//     const httpClient = createHttpClient(`${apiBaseUri}${controller}${uri}`)
//     try {
//       console.log("HttpClient",httpClient)
//       const response = await httpClient.post(`${apiBaseUri}${controller}${uri}`, {"location": location, "experience": experience} );
//       return response.data;
//     } catch (error) {
//       console.log("API fetch fail", error)
//       throw new Error('Failed to fetch user');
//     }
//   };

export const listJobs = async ( controller:string,uri:string,experience:string, location:string) => {
  try {
    const response = await fetch(`${apiBaseUri}${controller}${uri}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "location":experience,
          "experience":location
      }),
    });

    if (!response.ok) {
      console.log("Not ok error :",response.statusText)
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
} catch (error) {
    console.error('Fetch error:', error);
    throw error;
}
}
  