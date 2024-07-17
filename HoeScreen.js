import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search..." />
      <Text style={styles.sectionTitle}>Featured Museums/Galleries</Text>
      <FlatList
        horizontal
        data={[/* Sample data */]}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.sectionTitle}>Upcoming Events</Text>
      <FlatList
        data={[/* Sample data */]}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex
