export enum CardTemplateType {
    SIMPLE = "SIMPLE",
    CLOZE = "CLOZE",
    BASIC = "BASIC"
}

export const TemplateDetails = {
    SIMPLE : {
        description : "One-field note",
        fieldCount : 1
    },
    BASIC : {
        description : "Two-field note, first is question, second is answer.",
        fieldCount : 2
    },
    CLOZE : {
        description : "Source text with designated important information.",
        fieldCount : 1
    }
}