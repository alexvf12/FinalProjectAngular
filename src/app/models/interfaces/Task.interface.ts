export enum Levels{
  "Info",
  "Urgent",
  "Blocking"
}

export interface ITask{
title: string;
description?: String;
completed: boolean;
level: Levels;
}
