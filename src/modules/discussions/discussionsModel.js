const discussions = [
  {
    id: 'discussion-1',
    title: 'Halo! Apakah kalian sudah menentukan Goals pribadi?',
    body: 'Halo! Apakah kalian sudah menentukan Goals pribadi? Bagikan caramu mencapainya dan mari kita tumbuh bersama!',
    tags: ['grow', 'tutorial', 'beginners'],
    createdAt: '2023-05-12T10:00:00.000Z',
    ownerId: 'users-1',
    upVotes: [],
    downVotes: [],
    comments: [
      {
        id: 'comment-1',
        content:
          'Sudah dongg, aku untuk minggu ini ada dua goals yang ingin dicapai!',
        createdAt: '2023-05-12T10:05:00.000Z',
        ownerId: 'users-1',
        upVotes: [],
        downVotes: [],
      },
      {
        id: 'comment-2',
        content: 'Aku masih belum, bingung banget!',
        createdAt: '2023-05-12T10:10:00.000Z',
        ownerId: 'users-2',
        upVotes: [],
        downVotes: [],
      },
    ],
  },
];

module.exports = discussions;
