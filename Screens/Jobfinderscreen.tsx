import React, { useState, useEffect } from 'react';
import { 
  View, Text, TextInput, FlatList, TouchableOpacity, 
  Image, StyleSheet, StatusBar, ActivityIndicator 
} from 'react-native';
import { useJobContext, Job } from '../Context/Jobcontext';
import { useNavigation } from '@react-navigation/native';
import { JobfinderScreenNavigationProp } from '../Context/types';

const Jobfinderscreen: React.FC = () => {
  const { jobs, saveJob, fetchJobs, savedJobs } = useJobContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<JobfinderScreenNavigationProp>();

  useEffect(() => {
    const loadJobs = async () => {
      await fetchJobs();
      setLoading(false);
    };
    loadJobs();
  }, []);

  // Filter jobs based on search query
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderJobItem = ({ item }: { item: Job }) => {
    const isSaved = savedJobs.some(job => job.id === item.id);

    return (
      <View style={styles.jobCard}>
        {item.companyLogo && <Image source={{ uri: item.companyLogo }} style={styles.logo} />}
        <View style={styles.jobInfo}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.companyName}>{item.companyName}</Text>
          <Text style={styles.workModel}>{item.workModel}</Text>

          <TouchableOpacity 
            style={[styles.saveButton, isSaved && styles.savedButton]} 
            onPress={() => saveJob(item)}
            disabled={isSaved}
          >
            <Text style={styles.saveButtonText}>{isSaved ? "Saved" : "Save Job"}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.applyButton} 
            onPress={() => navigation.navigate('Applicationformscreen', { job: item })}
          >
            <Text style={styles.applyButtonText}>Apply Now</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.viewSavedButton} 
            onPress={() => navigation.navigate('Savejobscreen')}
          >
            <Text style={styles.viewSavedButtonText}>View Saved Jobs</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <TextInput
        style={styles.searchBar}
        placeholder="Search jobs..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" style={styles.loading} />
      ) : (
        <FlatList
          data={filteredJobs}
          keyExtractor={(item) => item.id}
          renderItem={renderJobItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          keyboardShouldPersistTaps="handled"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight || 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
  },
  loading: {
    marginTop: 20,
  },
  jobCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 14,
    color: '#555',
  },
  workModel: {
    fontSize: 12,
    color: '#777',
  },
  saveButton: {
    marginTop: 5,
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  savedButton: {
    backgroundColor: '#28A745',
  },
  applyButton: {
    marginTop: 5,
    backgroundColor: '#28A745',
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  viewSavedButton: {
    marginTop: 5,
    backgroundColor: '#FFC107',
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewSavedButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Jobfinderscreen;
