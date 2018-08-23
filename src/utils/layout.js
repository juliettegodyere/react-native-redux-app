import { Dimensions } from 'react-native';

const initialDimensions = Dimensions.get('window');

export function responsiveHeight(h, d = initialDimensions) {
    return d.height * (h / 100);
}
export function responsiveWidth(w, d = initialDimensions) {
    return d.width * (w / 100);
}
export function responsiveFontSize(f, d = initialDimensions) {
    return Math.sqrt((d.height * d.height) + (d.width * d.width)) * (f / 100);
}

export function createLayoutObject(dimensions = { width: 0, height: 0 }) {
    return {
        orientation: dimensions.width < dimensions.height ? 'portrait' : 'landscape',
        width: dimensions.width,
        height: dimensions.height
    }
}