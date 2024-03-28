export interface Cart {
    product?: number;
    quantity?: number
}
export class CCart implements Cart {
    constructor(
        public product?: number,
        public quantity?: number
    ) { }
}