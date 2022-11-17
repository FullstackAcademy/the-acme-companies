async function fetchCompanies(){
  let response = await fetch('https://www.acme-api.com/api/companies');
  let data = await response.json();
  return data;
}

export { fetchCompanies }