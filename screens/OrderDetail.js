import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import fetchBusinessData from '../components/ResdataID';
import RestarurantDetailItem from '../components/RestarurantDetailItem';

const OrderDetail = () => {
    const [data, setData] = useState({});
    const route = useRoute();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const restId = route.params.restaurant_id;
                const response = await fetchBusinessData(restId);
                setData(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <RestarurantDetailItem
                    name={data.name}
                    image_url={data.image_url}
                    display_phone={data.phone}
                    rating={data.rating}
                    price={data.price}
                    location={{
                        display_address: ['11 Madison Ave', 'New York, NY 10010']
                    }}
                    menu_url="http://www.elevenmadisonpark.com/menus/"
                />
            )}
        </>
    );
}

export default OrderDetail

const styles = StyleSheet.create({})
