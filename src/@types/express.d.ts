declare namespace Express {
  export interface Request {
    user?: {
      id: string;
    };
    employee?: {
      id: string;
      unit: {
        id: string;
      };
    };
  }
}
