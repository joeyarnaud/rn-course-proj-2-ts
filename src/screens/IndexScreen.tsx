import React, { useContext } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen: React.FC = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30 }}> IndexScreen </Text>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default IndexScreen;
