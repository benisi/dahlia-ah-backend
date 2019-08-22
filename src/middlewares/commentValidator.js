import helpers from '../helpers';
import errorHandler from './errorHandler';


const { validators } = helpers;
const {
  isValidComment, isNotEmptySlug, isValidUUID
} = validators;

const { validatorError } = errorHandler;

const commentValidator = {
  postComment: [
    isValidComment(),
    isNotEmptySlug(),
    validatorError
  ],
  replyComment: [
    isNotEmptySlug(),
    isValidUUID('parentId'),
    isValidComment(),
    validatorError
  ]
};

export default commentValidator;
