module clouthack::events {
    use std::event;
    use std::signer;
    use std::guid;

    /// Define the event struct that will be emitted when a user is verified
    struct UserVerifiedEvent has drop, store {
        company_id: address,
        user: address,
    }

    /// Storage struct that holds the event handle
    struct EventStore has key {
        user_verified_events: event::EventHandle<UserVerifiedEvent>,
    }

    /// Initialize event storage for an account
    public entry fun init_events(account: &signer) {
        let addr = signer::address_of(account);
        assert!(!exists<EventStore>(addr), 101); // Ensure EventStore doesn't already exist

        let event_store = EventStore {
            user_verified_events: event::new_event_handle<UserVerifiedEvent>(guid::create(addr)), // Corrected to take two arguments
        };

        move_to(account, event_store);
    }

    public fun emit_user_verified(company_id: address, user: address) acquires EventStore {
        let events = borrow_global_mut<EventStore>(company_id);
        event::emit_event(&mut events.user_verified_events, UserVerifiedEvent { company_id, user });
    }
}
