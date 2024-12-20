import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { icons } from '../assets/icons'; // İkonları doğru bir şekilde import ettiğinizden emin olun.
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const TabBarButton = ({ isFocused, label, routeName, color, ...rest }) => {
  // Animasyon değerlerini yönetmek için `scale` state'i.
  const scale = useSharedValue(0);

  // `isFocused` değiştiğinde animasyonu tetikle.
  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
  }, [scale, isFocused]);

  // İkon animasyonu stili
  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, -8]); // İkon yukarı doğru hareket eder.

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  // Yazı animasyonu stili
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]); // Yazı görünürlüğü animasyonu.

    return { opacity };
  });

  return (
    <Pressable {...rest} style={styles.container}>
      {/* İkon */}
      <Animated.View style={animatedIconStyle}>
        {icons[routeName] ? icons[routeName]({ color, size: 24 }) : null}
      </Animated.View>

      {/* Yazı */}
      <Animated.Text style={[styles.label, { color }, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  label: {
    fontSize: 11,
  },
});

export default TabBarButton;
