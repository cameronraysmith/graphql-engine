import { allowedQueriesCollection } from '../../../../metadata/utils';
import { renameDuplicates, parseQueryString } from './utils';
import { uploadedFileData } from './fixtures';

describe('AllowedQueries_Utils.ts', () => {
  describe('renameDuplicates', () => {
    it('should rename duplicate queries', () => {
      const allowedListQueries = [
        {
          name: 'getAuthors',
          query: 'query getAuthors { author {id name} }',
          collection: allowedQueriesCollection,
        },
      ];
      const fileQueries = parseQueryString(uploadedFileData);
      const updatedQueries = renameDuplicates(fileQueries, allowedListQueries);
      expect(updatedQueries).toMatchSnapshot();
    });
  });
});
