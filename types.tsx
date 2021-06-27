/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

enum Position {
  FWD,
  MID,
  DEF,
  GCK,
}

export type Player = {
  id: string;
  name: string;
  image?: string;
  match: string;
  price: number;
  position: Position;
  totalPoints:number
};
