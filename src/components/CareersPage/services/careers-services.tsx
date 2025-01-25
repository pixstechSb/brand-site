import { createHttpClient } from '../../../Services/httpClient';
import {apiBaseUri} from '../../../utils/constants';

export const listJobs = async ( uri:string,experience:string, location:string) => {
    const httpClient = createHttpClient(`${apiBaseUri}${uri}`)
    try {
      const response = await httpClient.post(`${apiBaseUri}${uri}`, {"location": location, "experience": experience} );
      return response.data;
    } catch (error) {
      console.log("API fetch fail", error)
      throw new Error('Failed to fetch user');
    }
  };

  