import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Video from "react-native-video";

// Get screen width for responsiveness
const { width } = Dimensions.get("window");

const CourseHero = () => {
  const videoRef = useRef<null | React.ComponentRef<typeof Video>>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.category}>UX Foundations</Text>
        <Text style={styles.title}>Introduction to UX Design</Text>
        <Text style={styles.description}>
          Learn the fundamentals of user-centered design and how to create
          intuitive user experiences.
        </Text>
      </View>

      {/* Video Player */}
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
          style={styles.video}
          paused={!isPlaying}
          resizeMode="cover"
          repeat
        />
        <TouchableOpacity
          style={styles.playButton}
          onPress={handlePlayPause}
          activeOpacity={0.8}
          accessibilityLabel="Toggle video playback"
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourseHero;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal: 10,
  },
  textContainer: {
    flex: 1,
    paddingRight: 16,
  },
  category: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
  videoContainer: {
    width: width * 0.35,
    height: width * 0.5,
    backgroundColor: "#eaeaea",
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],
    backgroundColor: "rgba(0,0,0,0.6)",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
});
