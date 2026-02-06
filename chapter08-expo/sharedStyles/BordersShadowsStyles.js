import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Borders
    borderThin: {
        borderWidth: 1,
        borderColor: '#dddddd',
    },

    borderThick: {
        borderWidth: 2,
        borderColor: '#cccccc',
    },

    roundedS: {
        borderRadius: 8,
    },

    roundedM: {
        borderRadius: 12,
    },

    roundedL: {
        borderRadius: 16,
    },

    dashed: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#cccccc',
    },

    dotted: {
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: '#cccccc',
    },

    // Shadows (รองรับ iOS และ Android)
    shadowS: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.12,
        shadowRadius: 2,
        elevation: 2,
    },

    shadowM: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.18,
        shadowRadius: 4,
        elevation: 4,
    },

    shadowL: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.22,
        shadowRadius: 8,
        elevation: 6,
    },
});

export default styles;
