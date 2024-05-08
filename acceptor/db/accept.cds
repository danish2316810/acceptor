namespace acceptor;

@cds.persistence.exists
entity ACCEPT {
    key salesOrderID: Int16;
    TotalAmount: Decimal(15,2);
    date: Date;
}

entity employee {
    key salesOrderID: Int16;
    TotalAmount: Decimal(15,2);
}