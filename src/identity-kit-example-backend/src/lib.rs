use std::cell::RefCell;
use std::collections::VecDeque;

use candid::CandidType;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, CandidType, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Post {
    pub id: u64,
    pub content: String,
}

thread_local! {
    static POSTS: RefCell<VecDeque<Post>> = RefCell::new(VecDeque::new());
    static COUNTER: RefCell<u64> = RefCell::new(0);
}

#[ic_cdk::update]
fn create_post(content: String) -> Post {
    POSTS.with(|posts| {
        let id = COUNTER.with(|c| {
            let mut counter = c.borrow_mut();
            *counter += 1;
            *counter
        });

        let post = Post { id, content };
        posts.borrow_mut().push_front(post.clone());
        post
    })
}

#[ic_cdk::query]
fn get_posts() -> Vec<Post> {
    POSTS.with(|posts| posts.borrow().clone().into())
}
