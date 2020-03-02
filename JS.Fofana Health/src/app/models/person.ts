import { Deductible } from "./deductible";

export class Person {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    ssn: number;
    question: string;
    answer: string;
    plan: string;
    startDate: string;
    provider: string;
    deductibles: Deductible;
}
