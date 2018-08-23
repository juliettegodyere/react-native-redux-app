import { Platform } from 'react-native';
import { responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../utils/layout';
const GlobalStyles = {
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    btn: {
        fontFamily: 'AvenirNext-Medium'
    },
    btnPrimary: {
        color: "#3498db"
    },
    btnLarge: {
        fontSize: rf(2.5)
    },
    text: {
        color: '#333'
    },
    subtext: { color: '#aaa' },
    link: {
        color: '#0061FE'//#2980b9'
    },
    brandBlue: {
        color: '#0061FE',
    },
    header: {
        backgroundColor: Platform.OS == 'android' ? '#0061FE' : '#f8f8f8',
    },
    'header.title': {
        color: '#222'
    },
    footer: {
        backgroundColor: '#f8f8f8',
    },
    h1: {
        fontSize: rf(4),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(5)
    },
    h2: {
        fontSize: rf(3.5),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(4)
    },
    h3: {
        fontSize: rf(3),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(3)
    },
    h4: {
        fontSize: rf(2.5),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(2)
    },
    h5: {
        fontSize: rf(2),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(1)
    },
    h6: {
        fontSize: rf(1.5),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(1)
    },
    p: {
        fontSize: rf(2),
        lineHeight: rh(3.6),
        fontFamily: 'AvenirNext-Medium'
    },
    small: {
        fontSize: rf(1.8),
        lineHeight: rh(3.0),
        fontFamily: 'AvenirNext-Medium'
    }
};
export default GlobalStyles;