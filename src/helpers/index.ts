class Helpers {

  isUrl(text: string): boolean  {

  const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  return regex.test(text);
};
}

export default new Helpers()