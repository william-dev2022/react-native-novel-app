import { Stack, useLocalSearchParams } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

// --- Mock Data & Types ---
interface BookData {
  id: string;
  title: string;
  author: string;
  content: string;
}

// A mock function to simulate fetching data
const fetchBookById = async (id: string): Promise<BookData | null> => {
  console.log(`Fetching book with id: ${id}`);
  // In a real app, this would be an API call.
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        id,
        title: "The Silent Planet",
        author: "C.S. Lewis",
        content: `The last thing Ransom remembered was the sound of a door closing. Now, he found himself in a place that felt both alien and strangely familiar. The air was thin, and the light had a quality he had never seen on Earth...`,
      });
    }, 500)
  );
};

// --- Context for sharing book data ---
const BookContext = createContext<BookData | null>(null);
export const useBook = () => useContext(BookContext);

export default function BookLayout() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [book, setBook] = useState<BookData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchBookById(id).then((data) => {
        setBook(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading || !book) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text>Loading Book...</Text>
      </View>
    );
  }

  return (
    <BookContext.Provider value={book}>
      {/* This Stack navigator wraps the read.tsx and listen.tsx screens */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="read" options={{ title: book.title }} />
        <Stack.Screen
          name="listen"
          options={{ title: `${book.title} (Audio)` }}
        />
      </Stack>
    </BookContext.Provider>
  );
}
