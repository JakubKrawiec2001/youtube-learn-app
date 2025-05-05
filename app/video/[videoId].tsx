import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import Video, {
  OnLoadData,
  OnProgressData,
  VideoRef,
} from "react-native-video";
import * as ScreenOrientation from "expo-screen-orientation";
import { Ionicons, Feather } from "@expo/vector-icons";
import PlayIcon from "@/assets/icons/play-icon.svg";
import PauseIcon from "@/assets/icons/pause-icon.svg";
import Slider from "@react-native-community/slider";

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const VideoDetailsPage = () => {
  const { videoId } = useLocalSearchParams();
  const videoRef = useRef<VideoRef>(null);
  const background = require("@/assets/videos/broadchurch.mp4");

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    ScreenOrientation.unlockAsync();
    return () => {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    };
  }, []);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    videoRef.current.presentFullscreenPlayer();
  };

  const handleToggleControls = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setShowControls(true);

    timeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <TouchableWithoutFeedback onPress={handleToggleControls}>
        <SafeAreaView style={styles.container}>
          <View style={styles.videoContainer}>
            <Video
              source={background}
              ref={videoRef}
              style={styles.video}
              resizeMode="cover"
              muted={false}
              paused={!isPlaying}
              controls={false}
              fullscreenAutorotate
              ignoreSilentSwitch="ignore"
              onLoad={(data: OnLoadData) => setDuration(data.duration)}
              onProgress={(data: OnProgressData) =>
                setCurrentTime(data.currentTime)
              }
              onFullscreenPlayerWillPresent={() =>
                ScreenOrientation.lockAsync(
                  ScreenOrientation.OrientationLock.LANDSCAPE
                )
              }
              onFullscreenPlayerDidDismiss={() =>
                ScreenOrientation.lockAsync(
                  ScreenOrientation.OrientationLock.PORTRAIT_UP
                )
              }
            />

            {/* Overlay */}
            {showControls && (
              <>
                <View style={styles.overlay}>
                  <TouchableOpacity
                    onPress={togglePlay}
                    activeOpacity={0.8}
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      borderRadius: 50,
                      padding: 8,
                    }}
                  >
                    {isPlaying ? (
                      <PauseIcon height={24} width={24} stroke="white" />
                    ) : (
                      <PlayIcon height={24} width={24} />
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={toggleFullscreen}
                    style={styles.fullscreenBtn}
                  >
                    <Feather name="maximize" size={20} color="white" />
                  </TouchableOpacity>
                  <View style={styles.progressBarContainer}>
                    <Text style={styles.timeText}>
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </Text>
                    <Slider
                      value={currentTime}
                      minimumValue={0}
                      maximumValue={duration}
                      minimumTrackTintColor="red"
                      maximumTrackTintColor="#C8C8C8"
                      thumbTintColor="red"
                      onSlidingStart={() => setIsPlaying(false)}
                      onSlidingComplete={(value) => {
                        videoRef.current?.seek(value);
                        setCurrentTime(value);
                        setIsPlaying(true);
                      }}
                      style={{
                        width: "100%",
                      }}
                    />
                  </View>
                </View>
              </>
            )}
          </View>
          <Text style={styles.title}>VideoDetailsPage {videoId}</Text>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default VideoDetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  videoContainer: {
    height: 240,
    backgroundColor: "black",
    position: "relative",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.32)",
  },
  fullscreenBtn: {
    position: "absolute",
    bottom: "10%",
    right: 8,
  },
  progressBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 8,
    right: 8,
    gap: 8,
  },

  timeText: {
    fontSize: 12,
    color: "white",
  },
  title: {
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
});
