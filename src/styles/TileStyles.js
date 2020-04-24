import {makeStyles} from "@material-ui/core/styles";

const useTileStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
    },
    cardTitle: {
        fontSize: 18,
    },
    sectionTitle: {
        marginTop: 12,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    centeredRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    appendix: {
        marginLeft: 10
    },
    bottomInfo:{
        marginTop: 12,
        fontsize: 12,
        textAlign: 'right'
    }
}));


export default useTileStyle;
