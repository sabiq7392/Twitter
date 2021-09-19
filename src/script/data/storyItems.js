const urlImage = 'src/img';

const storyItems = [
    {
        id: 1,
        image: {
            user: `${urlImage}/user-profile-2.jpg`,
            post: '',
        },
        user: {
            nickname: 'Brie',
            username: '@Sktch_ComedyFan',
        },
        storyContent: 'Giving standup comedy a go. Open mic starts at 7, hit me up if you want ticket',
        hashtag: '#heregoesnothing',
        total: {
            reply: 1,
            retweet: '',
            like: 8,
            share: '',
        },
        timeCreated: 3 + 'm'
    },
    {
        id: 2,
        image: {
            user: `${urlImage}/user-profile-3.jpg`,
            post: `${urlImage}/image-post.jpg`,
        },
        user: {
            nickname: 'Harold',
            username: '@h_wang88',
        },
        storyContent: 'Vacation is going great!',
        hashtag: '',
        total: {
            reply: 3,
            retweet: 5,
            like: 14,
            share: '',
        },
        timeCreated: 10 + 'm'
    },
    {
        id: 3,
        image: {
            user: `${urlImage}/user-profile-4.jpg`,
            post: `${urlImage}/image-post-2.jpg`,
        },
        user: {
            nickname: 'andrea',
            username: '@andy_landerson'
        },
        storyContent: 'How many lemons do I need to make lemonade?',
        hashtag: '#Lemonade',
        total: {
            reply: 2,
            retweet: 10,
            like: 20,
            share: 2,
        },
        timeCreated: 3 + 'm',
    },
];

export default storyItems;