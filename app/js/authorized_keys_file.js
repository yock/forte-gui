import fs from 'fs';

class AuthorizedKeysFile {
  writeFile() {
    fs.open('myfile', 'wx', (err, fd) => {
      if (err) {
        if (err.code === "EEXIST") {
          console.error('myfile already exists');
          return;
        } else {
          throw err;
        }
      }

      fs.write(fd, 'Hello, world');
    });
  }
}

export default AuthorizedKeysFile;
