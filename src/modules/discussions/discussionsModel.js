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
  {
    id: 'discussion-2',
    title: 'Tips Mengelola Waktu untuk Produktivitas Maksimal',
    body: 'Apa saja tips yang kalian gunakan untuk mengelola waktu? Bagikan pengalaman dan saran kalian di sini.',
    tags: ['productivity', 'time management', 'tips'],
    createdAt: '2023-05-13T09:00:00.000Z',
    ownerId: 'users-2',
    upVotes: [],
    downVotes: [],
    comments: [
      {
        id: 'comment-3',
        content: 'Aku selalu menggunakan aplikasi to-do list, sangat membantu!',
        createdAt: '2023-05-13T09:15:00.000Z',
        ownerId: 'users-3',
        upVotes: [],
        downVotes: [],
      },
      {
        id: 'comment-4',
        content:
          'Membagi waktu dengan prioritas tinggi dan rendah itu penting.',
        createdAt: '2023-05-13T09:20:00.000Z',
        ownerId: 'users-1',
        upVotes: [],
        downVotes: [],
      },
    ],
  },
  {
    id: 'discussion-3',
    title: 'Rekomendasi Buku untuk Pengembangan Diri',
    body: 'Ada yang punya rekomendasi buku bagus untuk pengembangan diri? Yuk share di sini!',
    tags: ['books', 'self-development', 'recommendations'],
    createdAt: '2023-05-14T08:30:00.000Z',
    ownerId: 'users-3',
    upVotes: [],
    downVotes: [],
    comments: [
      {
        id: 'comment-5',
        content:
          'Aku merekomendasikan "Atomic Habits" oleh James Clear, sangat inspiratif!',
        createdAt: '2023-05-14T08:45:00.000Z',
        ownerId: 'users-4',
        upVotes: [],
        downVotes: [],
      },
      {
        id: 'comment-6',
        content:
          'Coba baca "The Power of Habit" oleh Charles Duhigg, keren banget!',
        createdAt: '2023-05-14T08:50:00.000Z',
        ownerId: 'users-2',
        upVotes: [],
        downVotes: [],
      },
    ],
  },
  {
    id: 'discussion-4',
    title: 'Cara Efektif Mencapai Tujuan Keuangan',
    body: 'Bagaimana cara kalian mengelola keuangan untuk mencapai tujuan keuangan? Bagikan tips dan triknya di sini.',
    tags: ['finance', 'goals', 'tips'],
    createdAt: '2023-05-15T07:00:00.000Z',
    ownerId: 'users-4',
    upVotes: [],
    downVotes: [],
    comments: [
      {
        id: 'comment-7',
        content: 'Mulai dengan membuat anggaran bulanan dan patuhi itu.',
        createdAt: '2023-05-15T07:15:00.000Z',
        ownerId: 'users-3',
        upVotes: [],
        downVotes: [],
      },
      {
        id: 'comment-8',
        content: 'Investasi di reksa dana bisa jadi pilihan yang bagus.',
        createdAt: '2023-05-15T07:20:00.000Z',
        ownerId: 'users-1',
        upVotes: [],
        downVotes: [],
      },
    ],
  },
  {
    id: 'discussion-5',
    title: 'Teknik Meditasi untuk Ketenangan Pikiran',
    body: 'Siapa yang rutin meditasi? Bagikan teknik dan manfaat yang kalian rasakan.',
    tags: ['meditation', 'mental health', 'well-being'],
    createdAt: '2023-05-16T06:00:00.000Z',
    ownerId: 'users-5',
    upVotes: [],
    downVotes: [],
    comments: [
      {
        id: 'comment-9',
        content: 'Meditasi pagi hari membuat hari lebih tenang dan fokus!',
        createdAt: '2023-05-16T06:15:00.000Z',
        ownerId: 'users-2',
        upVotes: [],
        downVotes: [],
      },
      {
        id: 'comment-10',
        content:
          'Aku gunakan aplikasi meditasi untuk panduan, sangat membantu!',
        createdAt: '2023-05-16T06:20:00.000Z',
        ownerId: 'users-4',
        upVotes: [],
        downVotes: [],
      },
      {
        id: 'comment-11',
        content:
          'Aku gunakan tidur sih!',
        createdAt: '2023-05-16T06:20:00.000Z',
        ownerId: 'users-3',
        upVotes: [],
        downVotes: [],
      },
    ],
  },
];

module.exports = discussions;
