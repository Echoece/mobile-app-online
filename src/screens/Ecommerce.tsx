import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import ProductComponent, {IProduct} from "../components/ProductComponent";


const Ecommerce = ()=>{
    const products:IProduct[] = [
        {
            name: "Tide Powder",
            id: 1,
            description: "Washing powder",
            amount: "800gm"
        },
        {
            name: "Onion",
            id: 2,
            description: "Daily needs",
            amount: "1 kg"
        },
        {
            name: "Milk Vita",
            id: 3,
            description: "Dairy Product",
            amount: "1 litre"
        },
        {
            name: "Amul Butter",
            id: 4,
            description: "Dairy product",
            amount: "500 gm"
        }
    ];

    return(
        <View>
            <Text style={styles.headText}>Ecommerce</Text>
            {products.map(
                product => <ProductComponent
                    name={product.name}
                    id={product.id}
                    description={product.description}
                    amount={product.amount}
                    key={product.id}
                />
            )}
        </View>
    )
}

const  styles = StyleSheet.create({
    headText:{
        fontSize: 20,
        textAlign: "center",
        marginTop:80,
        marginBottom:50
    }
})
export default Ecommerce;