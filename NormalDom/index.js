console.log("hi");

const root = document.getElementById('container');
const button = document.getElementById('btn');

console.log(root);
console.log(button);

const h2 = document.createElement('h2');
h2.innerHTML = 'Resume Builder';

const loader = document.createElement('h1');

const img = document.createElement('img');
const table = document.createElement('table');

function buildResume() {
    try {
        loader.innerHTML = 'Building.....';
        root.appendChild(loader);

        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pJ35pR6nxQ2KJ5xtwi--tBkEArRngRgkJijyjmDE7Q&s=10';
        img.setAttribute('height', 100);
        img.setAttribute('width', 100);

        const row1 = document.createElement('tr');
        const row2 = document.createElement('tr');
        const row3 = document.createElement('tr');
        const row4 = document.createElement('tr');

        const nameLabel = document.createElement('td');
        const nameValue = document.createElement('td');

        const courseLabel = document.createElement('td');
        const courseValue = document.createElement('td');

        const branchLabel = document.createElement('td');
        const branchValue = document.createElement('td');

        const subjectLabel = document.createElement('td');
        const subjectValue = document.createElement('td');

        nameLabel.innerHTML = 'Name';
        nameValue.innerHTML = 'Aditya Raj';

        courseLabel.innerHTML = 'Course';
        courseValue.innerHTML = 'BTECH';

        branchLabel.innerHTML = 'Branch';
        branchValue.innerHTML = 'CSE';

        subjectLabel.innerHTML = 'Subject';
        subjectValue.innerHTML = 'FSD';

        row1.appendChild(nameLabel);
        row1.appendChild(nameValue);

        row2.appendChild(courseLabel);
        row2.appendChild(courseValue);

        row3.appendChild(branchLabel);
        row3.appendChild(branchValue);

        row4.appendChild(subjectLabel);
        row4.appendChild(subjectValue);

        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);
        table.appendChild(row4);
        table.setAttribute('border','1')

        root.appendChild(img);
        root.appendChild(h2);
        root.appendChild(table);

    } catch (e) {
        console.log(e);
        loader.innerHTML = 'Error in building resume';

    } finally {
        if (loader.parentNode === root) {
            root.removeChild(loader);
        }
    }
}

button.addEventListener('click', buildResume);