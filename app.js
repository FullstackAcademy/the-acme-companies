let companyList = document.querySelector('#companyList');

async function fetchCompanies(){
  let response = await fetch('https://www.acme-api.com/api/companies');
  let data = await response.json();
  return data;
}

function renderCompanies(companies){
  console.log(companies);
  let html = '';
  for(let i = 0; i < companies.length; i++){
    let company = companies[i];
    html += `<li>
      <h4>${company.name}</h4>
      <p>${ company.catchPhrase }</p>
    </li>`;
  }
  companyList.innerHTML = html;
}

async function start(){
  /*
  let response = await fetch('https://www.acme-api.com/api/companies');
  let data = await response.json();
  console.log(data);
  */
  let companies = await fetchCompanies();
  renderCompanies(companies);
}

start();