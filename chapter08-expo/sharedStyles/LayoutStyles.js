import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Container พื้นฐาน
    container: {
        flex: 1,
    },

    // การจัดตำแหน่งกึ่งกลาง
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Flex direction
    row: {
        flexDirection: 'row',
    },

    column: {
        flexDirection: 'column',
    },

    // การจัดแนวและการกระจายพื้นที่
    justifyBetween: {
        justifyContent: 'space-between',
    },

    justifyAround: {
        justifyContent: 'space-around',
    },

    alignCenter: {
        alignItems: 'center',
    },

    alignStart: {
        alignItems: 'flex-start',
    },

    alignEnd: {
        alignItems: 'flex-end',
    },

    // Wrapping
    wrap: {
        flexWrap: 'wrap',
    },

    // Flex sizing (กรณีต้องใช้ใน layout)
    flex1: { flex: 1 },
    flex2: { flex: 2 },

    // Positioning (ใช้เฉพาะกรณีจำเป็น)
    absolute: { position: 'absolute' },
    relative: { position: 'relative' },
});

export default styles;
