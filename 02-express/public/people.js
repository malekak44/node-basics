const form = document.querySelector(".form");
const result = document.querySelector(".result");
const input = document.querySelector('.form-input');
const formAlert = document.querySelector('.form-alert');

const fetchPeople = async () => {
    try {
        const { data } = await axios.get('/people');

        const people = data.data.map((person) => {
            return `<h5>${person.name}</h5>`
        });
        result.innerHTML = people.join('');
    } catch (error) {
        result.innerHTML = `<div class="alert alert-danger">Can't Fetch Data</div>`;
    }
}

fetchPeople();

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputVal = input.value;

    try {
        const { data } = await axios.post('/people', {
            name: inputVal
        });

        const h5 = document.createElement("h5");
        h5.textContent = data.data.name;
        result.appendChild(h5);
    } catch (error) {
        formAlert.textContent = error.response.data.msg;
    }

    input.value = '';
});