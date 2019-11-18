export const ADD_NOTE = (note) => {
    return {
        type: "ADD_NOTE",
        note,
    }
}

export const REMOVE_NOTE = (title) => {
    return {
        type: "REMOVE_NOTE",
        title,
    }
}

export const DATE_SORTING = () => {
    return {
        type: "DATE_SORTING",
    }
}

export const PRIORITY_SORTING = () => {
    return {
        type: "PRIORITY_SORTING",
    }
}