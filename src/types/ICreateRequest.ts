export type ICreateRequest<NewTData> = NewTData & { 
    _partition: string;
};