import axios from 'axios';
import {  mapNewToOldStructure } from 'src/helpers/mapping/mapping';

export const fetchResumeData = async () => {
  try {
    const response = await axios.get('https://resume-builder-backend-59r2.onrender.com/v1/resume/get?email=johndoe@example.com'); // Replace with your actual API endpoint
    console.log(response.data.data);
    let resumeData = response.data.data
    return mapNewToOldStructure(resumeData);
  } catch (error) {
    console.error('Failed to fetch resume data', error);
    return null;
  }
};


