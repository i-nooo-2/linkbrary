export enum CustomInputTypes {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
}

export type CustomInputType = keyof typeof CustomInputTypes;
