export const config = {
  apiKey: 'AIzaSyBiOfBSQ0FJicHn1xdIc-e4TOeBOcbbcKs',
  authDomain: 'bmi-km.firebaseapp.com',
  projectId: 'bmi-km',
  storageBucket: 'bmi-km.appspot.com',
  messagingSenderId: '841550241453',
  appId: '1:841550241453:web:735915f0fe9d18a581f024',
  measurementId: 'G-3FDKNQRDGV'
};

export const FIRESTORE_COLLECTIONS = {
  preferences: 'preferences',
  drafts: 'drafts',
  timers: 'timers',
  snippets: 'snippetsV2',
  defaultTeamSnippets: 'defaultTeamSnippets',
  timeEntryDrafts: 'timeEntryDrafts'
};

export const generateTimerId = ({ memberId, ticketId }) => `${memberId}-${ticketId}`;
export const generateDraftId = ({ memberId, ticketId }) => `${memberId}-${ticketId}`;
