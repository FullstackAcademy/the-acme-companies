function renderCompanies(companies){
  let companyList = document.querySelector('#companyList');
  let html = '';
  for(let i = 0; i < companies.length; i++){
    let company = companies[i];
    html += `<li>
      <h4>${company.name.toUpperCase()}</h4>
      <p>${ company.catchPhrase }</p>
    </li>`;
  }
  companyList.innerHTML = html;
}

export { renderCompanies }