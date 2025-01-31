//import { createHttpClient } from '../../../Services/httpClient';
import { apiBaseUri } from '../../../utils/constants';

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

export const listJobs = async (controller: string, uri: string, experience: string, location: string) => {
  try {
    const response = await fetch(`${apiBaseUri}${controller}${uri}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type",
        "Connection": "	keep-alive"
      },
      body: JSON.stringify({
        "location": experience,
        "experience": location
      }),
    });

    if (!response.ok) {
      console.log("Not ok error :", response.statusText)
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export const applyJobAPI = async (controller: string, uri: string, jobApply: any) => {
  try {
    const response = await fetch(`${apiBaseUri}${controller}${uri}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type",
        "Connection": "	keep-alive"
      },
      body: jobApply,
    });

    if (!response.ok) {
      console.log("Not ok error :", response.statusText)
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {

  }
}

export const getRandomId = async (controller: string, uri: string) => {
  try {
    const apiResponse = await fetch(`${apiBaseUri}${controller}${uri}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type",
        "Connection": "	keep-alive"
      },
    });

    if (!apiResponse.ok) {
      console.log("Not ok error :", apiResponse.statusText)
      throw new Error('Network response was not ok');
    }
    return apiResponse;
  } catch (error) {

  }
}