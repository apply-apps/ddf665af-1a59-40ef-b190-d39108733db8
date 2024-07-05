// Filename: index.js
// Combined code from all files

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const tales = [
  { id: '1', title: 'Cinderella' },
  { id: '2', title: 'Snow White' },
  { id: '3', title: 'Hansel and Gretel' },
  { id: '4', title: 'Little Red Riding Hood' },
  { id: '5', title: 'Sleeping Beauty' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fairy Tales</Text>
      <FlatList
        data={tales}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Tale', { tale: item })}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const TaleScreen = ({ route }) => {
  const { tale } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: `https://picsum.photos/400/300?random=${tale.id}` }} style={styles.image} />
      <Text style={styles.title}>{tale.title}</Text>
      {/* Mock tale content */}
      <Text style={styles.content}>
        Once upon a time in a faraway land, there lived a kind-hearted {tale.title.toLowerCase()} who went through various
        adventures and hardships. Nevertheless, with determination and the help of friends, they overcame all obstacles
        and lived happily ever after.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#f8f4e3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tale" component={TaleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}