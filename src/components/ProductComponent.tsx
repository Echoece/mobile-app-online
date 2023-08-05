import React from "react";
import {View, Text, StyleSheet, Button, Image} from "react-native";
import ecommerce from "../../assets/ecommerce.png";
export interface IProduct{
    name: string,
    id: number,
    description: string,
    amount: string
}

const ProductComponent = (props: IProduct) =>{
    return (
        <View style={styles.mainContainer}>
            <View>
                <Image source={ecommerce} style={styles.imageStyles}/>
            </View>
            <View>
                <Text>{props.name}</Text>
                <Text>{props.description}</Text>
                <Text>{props.amount}</Text>
                <Button title="Add to bag"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: "#cef5d8",
        height: 90,
        marginBottom: 10,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    childContainer:{
        display:"flex",
        flexDirection:"column"
    },
    imageStyles:{
        height: 40,
        width: 40
    },
})
export default ProductComponent;