import fs from 'fs'

function FileManager(filename) {
    this.filepath = `./db/${filename}.json`;
    this.fileData = {};
    this.upToDate = false;

    const writeFile = () => {
        fs.writeFile(this.filepath, this.fileData, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    };

    const readFile = () => {
        fs.readFile(this.filepath, 'utf8', (err, data) => {
            if (err) throw err;
            console.log('The file has been read:', data);
            this.fileData = data;
        });
    };

    this.getData = () => {
        if (this.upToDate) return JSON.stringify(this.fileData);
        fs.access(this.filepath, fs.constants.F_OK, (fileNotExists) => {
            if (fileNotExists) {
                writeFile();
            } else {
                fs.access(this.filepath, fs.constants.W_OK | fs.constants.R_OK, (err) => {
                    if (err) throw err;
                    readFile();
                });
            }
        });
        this.upToDate = true;
        console.log('typeof', typeof this.fileData);
        return JSON.stringify(this.fileData);
    };

    this.dump = (data) => {
        console.log('file to dump', typeof data, data);
        this.fileData = data;
        writeFile();
        this.upToDate = false;
    };
}

export default FileManager;
