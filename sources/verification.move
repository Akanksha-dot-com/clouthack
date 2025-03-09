module clouthack::verification {
    use std::signer;
    use std::table;

    struct CompanyRecords has key, store {
        verified_users: table::Table<address, bool>,
    }

    public entry fun init_company(account: &signer) {
        let company_id = signer::address_of(account);
        assert!(!exists<CompanyRecords>(company_id), 101);
        let records = CompanyRecords { verified_users: table::new<address, bool>() };
        move_to(account, records);
    }

    public entry fun add_verified_user(account: &signer, user: address) acquires CompanyRecords {
        let company_id = signer::address_of(account);
        let records = borrow_global_mut<CompanyRecords>(company_id);
        table::add(&mut records.verified_users, user, true);
    }

    public fun is_verified(company_id: address, user: address): bool acquires CompanyRecords {
        let records = borrow_global<CompanyRecords>(company_id);
        table::contains(&records.verified_users, user)
    }
}

