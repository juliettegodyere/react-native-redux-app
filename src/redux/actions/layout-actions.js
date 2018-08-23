import { createLayoutObject } from '../../utils/layout';

const Types = {
    UPDATE_ORIENTATION: "UPDATE_ORIENTATION"
}

const Actions = {
    // Device Layout
    updateLayout: (dimensions = { width: 0, height: 0 }) => {
        return {
            type: Types.UPDATE_ORIENTATION,
            data: createLayoutObject(dimensions)
        }
    }
}


//
// DEVICE LAYOUT ACTIONS
//

function updateLayout(dimensions) {
    return Actions.updateLayout(dimensions);
}

export const LayoutActions = {
    Types,
    updateLayout
}