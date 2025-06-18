import AppText from "@/components/AppText";
import { hp, wp } from "@/helpers/common";
import { books } from "@/helpers/data";
import { FontAwesome, Ionicons } from "@expo/vector-icons"; // Using Expo for icons, replace if not using Expo
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// --- THEME COLORS ---
const COLORS = {
  primary: "#007BFF", // Blue for primary actions
  secondary: "#6c757d", // Gray for secondary text
  background: "#FFF", // Light gray background
  // background: "#F5F5F5", // Light gray background
  white: "#FFFFFF",
  black: "#000000",
  accent: "#FFC107", // Yellow for ratings
  lightGray: "#E0E0E0",
};

const BookDetailScreen = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id } = useLocalSearchParams();

  const book = books.find((book) => book.id === id);

  if (!book) {
    return <View>Not Found</View>;
  }

  const toggleSynopsis = () => setIsExpanded(!isExpanded);

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesome
          key={`full_${i}`}
          name="star"
          size={14}
          color={COLORS.accent}
        />
      );
    }
    if (halfStar) {
      stars.push(
        <FontAwesome
          key="half"
          name="star-half-empty"
          size={14}
          color={COLORS.accent}
        />
      );
    }
    for (let i = 0; i < 5 - Math.ceil(rating); i++) {
      stars.push(
        <FontAwesome
          key={`empty_${i}`}
          name="star-o"
          size={14}
          color={COLORS.accent}
        />
      );
    }
    return stars;
  };

  // --- NEW: ReviewCard Component ---
  const ReviewCard = ({
    review,
  }: {
    review: {
      id: string;
      reviewerName: string;
      reviewerImage: string;
      rating: number;
      date: string;
      text: string;
    };
  }) => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Image
          source={{ uri: review.reviewerImage }}
          style={styles.reviewerImage}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <Text style={styles.reviewerName}>{review.reviewerName}</Text>
          <View style={styles.reviewRatingContainer}>
            {renderStars(review.rating)}
          </View>
        </View>
      </View>
      <AppText style={styles.reviewText} numberOfLines={4}>
        {review.text}
      </AppText>
      {/* n<Text style={styles.reviewDate}>{review.date}</Text> */}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: wp(6),
          paddingVertical: hp(2),
          alignItems: "center",
        }}
      >
        <Ionicons name="chevron-back" size={18} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Image source={book.image} style={styles.coverImage} />
          <View style={styles.headerTextContainer}>
            <AppText bold style={styles.title}>
              {book.title}
            </AppText>
            <Text style={styles.author}>{book.author}</Text>
            {/* <Text style={styles.genre}>{book.genre}</Text> */}
            <View style={styles.ratingContainer}>
              <View style={{ flexDirection: "row", columnGap: wp(0.5) }}>
                {["Fantasy", "Romance", "Jealousy"].map((genre) => (
                  <AppText
                    key={genre}
                    style={{
                      padding: 5,
                      backgroundColor: "white",
                      borderRadius: 5,
                      fontSize: 12,
                      paddingHorizontal: 8,
                      textAlign: "center",
                    }}
                  >
                    {genre}
                  </AppText>
                ))}
              </View>

              <Text style={styles.ratingText}>
                {book.rating.toFixed(1)} ({book.reviews.length} reviews)
              </Text>
            </View>
          </View>
        </View>

        {/* Action Buttons Section */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={{
              ...styles.primaryButton,
              flexDirection: "row",
              columnGap: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => console.log("Start Reading Pressed")}
          >
            <Ionicons name="book-sharp" size={16} color="white" />
            <AppText style={styles.primaryButtonText}>Read Now</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.primaryButton,
              flexDirection: "row",
              columnGap: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FFF1F6",
            }}
            onPress={() => console.log("Start Reading Pressed")}
          >
            <Ionicons name="bookmark-sharp" size={16} color="#FD79A8" />
            <AppText style={{ ...styles.primaryButtonText, color: "#FD79A8" }}>
              Add to library
            </AppText>
          </TouchableOpacity>
        </View>

        {/* Synopsis Section */}
        <View style={styles.synopsisContainer}>
          <Text style={styles.sectionTitle}>Synopsis</Text>
          <AppText
            style={styles.synopsisText}
            numberOfLines={isExpanded ? undefined : 4}
          >
            {book.synopsis}
          </AppText>
          <TouchableOpacity onPress={toggleSynopsis}>
            <Text style={styles.readMoreText}>
              {isExpanded ? "Show Less" : "Read More..."}
            </Text>
          </TouchableOpacity>
        </View>

        {/* --- NEW: Reviews Section --- */}
        <View style={styles.reviewsSectionContainer}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          <FlatList
            data={book.reviews}
            renderItem={({ item }) => <ReviewCard review={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.reviewsList}
          />
        </View>

        <View style={{ marginBottom: hp(2), marginTop: hp(3) }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.sectionTitle}>Readers also read</Text>
          </View>

          {/* FlatList Row of Trending Books */}
          <FlatList
            horizontal
            // style={{ marginTop: hp(0) }}
            data={books.toReversed()} // Reversing the order for new arrivals
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: wp(2), marginLeft: wp(6) }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: wp(35),
                  marginBottom: hp(2),
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.04,
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: 140,
                    borderRadius: 10,
                    marginBottom: hp(1),
                  }}
                  contentFit="cover"
                  contentPosition="center"
                />
                <AppText bold fontSize={16} numberOfLines={1}>
                  {item.title}
                </AppText>
                <AppText fontSize={14} style={{ color: "#666" }}>
                  by Author Name
                </AppText>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- STYLES ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    paddingTop: 20,
  },
  // Header
  headerContainer: {
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  coverImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    // lineHeight: 24,
    marginTop: 10,
    color: COLORS.black,
    marginBottom: 5,
    // textAlign: "center",
    fontFamily: "Literata_600SemiBold",
  },
  author: {
    fontSize: 18,
    color: COLORS.secondary,
    marginBottom: 5,
    // textAlign: "center",
  },
  genre: {
    fontSize: 14,
    color: COLORS.secondary,
    fontStyle: "italic",
    marginBottom: 10,
    textAlign: "center",
  },
  // Rating
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 12,
    color: COLORS.secondary,
  },
  // Actions
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
    paddingHorizontal: wp(15),
  },
  primaryButton: {
    // flex: 1,
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
    paddingHorizontal: wp(3),
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: 14,
    // fontWeight: "bold",
  },
  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 10,
  },
  secondaryButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
  // Synopsis
  synopsisContainer: {
    // padding: 20,
    // padding: 8,
    // backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: COLORS.black,
    paddingLeft: wp(6),
  },
  synopsisText: {
    paddingHorizontal: wp(6),
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.secondary,
    // fontStyle: "italic",
    // fontFamily: "Poppins_400Regular_Italic",
  },
  readMoreText: {
    color: COLORS.primary,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "right",
    paddingHorizontal: wp(6),
  },
  // --- NEW: Review Section Styles ---
  reviewsSectionContainer: {
    marginTop: 10,
  },
  reviewsList: {
    // paddingHorizontal: 20, // To give padding at the start and end of the list
    marginLeft: wp(6),
  },
  reviewCard: {
    width: 280, // Fixed width for each card
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    marginRight: 15, // Space between cards
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  reviewerImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Make it a circle
    marginRight: 10,
  },
  reviewerName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  reviewRatingContainer: {
    flexDirection: "row",
    marginTop: 2,
  },
  reviewText: {
    fontSize: 13,
    color: COLORS.secondary,
    lineHeight: 20,
    fontFamily: "Poppins_400Regular_Italic",
    flex: 1, // Ensure text takes available space
  },
  reviewDate: {
    fontSize: 12,
    color: COLORS.secondary,
    marginTop: 10,
    textAlign: "right",
  },
});

export default BookDetailScreen;
