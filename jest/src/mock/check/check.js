const check = (predicate, onSucess, onFailure) => {
  if (predicate()) {
    onSucess('yes');
  } else {
    onFailure('no');
  }
}

module.exports = check;
