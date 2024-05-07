import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import fetchData from '../components/Resdata'; // Assuming fetchData is the correct function for fetching data
import RestaurantItem from '../components/RestaurantItem';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData('new york').then(response => {
      setData(response.businesses);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>{term}</Text>
      <Text style={styles.header}>Restaurants:</Text>

      <FlatList
        data={data}
        renderItem={({ item }) =>
          <View style={styles.RestaurantItem}>
            <RestaurantItem id={item.id} title={item.name} images={item.image_url} amount={item.price_range} />
          </View>
        }
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  , RestaurantItem: {
    display: 'flex',
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
});

export default SearchScreen;
