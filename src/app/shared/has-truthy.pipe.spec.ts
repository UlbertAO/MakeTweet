import { HasTruthyPipe } from './has-truthy.pipe';

describe('HasTruthyPipe', () => {
  it('create an instance', () => {
    const pipe = new HasTruthyPipe();
    expect(pipe).toBeTruthy();
  });
});
