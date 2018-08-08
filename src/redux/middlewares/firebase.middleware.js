import fbManager from '../utils/fbManager';
import * as AT from '../action.types';
import { fetchTimersSuccess } from '../actions/timer.actions';
import { values } from 'lodash';

const fb = new fbManager();
const firebaseMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== AT.FIREBASE) {
    return next(action);
  }

  const { payload, meta } = action;

  dispatch({ type: meta.baseAction.PENDING });

  fb[meta.method](
    meta.url,
    payload,
    (payload) => {
      dispatch({ type: meta.baseAction.SUCCESS, payload })
    },
    (payload) => {
      dispatch({ type: meta.baseAction.ERROR, payload })
    }
  );
};

export default firebaseMiddleware;
