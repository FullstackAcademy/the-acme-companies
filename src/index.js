import { fetchCompanies } from './fetchers';
import { renderCompanies } from './renderers';

async function start(){
  let companies = await fetchCompanies();
  renderCompanies(companies);
}

start();