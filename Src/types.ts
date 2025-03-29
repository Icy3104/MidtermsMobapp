import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define Job Type
export interface Job {
  id: string;
  title: string;
  companyName: string;
  workModel: string;
  companyLogo?: string;
}

// Define Context Type for Jobs
export interface JobContextType {
  jobs: Job[];
  savedJobs: Job[];
  fetchJobs: () => Promise<void>;
  saveJob: (job: Job) => void;
}

// Navigation Type Definitions
export type RootStackParamList = {
  Jobfinderscreen: undefined;
  Savejobscreen: undefined;
  Applicationformscreen: { job: Job };
};

export type JobfinderScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Applicationformscreen'
>;
