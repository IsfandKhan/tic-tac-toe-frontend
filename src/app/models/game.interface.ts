import { STATUS } from "./status.enum";

export interface Game {
    id: string;
    board: string;
    status: STATUS;
}