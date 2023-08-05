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
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.description}>{props.description}</Text>
                <Text style={styles.description}>{props.amount}</Text>
                <Button  style={styles.childItem} title="Add to bag"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: "#cef5d8",
        height: 140,
        marginBottom: 10,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        padding: 10
    },
    childContainer:{
        display:"flex",
        flexDirection:"column"
    },
    childItem:{
      margin: 5
    },
    name:{
        fontSize: 16,
        margin: 5
    },
    description:{
        fontSize: 10,
        margin: 5
    },
    imageStyles:{
        height: 60,
        width: 60,
        borderRadius: 50
    },
})
export default ProductComponent;