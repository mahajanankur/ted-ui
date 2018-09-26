export const FETCH_TAGS_REQUEST = 'FETCH_TAGS_REQUEST';
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const FETCH_TAGS_FAILURE = 'FETCH_TAGS_FAILURE';

export const FETCH_TEDS_BY_TAG_FAILURE = 'FETCH_TEDS_BY_TAG_FAILURE';
export const FETCH_TEDS_BY_TAG_SUCCESS = 'FETCH_TEDS_BY_TAG_SUCCESS';
export const FETCH_TEDS_BY_TAG_REQUEST = 'FETCH_TEDS_BY_TAG_REQUEST';

import * as Constants from '../constants';

function requestFetchTags() {
  return {
    type: FETCH_TAGS_REQUEST,
    isFetching: true,
  };
}

function fetchTagsSuccess(tags) {
  return {
    type: FETCH_TAGS_SUCCESS,
    isFetching: false,
    tags,
  };
}

function fetchTagsError(message) {
  return {
    type: FETCH_TAGS_FAILURE,
    isFetching: false,
    message,
  };
}


export function fetchUniqueTags() {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };

  return (dispatch) => {
    dispatch(requestFetchTags());

    return fetch(Constants.IP + '/tags', config)
      .then(response =>
        response.json().then(response => ({ tags: response.data, response })),
      ).then(({ tags, response }) => {
        if (!response.success) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(fetchTagsError(response.message));
          return Promise.reject(tags);
        }
        // Dispatch the success action
        dispatch(fetchTagsSuccess(tags));
      }).catch(err => console.log('Error: ', err.message));
  };
}

// GET TEDS BY TAG NAME
function requestFetchTedByTag() {
  return {
    type: FETCH_TEDS_BY_TAG_REQUEST,
    isFetching: true,
  };
}

function fetchTedByTagSuccess(teds) {
  return {
    type: FETCH_TEDS_BY_TAG_SUCCESS,
    isFetching: false,
    teds,
  };
}

function fetchTedByTagError(message) {
  return {
    type: FETCH_TEDS_BY_TAG_FAILURE,
    isFetching: false,
    message,
  };
}

export function fetchTedByTagName(body) {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };

  return (dispatch) => {
    dispatch(requestFetchTedByTag());

    return fetch(Constants.IP + '/ted/' + body.tag + '/page?page=' + body.page
        + '&size=' + body.size + '&sortByDate=' + body.sortByDate 
        + '&sortByViews=' + body.sortByViews, config)
      .then(response =>
        response.json().then(response => ({ teds: response.data.content, response })),
      ).then(({ teds, response }) => {
        if (!response.success) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(fetchTedByTagError(response.message));
          return Promise.reject(teds);
        }
        // Dispatch the success action
        dispatch(fetchTedByTagSuccess(teds));
      }).catch(err => console.log('Error: ', err.message));
  };
}