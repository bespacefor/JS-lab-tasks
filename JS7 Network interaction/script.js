// Develop page with two dropdowns “Title” and “Category”
// Values of selections should invoke render of data from https://api.publicapis.org/
// Handle possible error cases

let catList = document.getElementById('categoriesList');
let URL = 'https://api.publicapis.org/categories';

(async () => {
  let response = await fetch(URL);

  if (response.ok) {
    let data = await response.json();

    for (let item of data.categories) {
      //console.log(item);
      let catOption = document.createElement('option');
      catOption.value = item;
      catOption.innerHTML = item;
      catList.appendChild(catOption);
    }

    catList.addEventListener('change', async () => {
      let titList = document.getElementById('titlesList');
      titList.innerHTML = '';

      let catURL = `https://api.publicapis.org/entries?category=${catList.value}`;
      let titResponse = await fetch(catURL).catch(error => console.error(error));
      let titData = await titResponse.json();

      for (let item of titData.entries) {
        //console.log(item);
        let titOption = document.createElement('option');
        titOption.value = item.API;
        titOption.innerHTML = item.API;
        titList.appendChild(titOption);
      }

      titList.addEventListener('change', async () => {
        let artURL = `https://api.publicapis.org/entries?title=${titList.value}`;
        let artResponse = await fetch(artURL).catch(error => console.error(error));
        let artData = await artResponse.json();
        //console.log(artData.entries[0]);

        let h1 = document.createElement('h1');
        h1.innerHTML = `Category: ${catList.value}`;
        document.body.appendChild(h1);

        let h2 = document.createElement('h2');
        h2.innerHTML = `Title: ${artData.entries[0].API}`;
        document.body.appendChild(h2);

        let p = document.createElement('p');
        p.innerHTML = `Description: ${artData.entries[0].Description}`;
        document.body.appendChild(p);

        let a = document.createElement('a');
        a.innerHTML = artData.entries[0].Link;
        a.href = artData.entries[0].Link;
        document.body.appendChild(a);
      });
    })
  } else {
    alert('HTTP error: ' + response.status);
  }
})();
