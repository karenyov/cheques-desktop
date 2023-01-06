

const bd = require("../models/bank");

export class BankService {
    static get() {
       return bd.getAll();
    }
} 