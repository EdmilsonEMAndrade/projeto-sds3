import { isStringTextContainingNode } from "typescript"

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SaleSucess = {
    sellerName: string,
    visited: number;
    deals: number;
}
