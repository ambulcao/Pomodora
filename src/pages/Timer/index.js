import React, { useState, useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { styles } from "./styles";

function formatSeconds(seconds) {
  if (seconds < 60) {
    return `${seconds} seg`;
  }

  return `${Math.floor(seconds / 60)} min`;
}

export default function Timer() {
  const timerRef = useRef();

  const [timerEnabled, setTimerEnabled] = useState(false);
  const [secondsEllapsed, setSecondsEllapsed] = useState(0);

  function toggleTimer() {
    if (timerEnabled) {
      clearInterval(timerRef.current);

      setTimerEnabled(false);
    } else {
      timerRef.current = setInterval(() => {
        setSecondsEllapsed((state) => state + 1);
      }, 1000);

      setTimerEnabled(true);
    }
  }

  return (
    <LinearGradient colors={["#F2ABAB", "#F43A3A"]} style={styles.container}>   
      <Text style={styles.title}>Pomodoro</Text>

      <AnimatedCircularProgress
        size={300}
        width={12}
        fill={(secondsEllapsed * 100) / 600}
        tintColor = "#FF1414"
        rotation={0}
        backgroundColor="#fff"
      >
        {() => (
          <Text style={styles.progress}>{formatSeconds(secondsEllapsed)}</Text>
        )}
      </AnimatedCircularProgress>

      <TouchableOpacity style={styles.button} onPress={toggleTimer}>
        <MaterialIcons
          name={timerEnabled ? "pause" : "play-arrow"}
          size={32}
          color = "#FF1414"
        />
      </TouchableOpacity>
    </LinearGradient>
  );
}
