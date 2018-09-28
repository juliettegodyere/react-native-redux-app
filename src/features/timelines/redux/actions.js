import { Endpoints } from '../../../config/endpoints';
import { AsyncFlowStatus, HttpUtils, LogUtils } from '../../../utils';

const Types = {
    NAVIGATE_ONCLICK: "NAVIGATE_ONCLICK"
}

const Actions = {
    // Legal Agreements
    acceptClickFunction: () => {
        return { type: Types.NAVIGATE_ONCLICK, data: { legal_acceptance_date: Date.now() } }
    },
}

function acceptClickFunction() {
    return Actions.acceptClickFunction();
}

const handleCard = () =>{
    Action.timelineDetail({});
    return{
        type:'CardPush'
    }
}

export const TimelineActions = {
    Types,
    acceptClickFunction,
    handleCard
}
