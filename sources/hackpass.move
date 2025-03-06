module 0x7229ae25e3ce151f1d63e58057dc70deda74711a3e5fa5c40443ee17990b9aef::hackpass {

    use std::signer;
    use std::table;
    use std::vector;
    use std::option;

    // Store verified users for a company
    struct CompanyRecords has key, store {
        verified_users: table::Table<address, bool>,
    }

    // NFT structure
    struct HackPassNFT has store {
        name: vector<u8>,
        description: vector<u8>,
        owner: address,
        level: u8, // 1 = Bronze, 2 = Silver, 3 = Gold
    }

    // User NFT collection structure
    struct UserNFTCollection has key, store {
        nfts: table::Table<u64, HackPassNFT>, // NFT ID -> NFT
        counter: u64, // Keeps track of NFT IDs
        nft_ids: vector<u64> // List of stored NFT IDs
    }

    // Initialize company records (only once per company)
    public entry fun init_company(account: &signer) {
        let company_id = signer::address_of(account);
        assert!(!exists<CompanyRecords>(company_id), 101);

        let records = CompanyRecords { verified_users: table::new<address, bool>() };
        move_to(account, records);
    }

    // Add a verified user to the on-chain records
    public entry fun add_verified_user(account: &signer, user: address) {
        let company_id = signer::address_of(account);
        let records = borrow_global_mut<CompanyRecords>(company_id);
        table::add(records.verified_users, user, true);
    }

    // Verify user & mint NFT
    public entry fun request_nft(account: &signer, company_id: address, level: u8) {
        let user = signer::address_of(account);

        // Verify the user
        let records = borrow_global<CompanyRecords>(company_id);
        assert!(table::contains(records.verified_users, user), 100);

        // Ensure the user's NFT collection exists
        if (!exists<UserNFTCollection>(user)) {
            move_to(account, UserNFTCollection {
                nfts: table::new<u64, HackPassNFT>(),
                counter: 0,
                nft_ids: vector::empty<u64>()
            });
        }

        // Get the user's NFT collection
        let collection = borrow_global_mut<UserNFTCollection>(user);
        
        // Prevent overflow
        assert!(collection.counter < 18_446_744_073_709_551_615, 102);
        
        let nft_id = collection.counter;

        // Create NFT
        let nft = HackPassNFT {
            name: b"Certificate NFT",
            description: b"Verified participation certificate",
            owner: user,
            level: level,
        };

        // Store NFT in collection
        table::insert(collection.nfts, nft_id, nft);
        vector::push_back(&mut collection.nft_ids, nft_id); // Track NFT ID
        collection.counter = collection.counter + 1;
    }

    // Fetch all NFTs for a user
    public fun get_user_nfts(user: address): vector<HackPassNFT> {
        if (!exists<UserNFTCollection>(user)) {
            return vector::empty<HackPassNFT>();
        }

        let collection = borrow_global<UserNFTCollection>(user);
        let mut nft_list = vector::empty<HackPassNFT>();

        let len = vector::length(&collection.nft_ids);
        let mut i: u64 = 0;
        while (i < len) {
            let nft_id = *vector::borrow(&collection.nft_ids, i);
            let nft = table::borrow(&collection.nfts, nft_id);
            vector::push_back(&mut nft_list, *nft);
            i = i + 1;
        }

        return nft_list;
    }
}
