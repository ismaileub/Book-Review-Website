const getBooks = (key) => {
    const storedBooks = localStorage.getItem(key);
    if (storedBooks) {
        return JSON.parse(storedBooks).map(id => parseInt(id));
    }
    return [];
}

const saveBooks = (key,id) => {
    const storedBooks = getBooks(key);
    const exist = storedBooks.find(jobId => jobId === id);

    if (!exist) {
        storedBooks.push(id);
        localStorage.setItem(key, JSON.stringify(storedBooks));
    }
}

export { saveBooks, getBooks }
