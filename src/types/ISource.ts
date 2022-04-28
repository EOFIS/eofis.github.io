export interface ISource {
    title: string;
    type: string;
    url: string;
}

export enum SourceType {
    ARTICLE = "ARTICLE",
    ONLINE = "ONLINE",
    TEST = "TEST"
}