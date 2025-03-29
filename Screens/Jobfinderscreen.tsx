import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { useJobContext, Job } from '../Context/Jobcontext';

const Jobfinderscreen: React.FC = () => {
  const { jobs, saveJob } = useJobContext();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter jobs based on search query
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search jobs..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Job List with Scrollable Feature */}
      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            {item.companyLogo ? (
              <Image source={{ uri: item.companyLogo }} style={styles.logo} />
            ) : null}
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.companyName}>{item.companyName}</Text>
              <Text style={styles.workModel}>{item.workModel}</Text>
              <TouchableOpacity style={styles.saveButton} onPress={() => saveJob(item)}>
                <Text style={styles.saveButtonText}>Save Job</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight || 10, // Ensure proper positioning
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
});

export default Jobfinderscreen;
