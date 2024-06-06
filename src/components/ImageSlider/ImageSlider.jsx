import React, { useState } from 'react';
import {
    View, Image, StyleSheet, ScrollView, Dimensions, Text,
} from 'react-native';


const ImageSlider = ({ images }) => {

    const width = Dimensions.get('window').width * 0.75;
    const [active, setActive] = useState(0);

    const onScrollChange = ({ nativeEvent }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
            setActive(slide);
        }
    };

    return (
        <View style={[styles.container, { height: images.length > 1 ? 430 : 380 }]}>
            <ScrollView
                scrollEventThrottle={16}
                pagingEnabled
                horizontal
                onScroll={onScrollChange}
                showsHorizontalScrollIndicator={false}
                style={{
                    width,
                    height: 370,
                    borderRadius: 10,
                    marginTop: 10,
                }}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image.link ?? image.base64 }}
                        style={{
                            width, height: 370, resizeMode: 'cover',
                            borderRadius: 10
                        }}
                    />
                ))}
            </ScrollView>
            {
                images.length > 1 &&
                <View style={styles.pagination}>
                    {images.map((i, k) => (
                        <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
                            •
                        </Text>
                    ))}
                </View>
            }
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
        height: 430
    },
    pagination: {
        flexDirection: 'row',
    },
    dot: {
        color: '#888',
        fontSize: 40,
    },
    activeDot: {
        color: "#b20000",
        fontSize: 40,
    },
});

export default ImageSlider;