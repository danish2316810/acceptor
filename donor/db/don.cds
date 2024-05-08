namespace donor;

entity SALESORDERS {
    key salesOrderID: Int16;
    TotalAmount: Decimal(15,2);
    date: Date;
}
