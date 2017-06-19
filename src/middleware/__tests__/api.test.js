import apiMiddleware from '../api';
import { mockFetch, mockFetchError } from '../../lib/test-utils';
import { API } from '../../consts/action-types';
import { BASE_URL } from '../../consts/env';

const data = { title: 'hello' };

const apiAction = () => ({
  type: API,
  payload: {
    success: 'SET_DATA',
    url: 'fake.json'
  }
});

describe("api middleware", () => {
  let next, dispatch, middleware, dispatchCalls, nextCalls, getState;

  const getStateMock = () => getState ? getState() : {};

  beforeEach(() => {
    getState      = null;
    next          = jest.fn();
    dispatch      = jest.fn();
    dispatchCalls = dispatch.mock.calls;
    nextCalls     = next.mock.calls;
    middleware    = apiMiddleware({ dispatch, getState: getStateMock })(next);
  });

  it('should ignore non API actions', () => {
    const sampleAction = { type: 'SAMPLE_ACTION' };

    middleware(sampleAction);

    expect(dispatchCalls.length).toBe(0);
    expect(nextCalls).toEqual([[sampleAction]]);
  });

  describe('success', () => {
    beforeEach(() => mockFetch(BASE_URL + 'fake.json', 200, JSON.stringify(data)));

    it('should dispatch SET_DATA', () => middleware(apiAction()).then(() =>
        expect(dispatchCalls[0][0]).toEqual({ type: 'SET_DATA', payload: data })));
  });

  describe('error', () => {
    beforeEach(() => mockFetchError(BASE_URL + 'fake.json', 404, 'Not found'));

    it('should dispatch error', () => middleware(apiAction()).then(() =>
      expect(dispatchCalls[0]).toMatchSnapshot()));
  });
});
