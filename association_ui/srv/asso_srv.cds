using {danish} from '../db/asso';

service MyService @(requires: 'authenticated-user'){

    entity CUSTOMERS as projection on danish.CUSTOMERS;
    entity SALESORDERS as projection on danish.SALESORDERS;
    entity LINEITEMS as projection on danish.LINEITEMS;
}