import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import CustomText from './CustomText';

export default function IntroScreen({ navigation }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            // Fade in
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                // Fade out
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }).start(() => {
                    navigation.navigate('HomeScreen');
                });
            });
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Animated.View style={styles.container}>
            <CustomText style={styles.title}>Caudate 🧠</CustomText>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
    }
});
