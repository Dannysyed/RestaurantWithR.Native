import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';

const RestaurantDetailItem = ({ name, image_url, display_phone, rating, price, location, menu_url }) => {
    const handleMenuPress = () => {
        if (menu_url) {
            Linking.openURL(menu_url);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {image_url && <Image style={styles.image} source={{ uri: image_url }} resizeMode="cover" />}
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>{name || 'Restaurant Name'}</Text>
                <Text style={styles.details}>{location && location.display_address ? location.display_address.join(', ') : 'Address not available'}</Text>
                {display_phone && (
                    <TouchableOpacity onPress={() => Linking.openURL(`tel:${display_phone}`)} style={styles.phoneButton}>
                        <Text style={styles.phoneButtonText}>Call: {display_phone}</Text>
                    </TouchableOpacity>
                )}
                {rating && <Text style={styles.details}>Rating: {rating}</Text>}
                {price && <Text style={styles.details}>Price: {price}</Text>}
                {menu_url && (
                    <TouchableOpacity onPress={handleMenuPress} style={styles.menu}>
                        <Text style={styles.menuText}>View Menu</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default RestaurantDetailItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    details: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
    },
    phoneButton: {
        backgroundColor: '#007bff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    phoneButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    menu: {
        backgroundColor: '#28a745',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    menuText: {
        color: '#fff',
        fontSize: 16,
    },
});
