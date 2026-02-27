import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f5f5f5",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    emptyCartText: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 20,
        color: "#999",
    },
    cartItem: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cartItemImage: {
        width: 60,
        height: 80,
        borderRadius: 5,
    },
    cartItemDetails: {
        flex: 1,
        marginLeft: 10,
    },
    cartItemTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    cartItemPrice: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#007bff",
    },
    removeButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    removeButtonText: {
        color: "white",
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    clearCartButton: {
        flex: 1,
        padding: 12,
        backgroundColor: "red",
        borderRadius: 5,
        marginRight: 5,
        alignItems: "center",
    },
    clearCartButtonText: {
        color: "white",
        fontSize: 16,
    },
    checkoutButton: {
        flex: 1,
        padding: 12,
        backgroundColor: "#28a745",
        borderRadius: 5,
        marginLeft: 5,
        alignItems: "center",
    },
    checkoutButtonText: {
        color: "white",
        fontSize: 16,
    },
});

export default styles;
