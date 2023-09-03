import { Response, Request, HttpFunction } from "@google-cloud/functions-framework";

export const index: HttpFunction = (req: Request, res: Response) => {
  res.send('hello world');
}

