export const testCases = {
  test1: {
    chat: '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    output: [
      {
        date: '14:24:32',
        mention: '14:24:32 Customer : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'customer',
      },
    ],
  },
  test2: {
    chat: `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.`,
    output: [
      {
        date: '14:24:32',
        mention: '14:24:32 Customer : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
        type: 'customer',
      },
      {
        date: '14:26:15',
        mention: '14:26:15 Agent : ',
        sentence: 'Aliquam non cursus erat, ut blandit lectus.',
        type: 'agent',
      },
    ],
  },
  test3: {
    chat: `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.
    14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend.
    14:28:28 Customer : Contrary to popular belief, Lorem Ipsum is not simply random text.`,
    output: [
      {
        date: '14:24:32',
        mention: '14:24:32 Customer : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
        type: 'customer',
      },
      {
        date: '14:27:00',
        mention: '14:27:00 Customer : ',
        sentence:
          'Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n',
        type: 'customer',
      },
      {
        date: '14:27:47',
        mention: '14:27:47 Agent : ',
        sentence: 'Vestibulum tempor diam eu leo molestie eleifend.\n',
        type: 'agent',
      },
      {
        date: '14:28:28',
        mention: '14:28:28 Customer : ',
        sentence:
          'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        type: 'customer',
      },
    ],
  },
  test4: {
    chat: '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.',
    output: [
      {
        date: '14:24:32',
        mention: '14:24:32 Customer : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'customer',
      },
      {
        date: '14:26:15',
        mention: '14:26:15 Agent : ',
        sentence: 'Aliquam non cursus erat, ut blandit lectus.',
        type: 'agent',
      },
    ],
  },
  test5: {
    chat: '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : I received it at 12:24:48, ut blandit lectus.',
    output: [
      {
        date: '14:24:32',
        mention: '14:24:32 Customer : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'customer',
      },
      {
        date: '14:26:15',
        mention: '14:26:15 Agent : ',
        sentence: 'I received it at 12:24:48, ut blandit lectus.',
        type: 'agent',
      },
    ],
  },
  test6: {
    chat: '14:24:32 Luca Galasso : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Emanuele Querzola : I received the package, ut blandit lectus.',
    output: [
      {
        date: '14:24:32',
        mention: '14:24:32 Luca Galasso : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'customer',
      },
      {
        date: '14:26:15',
        mention: '14:26:15 Emanuele Querzola : ',
        sentence: 'I received the package, ut blandit lectus.',
        type: 'agent',
      },
    ],
  },
  test7: {
    chat: '14:24:32 Customer Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent I received it at 12:24:48, ut blandit lectus.',
    output: [
      {
        date: '14:24:32',
        mention: '14:24:32 Customer ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'customer',
      },
      {
        date: '14:26:15',
        mention: '14:26:15 Agent ',
        sentence: 'I received it at 12:24:48, ut blandit lectus.',
        type: 'agent',
      },
    ],
  },
};
