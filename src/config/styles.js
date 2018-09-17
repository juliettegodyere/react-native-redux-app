import { Platform } from 'react-native';
import { responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../utils/layout';

const PRIMARY_FG_TEXT = '#222222';
const PRIMARY_FG_EMPH = '#0061FE';
const PRIMARY_BG      = '#FFFFFF';

const SECONDARY_FG_TEXT = '#222222';
const SECONDARY_FG_EMPH = '#0061FE';
const SECONDARY_BG      = '#F2F6fE';

const TERTIARY_FG_TEXT = '#222222';
const TERTIARY_FG_EMPH = '#0061FE';
const TERTIARY_BG      = '#F8F8F8';

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
        backgroundColor: PRIMARY_FG_EMPH
    },
    btnPrimaryText: {
        color: PRIMARY_BG
    },
    btnSecondary: {
        backgroundColor: SECONDARY_BG
    },
    btnSecondaryText: {
        color: SECONDARY_FG_EMPH
    },
    btnTertiary: {
        backgroundColor: TERTIARY_BG
    },
    btnTertiaryText: {
        color: TERTIARY_FG_EMPH
    },
    btnLarge: {
        fontSize: rf(2.5)
    },
    link: {
        color: PRIMARY_FG_EMPH
    },
    header: {
        backgroundColor: Platform.OS == 'android' ? PRIMARY_FG_EMPH : TERTIARY_BG,
        borderBottomWidth: Platform.OS == 'android' ? 0 : 0.5,
        borderBottomColor: '#dfdfdf'
    },
    'header.title': {
        color: Platform.OS == 'android' ? TERTIARY_BG : TERTIARY_FG_TEXT,
    },
    'header.link': {
        color: Platform.OS == 'android' ? PRIMARY_BG : PRIMARY_FG_EMPH,
    },
    headerAlt: {
        backgroundColor: TERTIARY_BG,
        borderBottomWidth:0.5,
        borderBottomColor: '#dfdfdf'
    },
    'headerAlt.title': {
        color: TERTIARY_FG_TEXT,
    },
    'headerAlt.link': {
        color: PRIMARY_FG_EMPH,
    },
    tabs: {
        color: TERTIARY_FG_TEXT,
        backgroundColor: TERTIARY_BG,
        borderColor: PRIMARY_FG_EMPH
    },
    footer: {
        backgroundColor: '#f8f8f8',
        borderTopWidth: 0.5,
        borderTopColor: '#dfdfdf'
    },
    text: {
        color: PRIMARY_FG_TEXT,
    },
    h1: {
        color: PRIMARY_FG_TEXT,
        fontSize: rf(4),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(5)
    },
    h2: {
        color: PRIMARY_FG_TEXT,
        fontSize: rf(3.5),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(4)
    },
    h3: {
        color: PRIMARY_FG_TEXT,
        fontSize: rf(3),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(3)
    },
    h4: {
        color: PRIMARY_FG_TEXT,
        fontSize: rf(2.5),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(2)
    },
    h5: {
        color: PRIMARY_FG_TEXT,
        fontSize: rf(2),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(1)
    },
    h6: {
        color: PRIMARY_FG_TEXT,
        fontSize: rf(1.5),
        fontFamily: 'AvenirNext-Medium',
        paddingBottom: rh(1)
    },
    p: {
        color: PRIMARY_FG_TEXT,
        fontSize: rf(2),
        lineHeight: rh(3.6),
        fontFamily: 'AvenirNext-Medium'
    },
    small: {
        color: PRIMARY_FG_TEXT,
        fontSize: rf(1.8),
        lineHeight: rh(3.0),
        fontFamily: 'AvenirNext-Medium'
    },
    subtext: { 
        color: '#aaa',
        fontFamily: 'AvenirNext-Medium'
     },
    footnote: {
        color: '#aaa',
        fontSize: rf(1.5),
        lineHeight: rh(3.0),
        fontFamily: 'AvenirNext-Medium'
    }
};
export default GlobalStyles;