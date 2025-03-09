module clouthack::nft_manager {
    use std::signer;
    use std::table;
    use std::vector;
    use clouthack::verification;  // Import verification module dynamically
    use clouthack::events;        // Import events module dynamically

    struct HackPassNFT has store {
        name: vector<u8>,
        description: vector<u8>,
        owner: address,
        level: u8,
    }

    struct UserNFTCollection has key, store {
        nfts: table::Table<u64, HackPassNFT>,
        counter: u64,
        nft_ids: vector<u64>,
    }

    public entry fun request_nft(account: &signer, company_id: address, level: u8) acquires UserNFTCollection {
        let user = signer::address_of(account);

        assert!(verification::is_verified(company_id, user), 100);

        if (!exists<UserNFTCollection>(user)) {
            let new_collection = UserNFTCollection {
                nfts: table::new<u64, HackPassNFT>(),
                counter: 0,
                nft_ids: vector::empty<u64>(),
            };
            move_to(account, new_collection);
        };

        let collection_ref = borrow_global_mut<UserNFTCollection>(user);
        let nft_id = collection_ref.counter;

        let nft = HackPassNFT {
            name: b"Certificate NFT",
            description: b"Verified participation certificate",
            owner: user,
            level: level,
        };

        table::add(&mut collection_ref.nfts, nft_id, nft);
        vector::push_back(&mut collection_ref.nft_ids, nft_id);
        collection_ref.counter = collection_ref.counter + 1;

        events::emit_nft_minted(user, nft_id);
    }
}
