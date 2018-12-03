import { fetchPostsFromInstagram } from './fetchData';

describe('fetchPostsFromInstagram', () => {
  it('is a function', () => {
    expect(typeof fetchPostsFromInstagram).toBe('function');
  });

  it('returns a promise', () => {
    expect(fetchPostsFromInstagram() instanceof Promise).toBe(true);
  });

  it('resolves to an array', (done) => {
    fetchPostsFromInstagram().then((result) => {
      expect(Array.isArray(result)).toBe(true);
      done();
    });
  })

  // ...
});
