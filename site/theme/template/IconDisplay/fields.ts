const ARROWS = [
  'Left',
  'Right',
  'Up',
  'Down',
  'LeftSml',
  'RightSml',
  'UpSml',
  'DownSml',
  'BackTop',
  'BackBottom',
];

const STATUS = ['Information', 'Successful', 'Warning', 'Error', 'Checked', 'CheckedSml'];

const MENU = [
  'Menu',
  'Dashboard',
  'Language',
  'Calendar',
  'User',
  'Referral',
  'Coupon',
  'Teacher',
  'Student',
  'Settings',
  'Support',
  'Lesson',
  'Wallet',
  'Delete',
  'Location',
  'Video',
  'SwitchMode',
  'Giftcard',
];

const OTHERS = [
  'TimeSml',
  'NotificationSml',
  'FilterSml',
  'NoticeSml',
  'Password',
  'NewSml',
  'RecommendationSml',
  'LessonSml',
  'CrossSml',
  'EditSml',
  'DeleteSml',
  'Category',
  'LanguageSml',
  'LocationSml',
  'CameraSml',
  'SearchSml',
  'RefreshSml',
  'MoreSml',
  'MorningSml',
  'AfternoonSml',
  'EveningSml',
  'MidnightSml',
  'Morning',
  'Afternoon',
  'Evening',
  'Midnight',
  'Topic',
  'StarN',
  'StarS',
  'ToolsN',
  'ToolsS',
  'Credit',
  'Help',
  'Tips',
  'Check',
  'Test',
  'Form',
  'Premium',
];

const NAV = ['Cross', 'Back', 'Search', 'Filter', 'Share', 'Schedule', 'More', 'Addchat'];

const ACTION = [
  'CollectionN',
  'CollectionS',
  'Add',
  'Message',
  'Refresh',
  'VideoS',
  'AudioN',
  'VideoN',
  'ScreenShare',
  'TurnCamera',
  'Narrow',
  'Amplification',
  'Exit',
  'Images',
  'File',
  'Fileimg',
  'Camera',
  'Recall',
  'Download',
  'EyeS',
  'EyeN',
  'Edit',
  'UpvoteN',
  'UpvoteS',
  'Response',
  'Audio',
  'Keyboard',
  'Copy',
  'Topic',
  'Sort',
  'Replace',
  'Play',
  'PromptN',
  'PromptS',
  'Follow',
  'FollowingU',
  'Friend',
  'FollowingT',
  'Start',
];

const SOCIAL = ['Apple', 'Facebook', 'Google', 'VK', 'WeChat'];

const Communication = [
  'Classroom',
  'Facetime',
  'GoogleHangouts',
  'QQ',
  'Skype',
  'WeChatSquare',
  'Zoom',
];

const SPINNER = ['Spinner'];

export const categories = {
  ARROWS,
  MENU,
  OTHERS,
  NAV,
  ACTION,
  STATUS,
  SOCIAL,
  Communication,
  SPINNER,
};

export default categories;

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
