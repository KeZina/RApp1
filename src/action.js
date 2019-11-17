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