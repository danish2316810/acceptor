using { acceptor } from '../db/accept';

service MyService {
    entity ACCEPTSALESORDERS as projection on acceptor.ACCEPT;
    entity sam as projection on acceptor.employee;
}
