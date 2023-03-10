export interface Ievent {
  id: string;
  NO: string;
  eventName: string;
  strattime: string;
  distance: string;
  type: string;
}
export const dumyEventList: Ievent[] = [
  {
    id: new Date().toString(),
    NO: "1",
    eventName: "Vinh",
    strattime: new Date().toString(),
    distance: "5km",
    type: "done",
  },
];

export enum PageEnum {
  list,
  add,
  edit,
}
