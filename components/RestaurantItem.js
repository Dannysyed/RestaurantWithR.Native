import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RestaurantItem = ({ title, images, amount, id }) => {
    let navigation = useNavigation();

    let pressHandle = () => {
        navigation.navigate('OrderDetail', { restaurant_id: id });
    };
    const truncatedTitle = title.length > 15 ? title.substring(0, 15) + '..' : title;
    return (
        <TouchableOpacity onPress={pressHandle}>
            <View style={[styles.container, Platform.OS === 'ios' && styles.shadow]}>
                <Image style={styles.image} source={{ uri: images }} resizeMode="cover" />
                <Text style={styles.title}>{truncatedTitle}</Text>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountText}>{amount}7$</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Ionicons name="heart" color={'white'} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RestaurantItem;

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 230,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd', // Light gray border color
        marginBottom: 20,
        marginRight: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '60%',
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    amountText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: 'black',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
