import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // ขนาดคงที่
    sizeXS: { width: 40, height: 40 },
    sizeS: { width: 80, height: 80 },
    sizeM: { width: 120, height: 120 },

    // ความกว้างมาตรฐาน
    widthFull: { width: '100%' },
    widthHalf: { width: '50%' },

    // ความสูงมาตรฐาน
    heightS: { height: 40 },
    heightM: { height: 56 },

    // Flex sizing
    flex1: { flex: 1 },
    flex2: { flex: 2 },

    // อัตราส่วน
    ratio16by9: { aspectRatio: 16 / 9 },
    ratio1by1: { aspectRatio: 1 },

    // ขนาดขั้นต่ำและสูงสุด
    minWidthS: { minWidth: 80 },
    maxWidthL: { maxWidth: 320 },
});

export default styles;
