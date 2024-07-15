import axios from 'axios';
import { mapNewToOldStructure } from 'src/helpers/mapping/mapping';

export const fetchResumeData = async () => {
  try {
    const response = await axios.get('/api/new-resume-data'); // Replace with your actual API endpoint
    return mapNewToOldStructure(response.data);
  } catch (error) {
    console.error('Failed to fetch resume data', error);
    return null;
  }
};
